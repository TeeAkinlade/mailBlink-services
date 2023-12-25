"use client";

import React, { useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { NavListData } from "@/constants";

const NavlinkList = () => {
  // const [selectedItem, setSelectedItem] = useState(null);
  // const [icon, setIcon] = useState(null);
  // const [visible, setVisible] = useState(false);
  // const closeMenu = useRef();

  //function to set the id of drowdown menu modal base on the id clicked or hover on
  // const toggle = (id) => {
  //   setSelectedItem(id);
  //   setIcon(id);
  //   setsublinks(id);
  // };

  // //show the dropdown menu modal
  // const show = () => {
  //   setVisible((prev) => !prev);
  // };

  // //Close menu by clicking outside
  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!closeMenu.current.contains(event.target)) {
  //       setVisible(false);
  //     }
  //   };
  //   document.body.addEventListener("mousedown", handler);

  //   return () => {
  //     document.body.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <main
      className="flex flex-col md:flex-row item-start md:items-center"
      ref={closeMenu}
    >
      {NavListData.map((link) => (
        <div key={link.id} onClick={() => toggle(link.id)}>
          <div className="px-3 md:flex text-center md:cursor-pointer group">
            <h1
              onClick={show}
              onMouseOver={() => {
                toggle(link.id);
                show();
              }}
              className={`${
                selectedItem === link.id
                  ? "text-lightBlue"
                  : "text-primaryBlack2"
              } ${
                visible ? "text-lightBlue" : "text-primaryBlack2"
              } px-3 py-5 md:py-2 flex justify-between items-center font-semibold text-sm md:pr-0 pr-5 group cursor-pointer hover:bg-gray-200 rounded`}
            >
              {link.name}
              <span>
                <FaAngleDown
                  className={`${
                    icon === link.id
                      ? "rotate-180 text-lightBlue"
                      : "text-primaryBlack2 rotate-180"
                  } ${
                    visible ? "text-lightBlue" : "text-primaryBlack2 rotate-0"
                  } duration-300 mx-1`}
                />
              </span>
            </h1>
          </div>
        </div>
      ))}
    </main>
  );
};

export default NavlinkList;
