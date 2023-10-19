'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import getTokenDecoded from './use-auth-token-decoded';
import jwt from 'jsonwebtoken';

type UseAuthCheckProps = {
    children: ReactNode;
};

const useAuthCheck: React.FC<UseAuthCheckProps> = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        console.log("🚀 ~ file: use-auth-check.ts:18 ~ useEffect ~ token:", token);
        const decodedToken = getTokenDecoded(token as string);
        console.log("🚀 ~ file: use-auth-check.ts:20 ~ useEffect ~ decodedToken:", decodedToken);
        
        if (!token || decodedToken.error) {
            router.push('/login');
        }

        if (!decodedToken.error) {
            const refreshToken = jwt.sign({ username: decodedToken.username, password: decodedToken.password }, process.env.NEXT_PUBLIC_JWT_SECRET_KEY!, {
                expiresIn: '1h',
            });
            Cookies.set('token', refreshToken);
        }
        
    }, []);

    return children;
};

export default useAuthCheck;