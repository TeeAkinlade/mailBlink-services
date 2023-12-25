import Image from "next/image";
import { GoVideo } from "react-icons/go";

export const SmsHero = ()=>{
    return(
        <header className="flex flex-col justify-center items-center text-center bg-white font-poppins mt-10 px-4 md:flex-row md:bg-white-500 md:my-20">
        <div className="mb-4 md:text-left bg-white ">
          <h3 className="text-ui_secondary1 text-sm md:text-lg">
            WELCOME TO SMS MARKETING
          </h3>
          <h1 className=" cursor-pointer text-ui_primary text-4xl md:text-7xl font-extrabold mt-2 md:mt-5">
            MailBlink
          </h1>
          <p className="font-bold text-ui_primary mt-3 md:mt-10 text-sm md:text-lg">
            The backbone of your network <br />
            management system
          </p>
          <p className="mt-3 md:mt-7 text-sm md:text-lg">
            Network Management Information System
          
            (NMIS) is the  <br /> robust software platform
            underpinning Opmantek Performance and <br />
            Management solutions.
          </p>
          <div className="flex flex-col items-center md:flex-row mt-10 gap-5">
          <button className=" bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">
          Get Started Now!
          </button>
          <button className=" flex flex-row bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">
          <GoVideo className="mr-2 w-5 h-5" /> Watch a demo
          </button>
        </div>
        </div> 
        <div className="mb-4">
          <Image src="/assets/images/Creative.png" alt="heroimg" width={1000} height={500} className="w-[full] max-w-md mx-auto md:max-w-2xl "/>
        </div>
      </header>
    )
} 