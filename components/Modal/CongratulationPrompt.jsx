"use client"

import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { HiCheck } from "react-icons/hi";
import { LiaTimesSolid } from "react-icons/lia";

const CongratulationPrompt = ({ message }) => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal() {
        setIsOpen(!isOpen)
      }

  return (
    <>
        {/* The button to open modal should be remove, it's just to display it in testing mode */}
         <button
          type="button"
          onClick={toggleModal}
          className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Open Modal
        </button>
        <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="relative z-50"
            onClose={toggleModal}
        >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

            <div className="fixed inset-0 z-70 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md">
                    <div className="bg-white h-80 flex flex-col items-center p-6 justify-center text-center relative">
                    <div className="m-5 bg-gray-300 hover:bg-gray-400 p-2 rounded-[50%] inline-block absolute top-0 right-0"  onClick={toggleModal}>
                            <LiaTimesSolid size={24} className="text-white" />
                        </div>
                        <div className="m-6 bg-[#3CBA79] p-4 rounded-[50%] inline-block">
                            <HiCheck size={50} className="text-white" />
                        </div>
                        <h3 className="text-[1.8rem] text-[#364a63] font-semibold">
                            Congratulations!
                        </h3>
                        <p className="text-sm text-primaryBlack2 p-1">{message}</p>
                    </div>
                </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    </>
  );
};

export default CongratulationPrompt;