"use client";

import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { testimonials } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <section className="max-width padding-y mt-20 flex h-fit flex-col justify-center bg-white sm:mt-16 md:h-[50rem] md:px-12">
      <div className="px-8">
        <div className="flex-center mb-8 flex-col md:mb-0 md:block lg:ml-[10%]">
          <Image
            src="/assets/icons/quote_mark.svg"
            alt="image"
            width={100}
            height={100}
            className="-ml-[15.5rem] w-[60px] md:-ml-0 md:w-[100px]"
          />
          <div className="-mt-10 md:ml-8 lg:-mt-14 lg:ml-16">
            <h2 className="text-[34px] font-bold text-navyBlue md:text-[2.1rem] lg:text-[2.5rem]">
              Real Stories from <br /> Real Customers
            </h2>
            <p className="padding-y text-center text-Ash md:text-start md:text-lg">
              Get inspired by these stories.
            </p>
          </div>
        </div>
        <Swiper
          slidespreview={"1"}
          centeredSlides={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-full flex-wrap items-center justify-center gap-8 pb-20 md:flex-nowrap">
                <div className="md:w-[22rem]">
                  <TestimonialCard
                    feedback={testimonial.variations[0].feedback}
                    image={testimonial.variations[0].image}
                    name={testimonial.variations[0].name}
                    position={testimonial.variations[0].position}
                  />
                </div>
                <div>
                  <div className="mb-7 mt-2 md:w-[25.8rem]">
                    <TestimonialCard
                      feedback={testimonial.variations[1].feedback}
                      image={testimonial.variations[1].image}
                      name={testimonial.variations[1].name}
                      position={testimonial.variations[1].position}
                    />
                  </div>
                  <div className="md:w-[22rem]">
                    <TestimonialCard
                      feedback={testimonial.variations[2].feedback}
                      image={testimonial.variations[2].image}
                      name={testimonial.variations[2].name}
                      position={testimonial.variations[2].position}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
