"use client";

import { teamSocialIcons, teams } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const AboutTeam = () => {
  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <main className="md:mt-10 bg-blue-50 px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h1 className="text-center text-[38px] font-extrabold md:text-4xl pt-8 md:pt-0">
        Meet The Team Leaders
      </h1>
      <div className="flex flex-col items-center mb-16 md:mb-5 px-10 md:px-0 py-12">
        <div className="pb-20 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden px-5 py-5 text-center"
            >
              <div
                className="flex items-center justify-center relative overflow-hidden"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Image
                  alt="team profile picture"
                  width="250"
                  height="250"
                  src={item.image}
                />
                {/* mouse over effect */}
                <div
                  className="absolute -bottom-[7px] mt-4 flex-center flex-col text-center bg-[rgba(216,218,215,0.6)] w-[262px] h-[6.5rem] px-5 text-black rounded-b-full"
                  style={{
                    opacity: hoveredMember === index ? 1 : 0,
                    transition: "opacity 0.5s ease-in-out",
                  }}>
                  <div className="flex-center gap-2 mt-3">
                    {teamSocialIcons.map((icon) => (
                      <a href="#" key={icon.key}>
                        <div className=" rounded-full md:scale-95 scale-75 md:p-2 p-[5px] hover:cursor-pointer md:hover:scale-110 hover:scale-90 transition-all">
                          {icon.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <h2 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.name}
              </h2>
              <h2 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.title}
              </h2>
              <p className="text-sm md:text-base">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutTeam;
