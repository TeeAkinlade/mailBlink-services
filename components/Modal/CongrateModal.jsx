"use client"

import { useState } from "react"
import { LiaTimesSolid } from "react-icons/lia";
import { IoMdCheckmarkCircle } from "react-icons/io";

 const CongrateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    // The button and the conditional statement would be remove. it is just to display it in testing mode
    <div className="">
      <button className="p-3 rounded-sm" onClick={handleClick}>Open Modal</button>
      { isOpen &&
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' onClick={handleClick}>
          <div className="w-[300px] md:w-[600px]">
            <div className="bg-white p-2 rounded-sm">
              <div className="grid justify-end px-5 cursor-pointer" onClick={handleClick}>
                <LiaTimesSolid size={25} className="hover:text-red-500" />
              </div>
              <div className="flex flex-col justify-center items-center h-[200px] md:h-[250px] p-5">
                <p className="text-center md:text-lg flex items-center mb-2">
                <IoMdCheckmarkCircle size={25} className='text-forestGreen mr-5' />
                  <span>Congratulations</span>
                </p>
                <p className="text-center">You have successfully craeted an account with MailBlink</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default CongrateModal