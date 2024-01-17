"use client";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import Image from "next/image";
import { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  // const TEXTS = ["Made Easy.", "In a  Blink."];
  // const [index, setIndex] = useState(0);

  // // text transition
  // useEffect(() => {
  //   const intervalId = setInterval(
  //     () => setIndex((index) => index + 1),
  //     2000 // every 3 seconds
  //   );
  //   return () => clearTimeout(intervalId);
  // }, []);

  const [typeEffect] = useTypewriter({
    words: ["Generate Leads", "Grow your business", "Scale with Speed"],
    loop: {},
    typeSpeed: 75,
    deleteSpeed: 85,
  });

  return (
    <section className="max-width md:px-12 mx-auto mb-24 md:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-14">
        <div className="px-8 pb-6 lg:pb-48 relative">
          <div className="pt-4 md:pt-12">
            <p className="text-primaryBlack2 text-4xl md:text-5xl leading-tight font-semibold text-center md:text-left">
              One-Stop Platform To{" "}
              <span className="text-forestGreen mr-2 text-4xl md:text-5xl">
                {typeEffect}
              </span>
            </p>

            {/* <div>
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </div> */}
            <div className="my-6 md:my-12 lg:my-8">
              <p className="text-[#171414] text-sm md:text-lg text-center md:text-left">
                {`Experience the convenience of a single platform that integrates
                everything your business needs for online success. From email
                campaigns to content marketing SEO optimization and social media
                management, we've got you covered.`}
              </p>
              <ul className="my-10 md:my-6">
                <li className="flex items-center text-sm md:text-base">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#000]">
                    All-in-One Marketing Hub
                  </span>
                </li>
                <li className="flex items-center text-sm md:text-base my-2">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#000]">
                    User-Friendly Interface
                  </span>
                </li>
                <li className="flex items-center text-sm md:text-base">
                  <RiVerifiedBadgeFill className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#000000]">
                    Results That Matter
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-8 md:mt-4 pb-10">
              <input
                type="email"
                placeholder="Enter email"
                className="px-3 md:px-5 py-2 focus:border-0 outline-none shadow-md w-full md:w-2/3 cursor-pointer hover:border hover:border-navyBlue hover:rounded-md"
              />
              <button className="custom-btn whitespace-nowrap">
                {`Let’s Talk`}
              </button>
            </div>
          </div>
        </div>
        <div className="px-8 pt-10 md:py-20 lg:pt-20 lg:mb-0">
          <Image
            src="/assets/images/pana.svg"
            alt="hero-dashboard-image"
            width="100"
            height="100"
            className="w-full object-cover"
          />
        </div>
      </div>
      <div className="hidden lg:block absolute w-full h-full top-48 left-0">
        <Image
          src="/assets/images/Rectangle.svg"
          alt="left-half-circle"
          width="24"
          height="24"
        />
        <Image
          src="/assets/images/Rectangle (1).svg"
          alt="left-half-cirle 2"
          width="64"
          height="44"
          className="relative top-[26rem]"
        />
        <Image
          src="/assets/images/Rectangle (2).svg"
          alt="left-half-cirle 2"
          width="20"
          height="20"
          className="relative left-1/2 top-96"
        />
      </div>
    </section>
  );
};

export default Hero;
