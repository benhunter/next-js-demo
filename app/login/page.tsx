'use client';

import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
	const { login } = useAuth();
	
	const handleLogin = async () => {
		await login({username: 'demo', password: 'demo' });
	}

	return (
		<main>
			<h1>Login</h1>
			<p>Click to login</p>
			<button onClick={handleLogin}>Login</button>
		</main>
	)
}