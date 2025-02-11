import Image from "next/image";
import { GoVideo } from "react-icons/go";

export const FunnelHero = () => {
  return (
    <header className="md:bg-white-500 flex-center flex-col gap-10 bg-white text-center md:my-16 md:flex-row md:gap-20 md:px-16">
      <div className="mb-4 bg-white md:w-4/5 md:text-left">
        <h3 className="text-sm text-ui_secondary1 md:text-lg">
          Automate your business!
        </h3>
        <h1 className="mt-2 cursor-pointer text-4xl font-extrabold text-navyBlue md:mt-5 md:text-7xl">
          VendGenix
        </h1>
        <p className="mt-3 text-sm font-bold text-navyBlue md:mt-10 md:text-lg">
          Transform your digital marketing experience.
        </p>
        <p className="mt-3 text-sm md:mt-7 md:text-lg p-4 md:p-0">
          Stand out in the crowded digital space with our cutting-edge tools.
          Craft compelling content, engage with your audience, and build a brand
          that captivates. Our platform empowers you to create, schedule, and
          analyze your digital campaigns with ease.
        </p>
        <div className="mt-10 flex-center flex-wrap gap-5 md:flex-row md:justify-start">
          <button className="cursor-pointer rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            Get Started Now!
          </button>
          <button className="flex cursor-pointer flex-row rounded-full border border-navyBlue bg-navyBlue px-8 py-3 text-white transition duration-150 ease-in-out hover:border-navyBlue hover:bg-white hover:text-navyBlue">
            <GoVideo className="mr-2 h-5 w-5" /> Watch a demo
          </button>
        </div>
      </div>
      <div className="mb-4 flex w-full justify-center p-4 hover:drop-shadow-[0rem_0rem_0.75rem_rgb(85,232,198)] ease-in-out duration-700">
        <Image
          src="/assets/images/Creative.png"
          alt="heroimg"
          width={1000}
          height={500}
        />
      </div>
    </header>
  );
};
