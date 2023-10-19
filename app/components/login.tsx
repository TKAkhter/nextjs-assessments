'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            // Check if the username and password are not empty
            if (!username || !password) {
                setError('Username and password are required.');
                return;
            }

            // Send a POST request to the authentication API
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

                // Store the JWT token securely (e.g., in localStorage)
                localStorage.setItem('token', token);

                // Redirect to the protected dashboard page
                router.push('/dashboard');
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 ">Login</h2>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-2 border rounded text-black"
                />
            </div>
            <div className="mb-4">
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border rounded text-black"
                />
            </div>
            <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded">
                Login
            </button>
        </div>
    );
};

export default Login;