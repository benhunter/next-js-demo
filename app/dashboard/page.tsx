'use client';

import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react";

export default function DashboardPage() {
	const { isAuthenticated, user } = useAuth();
	const router = useRouter();
	
	useEffect(() => {
		if (!isAuthenticated) {
			router.replace('/');
		}
	}, [isAuthenticated, router])

	return (
		<main>
			<h1>Dashboard</h1>
			<p>User: {user?.name}</p>
		</main>
	)

}