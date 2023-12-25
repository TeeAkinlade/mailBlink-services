import { FaBalanceScale } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
    return (

      <main className="font-poppins mt-10  bg-blue-50 text-ui_primary  py-10 px-4 md:px-20 md:py-[100px] lg:px-40">
  <h2 className="text-center text-2xl md:text-4xl font-extrabold ">
    Why Top Companies use MailBlink
  </h2>
  <div className="flex flex-col items-center md:mt-10">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
      <div className="text-center hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8 " />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">
          Sophisticated Business Rules
        </h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
      <div className="text-center  hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8 " />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">
          Pre-Configured Out-of-the-
        </h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
      <div className="text-center  hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8 " />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">Massively Scalable</h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
      <div className="text-center mt-5 md:mt-10  hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8" />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">
          Visible Operational Impact
        </h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
      <div className="text-center mt-5 md:mt-10  hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8 " />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">Automated Health Life</h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
      <div className="text-center mt-5 md:mt-10  hover:bg-white hover:shadow-lg rounded-xl hover:py-5 px-5">
        <div className="flex items-center justify-center">
        <FaBalanceScale className="md:w-[50%] h-8 " />
        </div>
        <h3 className="text-md md:text-lg font-bold mt-3 md:mt-5">
          Customizable Alert Escalation
        </h3>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.
        </p>
      </div>
    </div>
  </div>
</main>
    )}