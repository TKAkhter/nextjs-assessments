import { loginModel } from "@/types/user";
import Cookies from 'js-cookie';

export const useLogin = async (user: loginModel) => {
    const {username, password} = user;

    if (!username || !password) {
        return ({error: 'Please enter both username and password.'});
    }

    try {
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.status === 200) {
            const data = await response.json();
            const { token } = data;

            Cookies.set('token', token);
        } else if (response.status === 401) {
            return ({error: 'Invalid username or password. Please try again.'});
        } else {
            return ({error: 'An error occurred during login. Please try again later.'});
        }
    } catch (error) {
        console.error('Login error:', error);
        return ({error: 'An error occurred. Please try again later.'});
    }
};

export default useLogin;