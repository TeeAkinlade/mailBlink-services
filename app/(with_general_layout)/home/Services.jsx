"use client";

import Link from "next/link";
import { servicesData } from "@/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 976,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="bg-linear">
      <div className="max-width mx-auto md:px-12">
        <div className="px-8 py-32">
          <p className="font-Roboto text-center text-4xl font-semibold text-navyBlue md:text-5xl">
            Our Services
          </p>
          <p className="padding-y text-center text-sm text-primaryBlack md:text-base">
            Take your business online presence to the next level with our
            comprehensive suite of quality and affordable services.
          </p>
          <div className="py-12">
            <Slider
              {...settings}
              className="lg:grid-col-3 md:grid-cols-2x grid h-full grid-cols-1"
            >
              {servicesData.map(
                ({ id, icon, title, contents, href, linkText }) => (
                  <div
                    className="w-[250px] transform rounded-lg border-b-4 border-transparent bg-backGround p-8 py-16 shadow-xl transition-transform duration-200 hover:scale-105 hover:border-navyBlue md:w-[330px]"
                    key={id}
                  >
                    <div className="inline-block rounded-[50%] bg-navyBlue p-3">
                      <span className="text-white">{icon}</span>
                    </div>
                    <h3 className="font-Roboto py-4 text-xl font-semibold text-primaryBlack2 md:text-2xl">
                      {title}
                    </h3>
                    <p className="text-primaryBlaxck mb-8 text-sm md:text-[15px]">
                      {contents}
                    </p>
                    <Link
                      href={href}
                      className="rounded-full bg-navyBlue px-4 py-2.5 text-sm text-white transition duration-300 hover:bg-white hover:font-semibold hover:text-navyBlue md:text-base"
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
