import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitch = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [currentTheme, setCurrentTheme] = useState('' as any);
	useEffect(() => {
		if (theme === 'system') {
			setCurrentTheme(systemTheme);
		} else {
			setCurrentTheme(theme);
		}
	}, [theme, systemTheme]);

	return (
		<>
			{currentTheme === 'dark' ? (
				<FontAwesomeIcon icon={faSun} className="h-full w-full" onClick={() => setTheme('light')} />
			) : (
				<FontAwesomeIcon icon={faMoon} className="h-full w-full" onClick={() => setTheme('dark')} />
			)}
		</>
	);
};
export default ThemeSwitch;
