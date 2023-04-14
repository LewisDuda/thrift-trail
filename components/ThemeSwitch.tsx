import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('' as any);
	useEffect(() => {
		if (theme === 'system') {
			setCurrentTheme(systemTheme);
		} else {
			setCurrentTheme(theme);
		}
	});

	return (
		<div className="fixed top-3 right-3">
			{currentTheme === 'dark' ? (
				<button onClick={() => setTheme('light')}>
					<SunIcon className="h-6 w-6 " />
				</button>
			) : (
				<button onClick={() => setTheme('dark')}>
					<MoonIcon className="h-6 w-6 " />
				</button>
			)}
		</div>
	);
};
export default ThemeSwitch;
