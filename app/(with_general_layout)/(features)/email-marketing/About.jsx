import Image from "next/image";
import Link from "next/link";

export const EmailAbout = () => {
  return (
    <section className="max-width mx-auto md:px-12">
      <div className="padding-y flex-between relative h-fit flex-col-reverse bg-white px-8 md:mt-28 md:flex-row md:gap-24 lg:gap-40">
        {/* <div className="absolute left-0 top-16 h-[140rem] w-[50%] rounded-tr-[4rem] bg-[#EFF6FE] md:top-[20rem] md:h-[55rem]"></div> */}
        <div className="z-[1] mt-16 h-[20rem] w-full border sm:h-[25rem] md:mt-0 md:h-[30rem] md:w-[45%]">
          <Image
            src="/assets/images/bro.svg"
            alt=""
            width={500}
            height={350}
            quality={100}
            className="h-full w-full rounded-md object-cover"
          />
          <div className="relative bottom-[2rem] left-8 z-[2] float-right w-fit md:left-[10rem] md:float-left">
            <img
              src="/assets/icons/hero_dots.svg"
              alt=""
              className="w-20 sm:w-32"
            />
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center text-base text-navyBlue md:w-[55%] md:items-start md:text-lg">
          <h2 className="text-center text-[34px] font-bold leading-[2.5rem] md:text-start md:text-[2.1rem] md:leading-[3rem] lg:text-[2.5rem]">
            Helping people communicate in simple ways
          </h2>
          <p className="mt-5 text-justify text-[14px] font-normal text-primaryBlack md:text-[15px] lg:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            cupiditate delectus est distinctio veritatis. Hic dolorem ipsa
            expedita odit, rerum asperiores harum ratione voluptatum laborum
            ullam excepturi consectetur deserunt est. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio placeat ducimus nostrum est nisi
            temporibus similique fugit.
          </p>
          <Link href="/campaigns">
            <button className="custom-btn mt-5">Learn more</button>
          </Link>
        </div>
      </div>
    </section>
  );
};
