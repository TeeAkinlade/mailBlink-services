"use client"

import Link from "next/link";
import { servicesData } from "@/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Services = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow to="next" />,
    // prevArrow: <SamplePrevArrow to="prev" />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };


  return (
    <section className="bg-linear">
      <div className="max-width md:px-12 mx-auto">
        <div className="py-32 px-8">
          <p className="text-4xl md:text-5xl font-semibold text-navyBlue font-Roboto text-center">
            Our Services
          </p>
          <p className="text-center text-sm md:text-base padding-y text-primaryBlack">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. The text
            will be populated with the right information later on. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. The text will be
            populated with the right information later on.
          </p>
            <div className="my-12">
                <Slider {...settings} className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-3'>
                  {servicesData.map(
                  ({ id, icon, title, contents, href, linkText }) => (
                      <div
                        className="py-16 bg-backGround shadow-xl p-8 rounded-lg transform transition-transform hover:scale-105 duration-200 border-b-4 border-transparent hover:border-navyBlue w-[330px]" key={id}
                      >
                        <div className="bg-navyBlue p-3 rounded-[50%] inline-block">
                          <span className="text-white">{icon}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">
                          {title}
                        </h3>
                        <p className="text-primaryBlaxck mb-8 text-sm md:text-[15px]">
                          {contents}
                        </p>
                        <Link
                          href={href}
                          className="py-2.5 px-4 rounded-full hover:bg-white hover:text-navyBlue hover:font-semibold transition duration-300 text-sm md:text-base bg-navyBlue text-white"
                        >
                          {linkText}
                        </Link>
                      </div>
                      )
                    )}
                  </Slider>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
