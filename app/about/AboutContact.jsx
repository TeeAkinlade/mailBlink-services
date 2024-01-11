import AboutForm from "./AboutForm";
import Image from "/Image";
const AboutContact = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col items-center justify-center lg:gap-20 md:gap-5 bg-white lg:px-24 md:px-10 px-7 mt-[-200px]">
        <div className="md:w-[28.8rem]  md:text-start text-center w-full md:relative top-20 md:mt-0 mt-5">
          <h2 className=" md:text-[2.1rem] text-[2rem] font-bold  mb-3">
           Become a Partner
          </h2>
          <p className=" text-Ash md:text-xl text-lg md:w-[80%] w-full">
            Used and supported in over 178 countries around the globe.<br/>We’ll work with you to open more doors and close more sales across all verticals.
          </p>
        </div>
        <div className="md:w-[30.15rem]  w-full z-[1] relative md:top-[10rem] top-[5rem]">
          <AboutForm/>
        </div>
        <div class="w-[186px] h-[186px] opacity-30 bg-blue-600 bg-opacity-90 rounded-[100px]"></div>
      </div>
      <div className="flex relative items-center bg-[#030303] w-full md:h-[15rem] h-[12rem]">
        <div className=" rounded-full bg-[#0070F0E5] opacity-70 md:w-[11.6rem] md:h-[11.6rem] w-[9.6rem] h-[9.6rem] relative -left-[7rem]"></div>
        <Image
          src="/assets/icons/dots.svg"
          alt=""
          className="absolute bottom-6 right-[45%] w-46"
        />
        <div className=" rounded-full bg-blue-950 opacity-70 md:w-[11.6rem] md:h-[11.6rem] w-[9.6rem] h-[9.6rem] relative -left-[17rem] "></div>
        <div class="w-[186px] relative h-[186px] opacity-30 bg-blue-600 bg-opacity-90 rounded-[100px] left-20"></div>
      </div>
    </section>
  );
};

export default AboutContact;
