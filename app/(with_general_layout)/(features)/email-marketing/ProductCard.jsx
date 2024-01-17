"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const ProductCard = (props) => {
  // ------------------ THIS IS ENTIRELY FOR STYLING---------------------------- //
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(1000);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    if (typeof window !== "undefined") {
      // Attach the event listener
      window.addEventListener("resize", handleResize);

      // Detach the event listener when the component is unmounted
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // Empty dependency array means this effect runs once after the initial render

  const top = {
    top: windowWidth > 768 ? props.top : 0,
  };

  return (
    <div
      className={`relative flex flex-col gap-4 p-6 bg-white rounded-lg lg:w-[25%] md:[40%] w-full box-shadow hover:scale-105 transition-all ease-in-out duration-500`}
      style={top}
    >
      <div
        className={`rounded-full w-12 h-12 flex-center md:p-3 p-2`}
        style={{ backgroundColor: `${props.bg}` }}
      >
        <Image
          src={props.src}
          alt=""
          width={24} // Set the width as per your design
          height={24} // Set the height as per your design
        />
      </div>
      <h3 className="text-lg font-bold text-navyBlue md:h-[2.8rem]">
        {props.title}
      </h3>
      <p className="text-base text-primaryBlack md:h-[8rem] ">
        {props.details}
      </p>
    </div>
  );
};
