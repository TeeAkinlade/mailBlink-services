import { MdSearch } from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import Image from 'next/image';
import { useCurrentUser } from '../../currentUser';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import { IoMenuOutline } from 'react-icons/io5';

export default function Navbar() {
	const { user } = useCurrentUser();
	const name = user?.user_metadata?.name?.split(' ');
	const firstName = name?.[0];
	const LastName = name?.[1];

	return (
		<div>
			<nav className='flex justify-between w-full items-center p-2 md:p-4  dark:bg-transparent md:bg-transparent shadow-md md:shadow-none sticky md:relative top-0'>
				<div className='bg-[#ffffffc8] dark:bg-dark_field shadow-md rounded-md md:flex gap-8 justify-between px-3 py-0 items-center hidden  cursor-pointer hover:scale-105 duration-500 ease-in-out'>
					<input
						type='text'
						placeholder='Search'
						className='outline-none bg-transparent px-3 py-2 w-full text-[0.8rem] font-poppins text-black dark:text-dark_text placeholder-[#B7C5CC] '
					/>

					<MdSearch className='text-ui_primary dark:text-[#B7C5CC] font-[900] h-5 w-5 cursor-pointer' />
					<IoMenuOutline className='text-ui_primary dark:text-[#B7C5CC] font-[900] h-5 w-5 cursor-pointer' />
				</div>
				<div className=' flex justify-end md:justify-center gap-8 p-2 w-full md:w-fit items-center'>
					<ThemeToggle />
					<Link href='/dashboard/Notifications'>
						<IoNotificationsOutline className='h-[1.2rem] w-[1.2rem] hover:scale-110 text-ui_primary dark:text-white hover:text-ui_button dark:hover:text-[#FDBC64] font-[700] duration-500 ease-in-out cursor-pointer' />
					</Link>
					{/* Customer icon */}
					<Link
						href='/dashboard/Accounts'
						className='flex gap-3 flex-row-reverse items-center hover:scale-110 ease-in-out duration-500'
					>
						{user ? (
							<div className='text-white  h-[50px] w-[50px] rounded-full flex items-center justify-center bg-slate-500 cursor-pointer'>
								{user?.email[0].toUpperCase()}
							</div>
						) : (
							<Image
								src='/assets/pexels-vlad-bagacian-1368382.jpg'
								width={50}
								height={40}
								alt='Profile Icon'
								className='text-white italic h-[50px]  rounded-full flex items-center bg-ui_button cursor-pointer'
							/>
						)}
						{/* <span className={`flex flex-col gap-0 md:hidden`}>
							<h3 className='text-md font-[600] text-ui_primary'>
								{firstName}
								<strong> {LastName}</strong>
								{''} <br />
								<span className='text-[0.77rem] dark:text-dark_text'>
									{user?.email}
								</span>
							</h3>
							<p className='text-[0.75rem] text-slate-500 mt-1'>
								Your personal account
							</p>
						</span> */}
					</Link>
				</div>
			</nav>
		</div>
	);
}
