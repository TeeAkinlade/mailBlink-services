import { IoLogoInstagram } from 'react-icons/io';
import { ImFacebook2 } from 'react-icons/im';
import { IoLogoLinkedin } from 'react-icons/io5';import { RiTwitterXFill } from 'react-icons/ri';
import Link from 'next/link';
function Footer() {
	return (
		<footer className='px-5'>
			<section className='border-t-[0.5px] mt-[4rem] text-[rgb(136,147,151)]  border-[rgba(136,147,151,0.23)] flex justify-center items-center px-2 bottom-0 bg-transparent z-20'>
				{' '}
				<div className='flex justify-between items-center mt-4  w-full py-0 pb-[.8rem]'>
					<div className='md:flex md:flex-row cursor-pointer text-[0.73rem] pr-[0.3rem] gap-3 gap-x-[5.3rem] md:gap-x-3 gridlayout'>
						<p className='item1'>
							{' '}
							&copy; 2023 Salesblink, Inc. All rights reserved.{' '}
						</p>
						<span className=' text-[0.8rem] hidden md:block'>·</span>
						<Link
							href='/legal-concerns/terms-of-use'
							className='hover:text-ui_button ease-in-out duration-300 item6'
						>
							Terms
						</Link>
						<span className=' text-[0.8rem] hidden md:block'>·</span>
						<Link
							href='/legal-concerns/privacy-policy'
							className='hover:text-ui_button ease-in-out duration-300 item2'
						>
							Privacy
						</Link>
						<span className=' text-[0.8rem] hidden md:block'>·</span>
						<Link
							href='/contact-us'
							className='hover:text-ui_button ease-in-out duration-300 item3'
						>
							Contact Us
						</Link>
						<span className=' text-[0.8rem] hidden md:block'>·</span>
						<Link
							href='/blog'
							className='hover:text-ui_button ease-in-out duration-300 item4'
						>
							Blog
						</Link>
						<span className=' text-[0.8rem] hidden md:block'>·</span>
						<p className='hover:text-ui_button ease-in-out duration-300 item5'>
							Unsubscribe from Newsletter
						</p>
					</div>
					<div className='font-[400] text-[1rem] cursor-pointer gap-4 pr-[.3rem] flex items-center'>
						{/* <p className='text-[.67rem] text-[rgb(136,147,151)]'>
							Follow us on{' '}
						</p>
						<div className='flex flex-row text-slate-600 dark:text-dark_text dark:hover:text-[#228b22] hover:text-[#228b22] hover:scale-110 ease-in-out duration-300  items-center'>
							<IoLogoInstagram size={22.5} />
						</div>
						<div className='flex flex-row text-slate-600 dark:text-dark_text dark:hover:text-[#228b22] hover:text-[#228b22] hover:scale-110 ease-in-out duration-300 items-center'>
							<ImFacebook2 />
						</div>{' '}
						<div className='flex flex-row text-slate-600 dark:text-dark_text dark:hover:text-[#228b22] hover:text-[#228b22] hover:scale-110 ease-in-out duration-300 items-center'>
							<IoLogoLinkedin />
						</div>{' '}
						<div className='flex flex-row text-slate-600 dark:text-dark_text dark:hover:text-[#228b22] hover:text-[#228b22] hover:scale-110 ease-in-out duration-300 items-center'>
							<RiTwitterXFill />
						</div> */}
					</div>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
