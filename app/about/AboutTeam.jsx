import {teams } from "@/constants";
import Image from "next/image";
import React from "react";

const AboutTeam = () => {
 return (
  <main className="mt-10 bg-blue-50 px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h1 className="text-center text-2xl font-extrabold md:text-4xl">
     Meet Our Team Leaders     
       </h1>
      <div className="flex flex-col items-center md:mb-5 px-10 md:px-0">
        <div className="py-40 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden  px-5 py-5 text-center"
            >
              <div className="flex items-center justify-center ">
               <Image
              alt=""
              width="200"
              height="200"
              src={item.image}
               />     
                
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
