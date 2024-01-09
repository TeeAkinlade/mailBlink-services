'use client';
import { useEffect, useState } from 'react';

import { MdOutlineWbSunny } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') setDarkMode(true);
	}, []);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkMode]);

	return (
		<div>
			<span>
				{/* Toggle Darkmode */}
				{!darkMode ? (
					<MdOutlineDarkMode
						className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-ui_primary hover:text-ui_secondary1 font-[700] duration-500 ease-in-out cursor-pointer'
						onClick={() => setDarkMode(!darkMode)}
					/>
				) : (
					<MdOutlineWbSunny
						className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-white hover:text-[#FDBC64] font-[700] duration-500 ease-in-out cursor-pointer'
						onClick={() => setDarkMode(!darkMode)}
					/>
				)}
			</span>
		</div>
	);
};

export default ThemeToggle;
