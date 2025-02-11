import { IoLogoInstagram } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
function Footer() {
  return (
    <footer className="px-5">
      <section className="border-t-[0.5px] mt-[4rem] text-[rgb(136,147,151)]  border-[rgba(136,147,151,0.23)] flex justify-center items-center px-2 bottom-0 bg-transparent z-20">
        <div className="flex justify-between items-center mt-4  w-full py-0 pb-[.8rem]">
          <div className="flex flex-row cursor-pointer text-[0.73rem] pr-[0.3rem] gap-3">
            <Link
              href={"/dashboard/Home"}
              className="hover:text-navyBlue ease-in-out duration-300"
            >
              &copy; 2023 VendGenix, Inc. All rights reserved.{" "}
            </Link>
            <span className=" text-[0.8rem]">·</span>
            <Link
              href={"/terms-of-use"}
              className="hover:text-navyBlue ease-in-out duration-300"
            >
              Terms
            </Link>
            <span className=" text-[0.8rem]">·</span>
            <Link
              href={"/privacy-policy"}
              className="hover:text-navyBlue ease-in-out duration-300"
            >
              Privacy
            </Link>
            <span className=" text-[0.8rem]">·</span>
            <Link
              href={"/contact-us"}
              className="hover:text-navyBlue ease-in-out duration-300"
            >
              Contact Us
            </Link>
            <span className=" text-[0.8rem]">·</span>
            <Link
              href={"/blog"}
              className="hover:text-navyBlue ease-in-out duration-300"
            >
              Blog
            </Link>
            <span className=" text-[0.8rem]">·</span>
            <p className="hover:text-navyBlue ease-in-out duration-300">
              Unsubscribe from Newsletter
            </p>
          </div>
          <div className="font-[400] text-[1rem] cursor-pointer gap-4 pr-[.3rem] flex items-center">
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
