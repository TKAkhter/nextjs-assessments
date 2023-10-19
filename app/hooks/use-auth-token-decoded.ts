import jwt from 'jsonwebtoken';

export const getTokenDecoded = (token: string): any => {
    return jwt.verify(token as string, process.env.NEXT_PUBLIC_JWT_SECRET_KEY!, function (error, decoded: any) {
        if (error) {
            return { error: 'Token Invalid' };
        }
        return decoded;
    });
}

export default getTokenDecoded;