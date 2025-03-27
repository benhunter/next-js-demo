'use client';

import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

interface User {
	name: String;
	id: String;
}

interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (credentials?: any) => Promise<void>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	isAuthenticated: false,
	login: async () => {},
	logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const router = useRouter();

	const login = async (credentials?: any) => {
		const loggedInUser = { name: 'Jane Doe', id: '123' };
		setUser(loggedInUser);
		setIsAuthenticated(true);
		router.push('/dashboard');
	}

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		router.push('/');
	}

	const value = {
		user,
		isAuthenticated,
		login,
		logout,
	}

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext);
}