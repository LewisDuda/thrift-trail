import WaterPoolBall from '@/components/WaterPoolBall';
import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div>
				<p>{session.user?.name}</p>
				<img src={session.user?.image as string} alt="" className="rounded-full" />
				<p>Welcome, {session.user?.email}</p>
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		);
	}
	return (
		<div>
			<p>You are not signed in.</p>
			<button onClick={() => signIn()}>Sign in</button>
		</div>
	);
}
