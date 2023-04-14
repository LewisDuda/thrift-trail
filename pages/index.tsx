import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { signIn, getSession } from 'next-auth/react';
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ThemeSwitch from '@/components/ThemeSwitch';

export default function Login() {
	return (
		<>
			<Head>
				<title>Thrift-trail</title>
			</Head>
			<main className="min-h-screen font-sans relative flex justify-center items-center">
				<ThemeSwitch />
				{/* Login card container */}
				<div className="w-4/5 max-w-xl relative flex flex-col justify-center items-center p-7 bg-light-tertiary rounded-xl dark:bg-dark-secondary before:content[''] before:absolute before:inset-0 before:bg-light-five before:dark:bg-dark-five before:-rotate-6 before:-z-20 before:rounded-xl md:w-4/5 md:p-10 lg:w-2/5 lg:px-10 lg:py-3 xl:px-16 xl:py-6 2xl:w-1/4">
					<div className="w-20 md:w-40 lg:w-28 xl:w-32">
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
						<h1 className="text-2xl font-bold md:text-5xl lg:text-3xl xl:text-4xl">Sign In</h1>
						<p className="py-1 text-xs font-light md:py-2 md:text-xl lg:text-sm xl:text-base 2xl:py-3">
							Please login to use the Demo.
						</p>
					</div>
					{/* Login card form */}
					<form
						action=""
						className="w-full flex flex-col gap-4 mt-2 md:gap-8 md:mt-6 lg:mt-3 lg:gap-5 xl:mt-4 xl:gap-6 2xl:mt-8 2xl:gap-10"
					>
						<div className="relative">
							<EnvelopeIcon className="h-full w-5 absolute left-2 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5 xl:left-3 xl:w-6" />
							<input
								className="w-full px-10 py-2 text-sm bg-light-secondary text-dark-primary border-none outline-none rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-4 xl:text-lg"
								type="text"
								placeholder="Enter Email"
								id="emailForm"
								autoFocus
								required
							/>
						</div>
						<div className="relative">
							<LockClosedIcon className="h-full w-5 absolute left-2 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5  xl:left-3 xl:w-6" />
							<input
								type="password"
								placeholder="Enter Password"
								id="passwordForm"
								required
								className="w-full px-10 py-2 text-sm bg-light-secondary text-dark-primary border-none outline-none rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-4 xl:text-lg"
							/>
						</div>
						{/* Login card button  */}
						<button
							type="submit"
							className="p-2 text-sm text-center uppercase tracking-wide bg-dark-primary text-light-primary rounded-full transition-all duration-500 hover:bg-light-primary hover:text-dark-primary md:text-2xl md:p-5 lg:text-lg lg:p-3 xl:text-xl xl:p-4"
						>
							Sign In
						</button>
						<div className="grid grid-cols-3 items-center 2xl:-my-4">
							<hr />
							<p className="text-sm text-center md:text-2xl lg:text-base xl:text-xl">OR</p>
							<hr />
						</div>
						<button
							type="button"
							onClick={() => signIn('google', { callbackUrl: '/home' })}
							className="p-2 text-sm text-center uppercase tracking-wide bg-dark-primary text-light-primary rounded-full transition-all duration-500 hover:bg-light-primary hover:text-dark-primary md:p-5 md:text-2xl lg:p-3 lg:text-lg xl:p-4 xl:text-xl"
						>
							Login with Google
						</button>
					</form>
					{/* Login card footer */}
					<div className="mt-3 text-xs font-light text-center md:mt-7 md:text-lg lg:mt-4 lg:text-xs xl:mt-5 xl:text-base 2xl:mt-10">
						Don&rsquo;t have an account?&ensp;
						<Link
							href="/register"
							className="hover:text-light-primary transition-all duration-500 dark:hover:text-dark-primary"
						>
							Create a free account.
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}

export const getServerSideProps = async (context: any) => {
	const session = await getSession(context);
	if (session) {
		return {
			redirect: {
				destination: '/home',
			},
		};
	}

	return {
		props: { session },
	};
};
