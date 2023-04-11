import Image from 'next/image';
import Head from 'next/head';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Header from '@/components/Header';
import Link from 'next/link';

export default function Login() {
	// return (
	// 	<div>
	// 		{currentTheme === 'dark' ? (
	// 			<button onClick={() => setTheme('light')}>Switch</button>
	// 		) : (
	// 			<button onClick={() => setTheme('dark')}>Switch</button>
	// 		)}
	// 	</div>
	// );

	return (
		<>
			<Head>
				<title>Thrift-trail</title>
			</Head>
			<main className="font-sans relative h-full w-full flex flex-col justify-center items-center">
				<Header />
				<div className="h-96 w-64 relative flex flex-col justify-center items-center p-5 bg-light-tertiary rounded-xl dark:bg-dark-secondary before:content[''] before:absolute before:inset-0 before:bg-light-five before:dark:bg-dark-five before:-rotate-6 before:-z-20 before:rounded-xl md:h-4/6 md:w-4/6 lg:h-4/6 lg:w-2/6 xl:h-4/6 xl:w-2/6 2xl:w-1/4">
					<div className=" h-20 w-20 bg-purple-500 md:h-52 md:w-52 lg:h-36 lg:w-36 xl:h-40 xl:w-40">
						<Image
							className="h-auto w-full"
							src={'/Logo.png'}
							height={100}
							width={100}
							priority={true}
							alt={''}
						></Image>
					</div>
					<div className="text-center">
						<h1 className="font-bold text-2xl md:text-5xl lg:text-3xl xl:text-4xl">Sign In</h1>
						<p className="font-light text-xs py-2 md:text-xl lg:text-sm xl:text-base 2xl:py-3">
							Please login to use the Demo.
						</p>
					</div>
					<form
						action=""
						className="flex flex-col gap-5 mt-3 md:gap-8 md:mt-6 lg:mt-3 lg:gap-5 xl:mt-4 xl:gap-6 2xl:mt-8 2xl:gap-10"
					>
						<div className="relative">
							<EnvelopeIcon className="absolute line-through left-2 h-full w-5 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5 xl:left-3 xl:w-6" />
							<input
								className="w-full border-none outline-none bg-light-secondary text-dark-primary px-10 py-2 text-sm rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-5 xl:text-base"
								type="text"
								placeholder="Enter Email"
								id="emailForm"
								autoFocus
								required
							/>
						</div>
						<div className="relative">
							<LockClosedIcon className="absolute line-through left-2 h-full w-5 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5  xl:left-3 xl:w-6" />
							<input
								type="password"
								placeholder="Enter Password"
								id="passwordForm"
								required
								className="w-full border-none outline-none bg-light-secondary text-dark-primary px-10 py-2 text-sm rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:py-5 xl:text-base"
							/>
						</div>
						<button
							type="submit"
							className=" bg-dark-primary text-light-primary text-sm p-2 rounded-full text-center uppercase tracking-wide transition-all duration-500 hover:bg-light-primary hover:text-dark-primary md:text-2xl md:p-5 lg:text-lg lg:p-3 xl:text-xl xl:p-4"
						>
							Sign In
						</button>
					</form>
					<div className="text-center text-xs font-light mt-4 md:text-lg md:mt-7 lg:text-xs lg:mt-4 xl:text-sm xl:mt-5 2xl:mt-10">
						Don't have an account?{' '}
						<Link href="/register" className="hover:text-light-primary transition-all duration-500">
							Create a free account.
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
