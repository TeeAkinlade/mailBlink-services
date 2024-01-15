"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { GiCheckMark } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/pagination";
import { resourceHeroData } from "@/constants";
import "swiper/css/bundle";
import Blog from "./Blog";

const Resouces = () => {
  return (
    <div className="max-width mx-auto py-8 md:pt-12">
      <div className="px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-20 lg:gap-40">
          <div className="md:pl-20">
            <h2 className="text-center md:text-start font-bold text-[42px] md:text-5xl text-navyBlue">
              Resource Hub
            </h2>
            <Swiper
              pagination={{
                type: "fraction",
                clickable: true,
                el: ".swiper-pagination2",
              }}
              slidespreview={"1"}
              centeredSlides={true}
              modules={[Pagination, Navigation]}
              className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] px-8 md:px-0"
            >
              {resourceHeroData.map((heroData, index) => (
                <SwiperSlide key={index}>
                  <div className="flex-col flex-center pt-6">
                    {heroData.variations.map(
                      ({ id, content1, content2, content3 }) => (
                        <div
                          className="w-[300px] md:w-[22rem] lg:w-[400px] flex"
                          key={id}
                        >
                          <GiCheckMark size={20} className="mt-2 mr-3" />
                          <>
                            <p className="text-sm md:text-base pb-2 leading-6">
                              {content1}
                            </p>
                            <p className="text-sm md:text-base pb-2 leading-6">
                              {content2}
                            </p>
                            <p className="text-sm md:text-base leading-6">
                              {content3}
                            </p>
                          </>
                        </div>
                      )
                    )}
                  </div>
                </SwiperSlide>
              ))}
              <div className="flex items-center gap-20 md:gap-40 mt-10">
                <div className="swiper-pagination2 max-w-[100px]"></div>
                <SwiperButton />
              </div>
            </Swiper>
          </div>
          <div className="relative flex-center flex-col group">
            <div className="w-3/4 rotate-3 group-hover:rotate-12 group-hover:translate-y-4  ease-in-out duration-500">
              <Image
                src="/assets/images/unsplash_8hgmG03spF4.svg"
                width="100"
                height="100"
                alt="resources image"
                className="w-full ml-3"
              />
              <div className="shadow-md py-10 px-6 rounded-b-2xl -mt-4 rotate-2 bg-white">
                <h3 className="text-[24px] font-semibold">
                  Personality Assessment
                </h3>
                <p className="text-sm py-5">
                  Understand yourself well with specific insights into your
                  personality and character.
                </p>
                <Link
                  href="#"
                  className="text-xs text-ui_secondary1 font-semibold flex items-center"
                >
                  <span>View More</span>{" "}
                  <MdKeyboardArrowRight className="font-semibold ml-1" />
                </Link>
              </div>
            </div>
            <div className="w-3/4 absolute top-5 md:top-10 -left-15 md:left-10 lg:left-10 z-20 group-hover:-rotate-2 ease-in-out duration-500">
              <Image
                src="/assets/images/eksport.svg"
                width="100"
                height="100"
                alt="resources image"
                className="w-full"
              />
              <div className="shadow-md py-10 px-6 rounded-b-2xl -mt-4 bg-white">
                <h3 className="text-[24px] font-semibold">
                  Personality Assessment
                </h3>
                <p className="text-sm py-5">
                  Understand yourself well with specific insights into your
                  personality and character.
                </p>
                <Link
                  href="#"
                  className="text-xs text-navyBlue font-semibold flex items-center"
                >
                  <span>View More</span>{" "}
                  <MdKeyboardArrowRight className="font-semibold ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default Resouces;
