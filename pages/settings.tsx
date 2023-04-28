import { signIn, getSession, useSession, signOut } from 'next-auth/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MobilePanel } from '@/components/Home';

const SettingPage = () => {
	const { data: session, status } = useSession({ required: true });
	const { systemTheme, theme, setTheme } = useTheme();

	const [currentTheme, setCurrentTheme] = useState('' as any);

	useEffect(() => {
		if (theme === 'system') {
			setCurrentTheme(systemTheme);
		} else {
			setCurrentTheme(theme);
		}
	}, [theme, systemTheme]);

	if (status === 'authenticated') {
		return (
			<main>
				<div className="flex flex-col justify-center">
					<p className="p-2 text-slate-400">Basic Settings</p>
					<span className="h-max w-full flex justify-between items-center bg-light-secondary dark:bg-dark-secondary p-2 border-b border-slate-300 dark:border-dark-tertiary">
						{currentTheme === 'dark' ? (
							<div className="w-full flex justify-between items-center" onClick={() => setTheme('light')}>
								<p>Dark Mode</p>
								<p className="text-slate-400">off</p>
							</div>
						) : (
							<div className="w-full flex justify-between items-center" onClick={() => setTheme('dark')}>
								<p>Dark Mode</p>
								<p className="text-slate-400">on</p>
							</div>
						)}
					</span>
					<span
						className="h-max w-full flex justify-between items-center bg-light-secondary dark:bg-dark-secondary p-2"
						onClick={() => signOut()}
					>
						Sign Out
					</span>
				</div>
				<div className="h-10 w-full fixed bottom-0 left-0 flex justify-around items-center py-6 text-xs font-extralight z-10 bg-light-primary border-t border-slate-300 md:py-9 md:text-base md:font-normal">
					<MobilePanel />
				</div>
			</main>
		);
	}
};

export default SettingPage;

export const getServerSideProps = async (context: any) => {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: '/',
			},
		};
	}

	return {
		props: { session },
	};
};
