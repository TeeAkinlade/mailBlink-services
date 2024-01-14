"use client";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="md:bg-white-500 flex flex-col items-center justify-center gap-5 bg-white px-4 text-center font-poppins md:my-20 md:flex-row md:gap-10 md:px-24">
      <div className="mb-4 bg-white md:w-4/5 md:text-left">
        <h1 className="mt-2 cursor-pointer text-4xl font-extrabold text-ui_primary md:mt-2 md:text-7xl">
          About Us
        </h1>
        <p className="mt-3 text-sm font-bold text-ui_primary md:mt-10 md:text-lg">
          Who are we? MailBlink is a team of talented individuals working
            together to make software people love.
        </p>
        <p className="mt-3 text-sm md:mt-7 md:text-lg">
          We develop multi-award winning enterprise-class software that helps IT teams audit IT environments.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 md:flex-row md:justify-start">
          <button className="cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            Contact Us
          </button>
          <button className="flex cursor-pointer flex-row rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
             Book a demo
          </button>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-center">
        <Image
          src="/assets/images/about-hero.png"
          alt="heroimg"
          width={1000}
          height={500}
        />
      </div>
    </section>
  );
};

export default AboutHero;
