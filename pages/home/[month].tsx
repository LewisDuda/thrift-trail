import { useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useSession, getSession } from 'next-auth/react';
import WaterPoolBall from '@/components/WaterPoolBall';
import { Amounts } from '@/components/Util';
import {
	Assets,
	BalanceCard,
	Incomes,
	IncomeNspending,
	LeftPanel,
	MobilePanel,
	MonthPicker,
	Spendings,
} from '@/components/Home';

interface HomeProps {
	incomes_data: [];
	spendings_data: [];
	userLogo: string;
}

const HomePage = ({ incomes_data, spendings_data, userLogo }: HomeProps) => {
	const { data: session, status } = useSession({ required: true });
	const [value, setValue] = useState(100); // WaterPoolBall value
	const [time, setTime] = useState(new Date()); // MonthPicker time
	const incomesAmounts = useMemo(() => Amounts(incomes_data), [incomes_data]);
	const spendingsAmounts = useMemo(() => Amounts(spendings_data), [spendings_data]);

	if (status === 'authenticated') {
		return (
			<>
				<Head>
					<title>Thrift-trail | Home</title>
				</Head>
				{/* 1024px down show */}
				<main className="relative h-max min-h-full flex flex-col justify-center items-center py-16 md:py-32 lg:hidden">
					<div className="h-max w-full fixed top-0 left-0 flex justify-around items-center py-2 z-10 text-2xl font-semibold bg-dark-tertiary md:text-3xl md:py-5">
						<MonthPicker time={time} setTime={setTime} />
					</div>
					<div className="relative h-max flex flex-col justify-center items-center px-3 gap-10 md:gap-20">
						<div className="w-full flex justify-center items-center md:gap-16">
							<WaterPoolBall value={value} />
							<BalanceCard />
						</div>
						<div className="w-full flex flex-col justify-center items-center pl-16 md:pl-36">
							<Assets />
						</div>
						<div className="w-full flex flex-col justify-center items-center gap-5 md:gap-10">
							<IncomeNspending />
						</div>
						<div className="w-full flex flex-wrap flex-col justify-center items-center gap-8 pl-14 md:flex-row md:justify-start md:pl-14">
							<Incomes />
						</div>
						<div className="w-full flex flex-col justify-center items-center px-14">
							<Spendings />
						</div>
					</div>
					<div className="h-10 w-full fixed bottom-0 left-0 flex justify-around items-center py-6 text-xs font-extralight z-10 bg-light-primary border-t border-slate-300 md:py-9 md:text-base md:font-normal">
						<MobilePanel />
					</div>
				</main>
				{/* 1024px up show */}
				<main className="hidden relative h-full min-h-full lg:flex justify-center items-center px-5 font-sans 2xl:px-10">
					<div className="absolute top-0 w-full h-28 overflow-hidden -z-10 2xl:h-40">
						<Image
							className="w-full absolute top-0"
							src={'/HomeBanner.jpg'}
							alt=""
							width={1000}
							height={1000}
							priority={true}
						/>
					</div>
					{/* Left Panel */}
					<div className="h-5/6 w-1/6 flex-col justify-between items-center px-1 py-5 bg-dark-tertiary rounded-3xl hidden dark:bg-light-quaternary lg:flex 2xl:px-2">
						<LeftPanel userImage={userLogo} ballValue={value} />
					</div>
					{/* Main Content */}
					<div className="h-5/6 w-5/6 flex flex-wrap justify-center items-center pl-5 2xl:px-10">
						{/* Available Card Area */}
						<div className="h-3/5 w-1/2 flex items-center pt-20">
							<div className="w-1/2 flex justify-center">
								<BalanceCard />
							</div>
							<div className="w-1/2 flex flex-col pl-10">
								<Assets />
							</div>
						</div>
						{/* Incomes and Spendings Card Area */}
						<div className="h-3/5 w-1/2 flex flex-col justify-center items-center pt-20 gap-10 2xl:gap-14">
							<IncomeNspending />
						</div>
						{/* Incomes Card Area */}
						<div className="h-2/5 w-1/2 flex flex-wrap">
							<Incomes />
						</div>
						{/* Spendings Card Area */}
						<div className="h-2/5 w-1/2 flex flex-wrap">
							<Spendings />
						</div>
					</div>
				</main>
			</>
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

	const incomes_res = await fetch(`${process.env.API_URL}/incomes?email=${user?.email}`);
	const incomes_data = await incomes_res.json();
	const spendings_res = await fetch(`${process.env.API_URL}/spendings?email=${user?.email}`);
	const spendings_data = await spendings_res.json();
	const userLogo = !user?.image ? '/GuestLogo.webp' : String(user?.image);

	return {
		props: { incomes_data, spendings_data, userLogo },
	};
};

export default HomePage;
