'use client';
import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { MdOutlineWbSunny } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import Image from 'next/image';
export default function Navbar() {
	const [dark, setDark] = useState(false);
	return (
		<div>
			<nav className='flex justify-between w-full items-center p-2 md:p-4  bg-[#ffffff33] md:bg-transparent shadow-md md:shadow-none sticky md:relative top-0'>
				<div className='bg-[#ffffffc8] shadow-md rounded-md md:flex gap-8 justify-between px-3 py-0 items-center hidden  cursor-pointer hover:scale-105 duration-500 ease-in-out'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none bg-transparent px-3 py-2 w-full text-[0.8rem] font-poppins text-black placeholder-accent_3 '
					/>

					<MdSearch className='text-ui_primary font-[900] h-5 w-5 cursor-pointer' />
				</div>
				<div className=' flex justify-end md:justify-center gap-8 p-2 w-full md:w-fit items-center'>
					<span>
						{/* Toggle Darkmode */}
						{!dark ? (
							<MdOutlineWbSunny
								className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-ui_primary hover:text-ui_secondary1 font-[700] duration-500 ease-in-out cursor-pointer'
								onClick={() => setDark(!dark)}
							/>
						) : (
							<MdOutlineDarkMode
								className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-ui_primary hover:text-ui_secondary1 font-[700] duration-500 ease-in-out cursor-pointer'
								onClick={() => setDark(!dark)}
							/>
						)}
					</span>
					<IoNotificationsOutline className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-ui_primary hover:text-ui_secondary1 font-[700] duration-500 ease-in-out cursor-pointer' />
					{/* Customer icon */}
					<div className='flex gap-3 flex-row-reverse items-center'>
						<Image
							src='/assets/images/pexels-vlad-bagacian-1368382.jpg'
							width={50}
							height={40}
							alt='Profile Icon'
							className='text-ui_primary italic h-[50px] rounded-full flex items-center	  cursor-pointer'
						/>
						<span className={`flex flex-col gap-0 md:hidden`}>
							<h3 className='text-md font-[600] text-ui_primary'>
								Donald <strong>Davidson</strong>
								{''} <br />
								<span className='text-[0.77rem]'>(@donaldDavid33)</span>
							</h3>
							<p className='text-[0.75rem] text-slate-500 mt-1'>
								Your personal account
							</p>
						</span>
					</div>
				</div>
			</nav>
		</div>
	);
}
