import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { ArrowLeftIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Register() {
	const { theme } = useTheme();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const backgroundColor = theme === 'dark' ? '#395B64' : '#E8DFCA';
	const textColor = theme === 'dark' ? '#ffffff' : '#000000';
	function handleSubmit(e: any) {
		e.preventDefault();

		Swal.fire({
			background: backgroundColor,
			color: textColor,
			html: `
			<div align="left">
				<p>
					Dear valued users,
				</p>
				<br/>
				<p>
					We would like to express our sincere gratitude to those who have shown interest in joining our platform. We appreciate your enthusiasm and support.
				</p>
				<br/>
				<p>
					However, as this is currently a demo version, we regret to inform you that the registration feature is not yet available. We apologize for any inconvenience this may have caused.
				</p>
				<br/>
				<p>
					In the meantime, we recommend that you use the guest account or sign in with your Google account to explore the platform and its features. We hope you find our platform useful and enjoyable.
				</p>
				<br/>
				<p>
					Thank you for your understanding and patience.
				</p>
				<br/>
				<p>
					Best regards,
				</p>
				<br/>
				<p>
					Thrift-trail
				</p>
			</div>`,
		});
	}

	function handleCancel() {
		setUsername('');
		setPassword('');
		setConfirmPassword('');
	}
	return (
		<>
			<Head>
				<title>Thrift-trail | Register</title>
			</Head>
			<main className="min-h-screen font-sans relative flex justify-center items-center">
				<div className="w-4/5 max-w-xl relative flex flex-col justify-center items-center p-7 bg-light-tertiary dark:bg-dark-secondary rounded-xl before:content[''] before:absolute before:inset-0 before:bg-light-five before:dark:bg-dark-five before:-rotate-6 before:-z-20 before:rounded-xl md:w-4/5 md:p-10 lg:w-2/5 lg:px-10 lg:py-3 xl:px-16 xl:py-6 2xl:w-1/4">
					<Link href={'/'}>
						<ArrowLeftIcon className="w-5 absolute top-3 left-3 md:w-7 lg:w-5 xl:w-7 2xl:w-6" />
					</Link>
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
						<h1 className="text-2xl font-bold md:text-5xl lg:text-3xl xl:text-4xl">Sign up</h1>
						<p className="py-1 text-xs font-light md:py-2 md:text-xl lg:text-sm xl:text-base 2xl:py-3">
							Join us and become a part of our amazing story.
						</p>
					</div>
					<form
						onSubmit={handleSubmit}
						className="w-full flex flex-col gap-4 mt-2 md:gap-8 md:mt-6 lg:mt-3 lg:gap-5 xl:mt-4 xl:gap-6 2xl:mt-8 2xl:gap-10"
					>
						<div className="relative">
							<EnvelopeIcon className="h-full w-5 absolute left-2 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5 xl:left-3 xl:w-6" />
							<input
								className="w-full px-10 py-2 text-sm bg-light-secondary text-dark-primary border-none outline-none rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-4 xl:text-lg"
								type="email"
								id="username"
								placeholder="username@example.com"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								autoFocus
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
								required
							/>
						</div>
						<div className="relative">
							<LockClosedIcon className="h-full w-5 absolute left-2 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5  xl:left-3 xl:w-6" />
							<input
								className="w-full px-10 py-2 text-sm bg-light-secondary text-dark-primary border-none outline-none rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-4 xl:text-lg"
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter Password"
								required
							/>
						</div>
						<div className="relative">
							<LockClosedIcon className="h-full w-5 absolute left-2 text-slate-500 md:left-4 md:w-8 lg:left-3 lg:w-5  xl:left-3 xl:w-6" />
							<input
								className="w-full px-10 py-2 text-sm bg-light-secondary text-dark-primary border-none outline-none rounded-full transition-all duration-500 focus:bg-light-primary md:px-14 md:py-5 md:text-xl lg:px-10 lg:py-4 lg:text-sm xl:px-11 xl:py-4 xl:text-lg"
								type="password"
								id="confirm_password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								onBlur={(e) => {
									if (e.target.value !== password) {
										return e.target.setCustomValidity('Passwords do not match');
									}
									e.target.setCustomValidity('');
								}}
								placeholder="Enter password again"
								required
							/>
						</div>
						<div className="flex justify-center items-center gap-3">
							<button
								className="w-1/2 p-2 text-sm text-center uppercase tracking-wide bg-dark-primary text-light-primary rounded-full transition-all duration-500 hover:bg-light-primary hover:text-dark-primary md:text-2xl md:p-5 lg:text-lg lg:p-3 xl:text-xl xl:p-4"
								type="submit"
							>
								Sign up
							</button>
							<button
								className="w-1/2 p-2 text-sm text-center uppercase tracking-wide bg-slate-200 text-dark-primary dark:bg-slate-300 rounded-full transition-all duration-500 hover:bg-light-primary hover:text-dark-primary md:p-5 md:text-2xl lg:p-3 lg:text-lg xl:p-4 xl:text-xl"
								onClick={handleCancel}
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</main>
		</>
	);
}
