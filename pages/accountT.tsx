import { useSession, signIn, signOut, getSession } from 'next-auth/react';

const account = () => {
	const { data: session, status } = useSession({ required: true });
	if (status === 'authenticated') {
		return (
			<div>
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
};

export const getServerSideProps = async (context: any) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: '/login',
			},
		};
	}

	return {
		props: { session },
	};
};

export default account;
