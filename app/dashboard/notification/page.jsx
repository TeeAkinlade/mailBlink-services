"use client";

import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { webNotifications, mailNotifications } from "@/constants";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = (id) => {
    setIsChecked((prev) => ({
      ...prev,
      [id]: !prev[id] || false,
    }));
  };

  return (
    <main>
      <div className="md:p-20 px-12 py-20 md:w-[65%] w-[100%] m-auto">
        <h1 className="font-bold text-3xl">Notification</h1>

        {/* emailnotifications */}
        <div className="mt-10 ">
        <h2 className="font-bold text-xl">Email notification</h2>
        {mailNotifications.map((item) => (
            <div key={item.title} className="flex items-center justify-between mt-6">
            <div className="w-[80%]">
               <h3 className="font-bold text-base mb-3">{item.title}</h3>
               <p>{item.label}</p>
             </div>
             <ToggleButton/>
           </div>
        ))}
        </div>

        {/* Website notification */}
        <div className="mt-16">
        <h2 className="font-bold text-xl">Website notification</h2>
        {webNotifications.map((item) => (
          <div
            key={item.id}
            className="flex cursor-pointer items-center gap-2 mt-4"
            onClick={() => toggleCheckbox(item.id)}>
            {isChecked[item.id] ? (
              <IoCheckbox size={20} className=" text-ui_primary" />
            ) : (
              <MdOutlineCheckBoxOutlineBlank size={20} className=" text-Ash" />
            )}
            <span className="">{item.label}</span>
          </div>
        ))}
        </div>
        <div className="flex-start gap-7 mt-16">
          <button className="custom-btn">Save Changes</button>
          <button className="custom-btn">cancel</button>
        </div>
      </div>
    </main>
  );
};

export default page;
