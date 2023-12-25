"use client";
import Image from "next/image";
import { useState } from "react";

const AboutHero = () => {
  return (
    <>
      <section className="pt-35 xl:pb-25 xl:pt-46 overflow-hidden pb-20 md:pt-40">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="xl:gap-32.5 flex lg:items-center lg:gap-8">
            <div className=" md:w-1/2">
              <h2 className="w-[444px] font-['Poppins'] text-[50px] font-bold leading-[60px] text-[#1f284f]">
                About Us
              </h2>
              <p className="w-[444px] font-['Poppins'] text-[20px] font-medium leading-[32px] text-[#1f284f]">
                Who are we? MailBlink is a team of talented individuals working
                together to make software people love.
              </p>
              <p className="w-[444px] font-['Poppins'] text-[20px] leading-[32px] text-[#575757]">
                We develop multi-award winning enterprise-class software that
                helps IT teams audit IT environments.
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <div className="flex w-[173px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#0070f0e5] bg-[#0070f0e5] px-[24px] py-[12px]">
                    <button className="whitespace-nowrap font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff]">
                      Contact Us
                    </button>
                  </div>
                  <div className="flex w-[173px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#0070f0e5] bg-[#0070f0e5] px-[24px] py-[12px]">
                    <button className="wtext-[16px] whitespace-nowrap font-['Poppins'] font-bold leading-[24px] text-[#fff]">
                      Book a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:block">
              <div className="2xl:-mr-7.5 relative">
                <div className="  w-full">
                  <Image
                    className="absolute w-full object-cover"
                    src="/images/about/about-hero.png"
                    alt="Hero"
                    width="443"
                    height="480"
                  />
                  <div className=" top-30 relative left-10 z-[-20] h-[480px] w-[443px] rounded-b rounded-t-[16px] bg-[#afd1f866] opacity-[.98]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
