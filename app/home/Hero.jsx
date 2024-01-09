import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-width md:px-12 mx-auto mb-24 md:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16">
        <div className="px-8 pb-6 lg:pb-48 relative">
          <div className="pt-4 md:pt-12">
            <p className="text-primaryBlack2 text-4xl md:text-5xl font-semibold font-Roboto leading-tight text-center md:text-left">
              Email and SMS <span className="text-forestGreen">Marketing </span>
              Made Easy.
            </p>
            <div className="my-6 md:my-12 lg:my-8">
              <p className="text-[#565656] text-sm md:text-lg text-center md:text-left">
                MailBlink is an email and sms marketing for everything you need
                to create a campaign. Hundreds of independent developers sell
                their products here so that you could create your own unique
                project.
              </p>
              <ul className="my-10 md:my-6">
                <li className="flex items-center text-sm md:text-base">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656]">
                    Get Overview at a glance
                  </span>
                </li>
                <li className="flex items-center text-sm md:text-base my-2">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656]">
                    Deposit funds easily, security
                  </span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656]">Get Live Support</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-8 md:mt-4 pb-10">
              <input
                type="email"
                placeholder="Enter email"
                className="px-3 md:px-5 py-2 focus:border-0 outline-none shadow-xl w-full md:w-2/3 cursor-pointer hover:border hover:border-navyBlue hover:rounded-md"
              />
              <button className="custom-btn">Let’s Talk</button>
            </div>
          </div>
          <div className="">
            <Image
              src="/assets/images/Rectangle.svg"
              alt="left-half-circle"
              width="24"
              height="24"
              className="absolute -left-14 top-0"
            />
            <Image
              src="/assets/images/Rectangle (1).svg"
              alt="left-half-cirle 2"
              width="64"
              height="44"
              className="hidden lg:block absolute -left-16 bottom-0"
            />
            <Image
              src="/assets/images/Rectangle (2).svg"
              alt="left-half-cirle 2"
              width="20"
              height="20"
              className="absolute right-0 bottom-4 md:bottom-10"
            />
          </div>
        </div>
        <div className="px-8 md:pt-20">
          <Image
            src="/assets/images/pana.svg"
            alt="hero-dashboard-image"
            width="100"
            height="100"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
