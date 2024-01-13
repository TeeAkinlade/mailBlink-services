'use client';
import { useState, useEffect } from 'react';
import { TiChevronLeft } from 'react-icons/ti';
import { MdDashboardCustomize } from 'react-icons/md';
import { HiInboxArrowDown } from 'react-icons/hi2';
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineSchedule } from 'react-icons/ai';
import { TbBrandCampaignmonitor } from 'react-icons/tb';
import { VscReport } from 'react-icons/vsc';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import Image from 'next/image';

export default function Sidebar() {
	// State Management for smaller screens
	const [miniToggle, setMiniToggle] = useState(true);
	const [miniSidebar, setMiniSidebar] = useState(false);
	// State Management for regular sized screens
	const [toggle, setToggle] = useState(true);
	const [activeLink, setActiveLink] = useState(false);
	const MenuLinks = [
		{
			title: 'Dashboard',
			src: <MdDashboardCustomize />,
		},
		{
			title: 'Inbox',
			src: <HiInboxArrowDown />,
		},
		{
			title: 'Schedule',
			src: <AiOutlineSchedule />,
			gap: false,
		},
		{
			title: 'Analytics',
			src: <TbBrandCampaignmonitor />,
		},
		{
			title: 'Contacts',
			src: <RiContactsLine />,
		},

		
		{
			title: 'Settings',

			src: <IoSettingsOutline />,
			gap: true,
		},
		{
			title: 'Accounts',

			src: <VscAccount />,
			gap: false,
		},
		{
			title: 'Sign Out',
			src: <LiaSignOutAltSolid />,
		},
	];

	useEffect(() => {
		const handleSideMenu = () => {
		//   setMiniSidebar(window.innerWidth < 768);
			setMiniSidebar(true);
		};

		// Check if window is defined before accessing it
		if (typeof window !== 'undefined') {
			handleSideMenu();
			window.addEventListener('resize', handleSideMenu);

			return () => {
				window.removeEventListener('resize', handleSideMenu);
			};
		}
	}, []);

	console.log('Current miniSidebar state:', miniSidebar); // Move console.log here or within the return statement

	return (
		<>
			{!miniSidebar ? (
				<aside
					className={` ${
						toggle ? 'w-96' : 'w-20'
					}  ease-in-out duration-500 h-screen bg-ui_primary fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
				>
					<TiChevronLeft
						alt='Controller icon for collapsable sidebar'
						className={`absolute bg-white cursor-pointer  rounded-full -right-3 top-9 w-7 border-2 border-ui_primary ${
							!toggle && 'rotate-180'
						} ease-in-out duration-500 hidden`}
					/>

					{/* Header for sidebar */}
					<div className='flex gap-x-4 items-center'>
						{/* The images are commented out and icons are used as placeholders till the main logo and other icons arrive */}

						<h1
							className={`font-poppins origin-left text-[2rem] font-[700] leading-8 text-white ${
								!toggle && 'scale-[0.3]'
							} cursor-pointer hover:animate-pulse duration-500 mb-2`}
						>
							MailBlink
						</h1>
					</div>
					{/* Link Items */}
					<ul className='pt-6'>
						{MenuLinks.map((menu, index) => (
							<li
								key={index}
								className={`text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 group bg-transparent rounded-md duration-500 ${
									menu.gap ? 'mt-9' : 'mt-3'
								}  `}
								onClick={() => {
									setActiveLink(index);
									setToggle(!toggle);
								}}
							>
								<div
									className={` md:h-4 md:w-4  ${
										activeLink === index && 'text-ui_secondary1'
									} `}
								>
									{menu.src}
								</div>
								<span
									className={`${
										!toggle && 'scale-0'
									} duration-500 ease-in-out group-hover:text-ui_secondary1`}
								>
									{' '}
									{menu.title}{' '}
								</span>
							</li>
						))}
						<div
							className='text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-white  hover:text-ui_secondary1 bg-transparent mt-8 rounded-md duration-500'
							onClick={() => setToggle(!toggle)}
						>
							<div className=' '>
								<TiChevronLeft className={`${!toggle && 'rotate-180'}`} />
							</div>
							<span
								className={`${!toggle && 'scale-0'}  duration-500 ease-in-out`}
							>
								{' '}
								Collapse Menu{' '}
							</span>
						</div>
						<div
							className='text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2  bg-transparent mt-8 duration-500'
							onClick={() => setToggle(!toggle)}
						>
							<Image
								src='/assets/images/pexels-vlad-bagacian-1368382.jpg'
								width={40}
								height={30}
								alt='Profile Icon'
								className='text-ui_primary italic h-[50px] rounded-full  cursor-pointer'
							/>

							<span className={`flex flex-col gap-0 ${!toggle && 'scale-0'}`}>
								<h3 className='text-md font-[600] text-[#fefefe]'>
									Donald <strong>Davidson</strong>
									{''}(@donaldDavid33)
								</h3>
								<p className='text-[0.75rem] text-[#B7C5CC] mt-1'>
									Your personal account
								</p>
							</span>
						</div>
					</ul>
				</aside>
			) : (
				<aside
					className={` ${
						miniToggle ? 'w-72' : 'fixed left-[-70%] duration-500 '
					}  ease-in-out duration-500 h-screen bg-ui_primary fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
				>
					<IoIosArrowBack
						onClick={() => setMiniToggle(!miniToggle)}
						alt='Controller icon for collapsable sidebar'
						className={`absolute bg-slate-200 font-[600] cursor-pointer text-ui_secondary1  rounded-md h-10 -right-14 p-2 top-28 shadow-[-5px 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)] w-10 ${
							!miniToggle && 'rotate-180'
						} ease-in-out duration-500`}
					/>
					{/* Header for sidebar */}
					<div className='flex gap-x-4 items-center'>
						{/* The images are commented out and icons are used as placeholders till the main logo and other icons arrive */}

						<h1
							className={`font-poppins origin-left text-[2rem] font-[700] leading-8 text-white ${
								!miniToggle && 'scale-[0.3]'
							} cursor-pointer hover:animate-pulse duration-500`}
						>
							MailBlink
						</h1>
					</div>
					{/* Link Items */}
					<ul className='pt-6'>
						{MenuLinks.map((menu, index) => (
							<li
								key={index}
								className={`text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 hover:text-ui_secondary1 bg-transparent rounded-md duration-500 ${
									menu.gap ? 'mt-9' : 'mt-5'
								}  `}
								onClick={() => {
									setActiveLink(index);
									setMiniToggle(!miniToggle);
								}}
							>
								<div
									className={` md:h-4 md:w-4  ${
										activeLink === index && 'text-ui_secondary1'
									} `}
								>
									{menu.src}
								</div>
								<span
									className={`${
										!miniToggle && 'scale-0'
									} duration-500 ease-in-out`}
								>
									{' '}
									{menu.title}{' '}
								</span>
							</li>
						))}

						<div
							className={`bg-[#fff] shadow-md rounded-md flex gap-2 justify-between px-3 py-0 items-center mt-8 md:hidden ${
								!miniToggle && 'left-[-100%] duration-500 '
							} `}
						>
							<input
								type='text'
								placeholder='Search'
								className='outline-none bg-transparent px-3 py-2 text-[0.8rem] font-poppins text-black placeholder-[#B7C5CC] '
							/>

							<MdSearch className='text-ui_primary font-[900] h-5 w-5 cursor-pointer' />
						</div>
					</ul>
				</aside>
			)}
		</>
	);
}
