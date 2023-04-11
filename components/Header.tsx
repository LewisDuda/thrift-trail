import { useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === 'system' ? systemTheme : theme;
	return (
		<div className="fixed top-3 right-3">
			{currentTheme === 'dark' ? (
				<button onClick={() => setTheme('light')}>
					<SunIcon className="h-6 w-6 text-gray-500" />
				</button>
			) : (
				<button onClick={() => setTheme('dark')}>
					<MoonIcon className="h-6 w-6 text-gray-500" />
				</button>
			)}
		</div>
	);
};

export default Header;
