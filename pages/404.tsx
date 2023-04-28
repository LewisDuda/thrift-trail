import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const FourOhFour = () => {
	const router = useRouter();
	async function handleSignOut() {
		signOut({
			redirect: false,
		}).then(() => router.push('/'));
	}
	return (
		<>
			<Head>
				<title>Thrift-trail | 404</title>
			</Head>
			<main className="h-full w-full flex flex-col justify-center items-center text-center p-6 gap-10 md:gap-12 2xl:gap-10">
				<Image
					className="h-36 w-36 md:h-64 md:w-64 2xl:h-96 2xl:w-96"
					src="/Logo.png"
					alt=""
					height={1000}
					width={1000}
				/>
				<h3 className="text-2xl font-semibold md:text-3xl 2xl:text-5xl">Oops! Something went wrong!</h3>
				<p className="text-sm font-extralight md:text-lg 2xl:text-xl">
					Let us help guide you out and get you back home.
				</p>
				<div className="flex justify-center items-center gap-6 text-sm md:gap-12 md:text-xl 2xl:gap-20 2xl:text-xl">
					<Link
						className="h-10 w-36 flex justify-center items-center rounded-2xl bg-light-quaternary md:h-16 md:w-48 md:rounded-3xl 2xl:h-20 2xl:w-52 2xl:rounded-3xl"
						href="/"
					>
						Return to Home
					</Link>
					<button
						className="h-10 w-36 bg-light-tertiary rounded-2xl dark:bg-dark-tertiary md:h-16 md:w-48 2xl:h-20 md:rounded-3xl 2xl:w-52 2xl:rounded-3xl"
						onClick={handleSignOut}
					>
						Help me out
					</button>
				</div>
			</main>
		</>
	);
};

export default FourOhFour;
