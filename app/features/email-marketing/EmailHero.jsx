import Link from "next/link";
import Image from "next/image";
import { stats } from "@/constants";
import { GoVideo } from "react-icons/go";

export const EmailHero = () => {
  return (
    <section className="max-width md:px-12 mx-auto">
      <div className=" bg-white flex-between md:flex-row flex-col md:gap-20 md:h-[42rem] h-full px-8 pb-20 md:pt-10">
        <div className=" md:w-[50%] w-full relative z-[1] h-fit md:text-lg flex flex-col md:items-start items-center text-base text-ui_primary">
          <div className="relative md:-top-2 top-5 md:text-start text-center">
            <h1 className=" w-full font-bold lg:text-[3.1rem] md:text-[2.8rem] text-[34px] md:leading-[3.8rem] leading-[3rem]">
              Helping people communicate in simple ways
            </h1>
            <p className=" text-primaryBlack text-[14px] my-5 w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, perferendis! Laborum ullam,us, blanditiis provident
              corporis odit praesentium sunt iste?.
            </p>
            <div className="flex gap-4 md:gap-7 justify-start mt-5">
            <Link href="/campaigns">
              <button className="custom-btn">
                Get Started
              </button>
            </Link>
            <Link href="/campaigns">
              <button className="custom-btn flex ">
                <GoVideo size={18} className="relative top-[1px] mr-2"/>
                Watch a demo
              </button>
            </Link>
            </div>
          </div>
          <div className="relative md:top-10 md:w-[140%] md:block hidden">
            <img
              src="/assets/icons/hero_dots.svg"
              alt=""
              className=" absolute top-[3.5rem] -left-6 md:w-28"
            />
            <div className=" relative pl-10 py-5 pr-0 justify-between flex bg-white rounded-lg shadow-lg">
              {stats.map((stat) => (
                <div className="w-[25%] flex flex-col justify-center" key={stat.id}>
                  <span className=" font-semibold text-ui_secondary1 text-base block">
                    {stat.title}
                  </span>
                  <p className="text-sm mt-1 text-primaryBlack md:w-[80%] w-full">
                    {stat.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" md:w-[50%] w-full bg-[#EFF6FE] md:h-full h-[25rem] md:pr-[4rem] flex justify-end md:items-center items-end rounded-bl-[4rem] md:rounded-tr-[0] rounded-tr-[4rem] md:mt-0 mt-20">
          <div className="md:h-[65%] h-[80%] md:w-[70%] w-[80%]">
          <Image
          src="/assets/images/amico.svg"
          alt=""
          width={400}
          height={300}
          quality={100}
           className="h-full w-full object-cover rounded-md"/>
          </div>
        </div>
      </div>
    </section>
  );
};