import Form from "./Form";
import Image from "next/image";

const BookDemo = () => {
  return (
    <section>
      <div className="mt-[-200px] flex flex-col items-center justify-center bg-white px-7 md:flex-row md:gap-5 md:px-10 lg:gap-20 lg:px-24">
        <div className="top-20 mt-5 w-full text-center md:relative md:mt-0 md:w-[28.8rem] md:text-start">
          <h2 className="mb-3 text-[2rem] font-bold md:text-[2.1rem] text-navyBlue">
            Book Your 15 minute Call
          </h2>
          <p className="w-full text-lg text-Ash md:w-[80%] md:text-xl">
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT.
          </p>
        </div>
        <div className="relative top-[5rem] z-[1] w-full md:top-[10rem] md:w-[30.15rem]">
          <Form />
        </div>
      </div>
      <div className="relative flex h-[12rem] w-full items-center bg-[#032b25] md:h-[15rem]">
        <div className="relative -left-[7rem] h-[9.6rem] w-[9.6rem] rounded-full bg-[#074d40] opacity-70 md:h-[11.6rem] md:w-[11.6rem]"></div>
        {/* Replace <img> with <Image> */}
        <Image
          src="/assets/icons/dots.svg"
          alt=""
          width={144} // Specify the width of the image
          height={36} // Specify the height of the image
          className="absolute bottom-6 left-[45%]"
        />
      </div>
    </section>
  );
};

export default BookDemo;
