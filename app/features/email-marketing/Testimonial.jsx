"use client";

import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { testimonials } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import { Pagination } from "swiper/modules"

const Testimonial = () => {

  return (
    <section className="mt-20 sm:mt-16 max-width padding-y md:px-12 md:h-[50rem] h-fit bg-white flex flex-col justify-center">
      <div className="px-8">
        <div className="lg:ml-[10%] md:mb-0 mb-8 md:block flex-center flex-col">
          <Image
            src="/assets/icons/quote_mark.svg"
            alt="image"
            width={100}
            height={100}
            className="md:w-[100px] w-[60px] md:-ml-0 -ml-[15.5rem]"
          />
          <div className="lg:-mt-14 lg:ml-16 -mt-10 md:ml-8">
            <h2 className="text-ui_primary font-bold lg:text-[2.5rem] md:text-[2.1rem] text-[34px]">
              Real Stories from <br /> Real Customers
            </h2>
            <p className="text-Ash md:text-lg padding-y text-center md:text-start">Get inspired by these stories.</p>
          </div>
        </div>
        <Swiper
        slidespreview={'1'}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        modules={[ Pagination]}
        className=" w-full "
      >
          {testimonials.map((testimonial, index) => (
          <SwiperSlide  key={index}>
            <div className='flex md:flex-nowrap flex-wrap items-center justify-center gap-8 pb-20 w-full'>
            <div className="md:w-[22rem]">
              <TestimonialCard
                feedback={testimonial.variations[0].feedback}
                image={testimonial.variations[0].image}
                name={testimonial.variations[0].name}
                position={testimonial.variations[0].position}
              />
            </div>
            <div>
              <div className="md:w-[25.8rem]  mt-2 mb-7">
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
