'use client';
import { useState, useEffect } from 'react';
import { TiChevronLeft } from 'react-icons/ti';
import { MdDashboardCustomize } from 'react-icons/md';
import { HiInboxArrowDown } from 'react-icons/hi2';
import { LiaSignOutAltSolid } from 'react-icons/lia';
import { RiContactsLine } from 'react-icons/ri';
import { AiOutlineSchedule } from 'react-icons/ai';
import { TbBrandCampaignmonitor } from 'react-icons/tb';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowBack } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';
import { VscAccount } from 'react-icons/vsc';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoNotificationsOutline } from 'react-icons/io5';
import { useCurrentUser } from '../../currentUser';
import Image from 'next/image';
import Spinner from '../../../../components/Spinner';

export default function Sidebar() {
	const { user, loading } = useCurrentUser();

	// SignOut Functionality
	const supabase = createClientComponentClient();
	const router = useRouter();
	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.push('/');

		if (loading) {
			return <Spinner />;
		}
	};

	//Handling Navigation for the sidebar
	const handleNavigate = (point) => {
		return router.push(`/dashboard/${point}`);
	};
	const externalNavigate = (point) => {
		return router.push(`/${point}`);
	};

	// retrieving user information from currentUser.js
	const name = user?.user_metadata?.name?.split(' ');
	const firstName = name?.[0]
		.charAt(0)
		.toUpperCase()
		.concat(name?.[0].slice(1));
	const LastName = name?.[1].charAt(0).toUpperCase().concat(name?.[1].slice(1));

	// State Management for smaller screens
	const [miniToggle, setMiniToggle] = useState(true);
	const [miniSidebar, setMiniSidebar] = useState(false);
	// State Management for regular sized screens
	const [toggle, setToggle] = useState(true);
	const [activeLink, setActiveLink] = useState(false);

	const MenuLinks = [
		{
			title: 'Home',
			src: <MdDashboardCustomize />,
			route: 'Home',
			onClick: handleNavigate,
		},
		{
			header: 'Utilities',
			title: 'Campaigns',
			src: <HiInboxArrowDown />,
			route: 'campaigns',
			gap: true,
			onClick: externalNavigate,
		},
		{
			title: 'Schedule',
			src: <AiOutlineSchedule />,
			route: 'Schedule',
			onClick: handleNavigate,
		},
		{
			title: 'Analytics',
			src: <TbBrandCampaignmonitor />,
			route: 'Analytics',
			onClick: handleNavigate,
		},
		{
			title: 'Contacts',
			src: <RiContactsLine />,
			route: 'Contacts',
			onClick: handleNavigate,
		},

		{
			header: 'Settings',
			title: 'Profile Settings',
			route: 'Settings',
			src: <IoSettingsOutline />,
			gap: true,
			onClick: handleNavigate,
		},
		{
			title: 'Account Settings',
			route: 'Accounts',
			src: <VscAccount />,
			gap: false,
			onClick: handleNavigate,
		},
		{
			title: 'Notification Settings',
			route: 'Notifications',
			src: <IoNotificationsOutline />,

			onClick: handleNavigate,
		},
		{
			header: 'Exit',
			title: 'Sign Out',
			src: <LiaSignOutAltSolid />,
			gap: true,
			onClick: handleSignOut,
		},
	];

	useEffect(() => {
		const handleSideMenu = () => {
			setMiniSidebar(window?.innerWidth < 768);
		};

		// Calling the SideMenu function to decide which sidebar to render
		handleSideMenu();
		window.addEventListener('resize', handleSideMenu);

		return () => {
			window.removeEventListener('resize', handleSideMenu);
		};
	}, []);

	return (
		<>
			{!miniSidebar ? (
				<aside
					className={` ${
						toggle ? 'w-96' : 'w-20'
					}  ease-in-out duration-500 h-screen bg-[#0A372F] dark:bg-dark_primary fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
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
							Salesblink.
						</h1>
					</div>
					{/* Link Items */}
					<ul className='pt-6'>
						{MenuLinks.map((menu, index) => (
							<>
								{menu.gap && (
									<span className=' mt-2  text-[0.66rem] text-[#919cab] text-opacity-50 '>
										{menu.header}
									</span>
								)}
								<li
									key={index}
									className={`text-[#B7C5CC] text-[0.75rem] flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 group bg-transparent rounded-md duration-500 ${
										menu.gap ? 'mt-4 ' : 'mt-2'
									}  `}
									onClick={() => {
										setActiveLink(index);
										setToggle(!toggle);
										if (menu.onClick == handleSignOut) {
											menu.onClick();
										} else if (menu.onClick == handleNavigate) {
											menu.onClick(menu.route);
										} else if (menu.onClick == externalNavigate) {
											menu.onClick(menu.route);
										}
									}}
								>
									{' '}
									<div
										className={` md:h-4 md:w-4 group-hover:text-ui_secondary1 dark:group-hover:text-ui_button  ${
											activeLink === index &&
											'text-[#84f2da]   dark:text-ui_button'
										} `}
									>
										{menu.src}
									</div>
									<span
										className={`${
											!toggle && 'scale-0'
										} duration-500 ease-in-out group-hover:text-ui_secondary1 dark:group-hover:text-ui_button`}
									>
										{' '}
										{menu.title}{' '}
									</span>
								</li>
							</>
						))}
						<div
							className='text-[#B7C5CC] text-[0.75rem] flex items-center gap-x-4 cursor-pointer p-2  hover:bg-white  hover:text-ui_secondary1 dark:hover:text-ui_button bg-transparent  rounded-md duration-500'
							onClick={() => setToggle(!toggle)}
						>
							<div className=' '>
								<TiChevronLeft className={`${!toggle && 'rotate-180'}`} />
							</div>
							<span
								className={`${
									!toggle && 'scale-0'
								} text-[0.75rem] duration-500 ease-in-out`}
							>
								{' '}
								Collapse Menu{' '}
							</span>
						</div>
						<Link
							href='/dashboard/Accounts'
							className='text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2  bg-transparent mt-5'
							onClick={() => setToggle(!toggle)}
						>
							{user ? (
								<div className='text-white  h-[50px] w-[50px] rounded-full flex items-center justify-center bg-slate-500 cursor-pointer'>
									{user?.email[0].toUpperCase()}
								</div>
							) : (
								<Image
									src='/assets/images/pexels-vlad-bagacian-1368382.jpg'
									width={40}
									height={30}
									alt='Profile Icon'
									className='text-white italic h-[50px]  rounded-full flex items-center bg-ui_button cursor-pointer'
								/>
							)}

							<span className={`flex flex-col gap-0 ${!toggle && 'scale-0'}`}>
								{name && (
									<h3 className={`text-md font-[400] text-[#fefefe] `}>
										{firstName} <strong>{LastName}</strong>
										<br />
									</h3>
								)}
								<div
									className={`text-md font-[600] text-[#fefefe] ${
										user?.email?.length >= 20 && 'text-[0.65rem]'
									}`}
								>
									{''}
									{user?.email}
								</div>

								<p className='text-[0.7rem] text-[#B7C5CC] '>
									Your personal account
								</p>
							</span>
						</Link>
					</ul>
				</aside>
			) : (
				<aside
					className={` ${
						miniToggle ? 'w-72' : 'fixed left-[-70%] duration-500 '
					}  ease-in-out duration-500 h-screen bg-[#0A372F] dark:bg-ui_primary fixed left-0 top-0 md:relative p-5 pt-8 z-50`}
				>
					<IoIosArrowBack
						onClick={() => setMiniToggle(!miniToggle)}
						alt='Controller icon for collapsable sidebar'
						className={`absolute bg-slate-200 font-[600] cursor-pointer text-ui_button  rounded-md h-10 -right-14 p-2 top-28 shadow-[-5px 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)] w-10 ${
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
							Saleblink.
						</h1>
					</div>
					{/* Link Items */}
					<ul className='pt-6'>
						{MenuLinks.map((menu, index) => (
							<li
								key={index}
								className={`text-[#B7C5CC] text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-slate-50 hover:text-ui_button bg-transparent rounded-md duration-500 ${
									menu.gap ? 'mt-9' : 'mt-5'
								}  `}
								onClick={() => {
									setActiveLink(index);
									setMiniToggle(!miniToggle);
									if (menu.onClick == handleSignOut) {
										menu.onClick();
									} else if (menu.onClick == handleNavigate) {
										menu.onClick(menu.route);
									} else if (menu.onClick == externalNavigate) {
										menu.onClick(menu.route);
									}
								}}
							>
								<div
									className={` md:h-4 md:w-4  ${
										activeLink === index && 'text-ui_button'
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
