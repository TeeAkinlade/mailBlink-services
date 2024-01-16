"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import SignBtn from "@/components/SignBtn";
import Navlink from "./Navlink";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  //detects if outside the navbar on mobile is clicked and closes the navbar
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className="max-width md:px-12 mx-auto">
      <div className="px-8 py-6">
        <div className="flex items-center justify-between py-8">
          <Link
            href="/"
            className="font-Roboto text-2xl font-bold text-[#17181A] md:text-4xl"
          >
            <Image
              src="/assets/images/Logo VendGenix.svg"
              ait="logo"
              width="150"
              height="150"
            />
          </Link>
          <button
            className="text-3xl 2lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RxHamburgerMenu />
          </button>
          <div className="hidden items-baseline space-x-6 2lg:flex  whitespace-nowrap">
            <Navlink />
            <SignBtn />
          </div>
        </div>
        {/* Mobile nav */}

        {/* Dark background */}
        <div
          className={`fixed w-full h-[3rem] top-0 left-0 z-10 bg-black transition-opacity duration-500 ${
            open
              ? "pointer-events-auto opacity-50"
              : "pointer-events-none opacity-0"
          }`}
        />

        {/* Mobile links */}
        <div
          className={`fixed bottom-0 flex flex-col justify-between ${
            open ? "right-0" : "-right-[100%]"
          }  top-0 z-50 w-2/3  bg-tertiary pt-20 pb-2 text-left opacity-100 transition-all duration-500 2lg:hidden`}
          ref={menuRef}
        >
          <button className="absolute right-5 top-5 duration-300">
            <LiaTimesSolid size={35} onClick={() => setOpen((prev) => !prev)} />
          </button>

          <Navlink />
          <div className="flex items-center px-5">
            <SignBtn />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
