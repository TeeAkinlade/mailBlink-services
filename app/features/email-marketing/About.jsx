import Image from "next/image";
import Link from "next/link"

export const EmailAbout = () => {
  return (
    <section className="max-width">
      <div className=" md:mt-28 padding-x padding-y relative bg-white flex-between md:flex-row flex-col-reverse h-fit">
        <div className=" absolute md:top-[20rem] top-16 left-0 w-[50%] md:h-[55rem] h-[140rem] bg-[#EFF6FE] rounded-tr-[4rem]"></div>
        <div className=" md:w-[35%] border w-full z-[1] md:h-[25rem] sm:h-[25rem] h-[20rem] md:mt-0 mt-16">
          <Image
            src="/assets/images/pexels-canva-studio-3194524.jpg"
            alt=""
            width={500}
            height={350}
            quality={100}
            className="w-full h-full object-cover rounded-md"
          />
          <div className="z-[2] bottom-[2rem] md:left-[10rem] md:float-left float-right left-8 relative  w-fit">
          <img
            src="/assets/icons/hero_dots.svg"
            alt=""
            className=" sm:w-32 w-20"
          />
        </div>
        </div>

        <div className="md:items-start items-center flex flex-col relative md:w-[60%] w-full md:text-lg text-base text-ui_primary ">
          <h2 className=" md:text-start text-center font-bold lg:text-[2.5rem] md:text-[2.1rem] text-[1.8rem] md:leading-[3rem] leading-[2.5rem]">
            Helping people communicate in simple ways
          </h2>
          <p className="text-justify text-primaryBlack font-normal md:text-[16px] text-[14px] mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            cupiditate delectus est distinctio veritatis. Hic dolorem ipsa
            expedita odit, rerum asperiores harum ratione voluptatum laborum
            ullam excepturi consectetur deserunt est. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Optio placeat ducimus nostrum est nisi
            excepturi, asperiores architecto dolorem dolor laborum perspiciatis,
            rem quo harum omnis ut beatae delectus porro quisquam? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quia nemo voluptatibus
            eius odio voluptates ab aperiam laudantium architecto, sapiente
            harum, incidunt nobis quo nostrum, repellat velit officia temporibus
            similique fugit.
          </p>
          <Link href="/campaigns">
              <button className="custom-btn mt-5">
                Learn more
              </button>
            </Link>
        </div>
      </div>
    </section>
  );
};
