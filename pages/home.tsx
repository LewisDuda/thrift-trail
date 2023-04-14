import { useState, useMemo, useEffect } from 'react';
import { useSession, signOut, getSession } from 'next-auth/react';
import WaterPoolBall from '@/components/WaterPoolBall';
import { Amounts } from '@/components/Util';

interface HomeProps {
	assets_data: [];
	debets_data: [];
}

const HomePage = ({ assets_data, debets_data }: HomeProps) => {
	const { data: session, status } = useSession({ required: true });
	const [value, setValue] = useState(50);
	// console.log(assets_data, debets_data);
	const debetsAmounts = useMemo(() => Amounts(debets_data), [debets_data]);

	if (status === 'authenticated') {
		return (
			<div>
				<p>Welcome, {session.user?.email}</p>
				<WaterPoolBall value={value} />
				<button onClick={() => signOut()}>Sign out</button>
			</div>
		);
	}
};

export const getServerSideProps = async (context: any) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: '/',
			},
		};
	}
	const { user } = session;

	const assets_res = await fetch(`http://localhost:3000/api/assets?email=${user?.email}`);
	const assets_data = await assets_res.json();
	const debets_res = await fetch(`http://localhost:3000/api/debets?email=${user?.email}`);
	const debets_data = await debets_res.json();

	return {
		props: { assets_data, debets_data },
	};
};

export default HomePage;
