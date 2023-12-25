"use client";

import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";

const Navlink = () => {
  return (
    <nav className="flex flex-col md:flex-row item-start md:items-center pt-6 pb-8">
      <ul className="hidden h-full gap-6 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-[#17181A] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold mr-5"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navlink;
