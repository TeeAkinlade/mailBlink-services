"use client";

import Link from "next/link";
import { footerLinks } from "@/constants";
import { useState } from "react";

const FooterLink = () => {
  const [subscribed, setSubscribed] = useState(false);

  return (
		<div className='flex flex-col md:gap-16 md:flex-row'>
			<div className='flex gap-10'>
				{footerLinks.map((item) => (
					<div key={item.id}>
						<h3 className='mb-6 text-base font-semibold text-black md:text-lg'>
							{item.title}
						</h3>
						{item.links.map(({ id, href, link }) => (
							<div className='pb-4' key={id}>
								<Link
									href={href}
									className='text-sm text-primaryBlack hover:text-[#089373] md:text-base'
								>
									{link}
								</Link>
							</div>
						))}
					</div>
				))}
			</div>
			<div>
				<h3 className='mb-6 text-base font-semibold text-primaryBlack2 md:text-lg'>
					Join Our Newsletter
				</h3>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setSubscribed(true);
					}}
					className={`mb-10 p-2 flex-col items-center justify-center gap-4 rounded-lg border-[1px] bg-white ${
						subscribed ? 'hidden' : 'flex'
					}`}
				>
					<div className='flex w-full flex-col gap-2'>
						<input
							type='text'
							placeholder='Enter your Name'
							className='w-full rounded-lg bg-gray-100 px-5 py-3'
						/>
						<input
							type='email'
							placeholder='Your best email'
							className='w-full rounded-lg bg-gray-100 px-16 py-3'
						/>
					</div>

          <button type="submit" className="custom-btn gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            Subscribe Now!
          </button>
        </form>
        <h3
          className={`${
            subscribed ? "flex" : "hidden"
          } text-xs font-medium text-primaryBlack py-2 md:text-sm`}
        >
          {`Thank you for subscribing! We'll get back to you.`}
        </h3>
      </div>
    </div>
  );
};

export default FooterLink;
