"use client";


import Link from "next/link";
import Image from "next/image";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';

const feedback = [
  { question: "What does NMIS stand for?", id: 1, answer:"lorem ipsum fah deh rum sed -1" },
  { question: "What does NMIS stand for?", id: 2, answer:"lorem ipsum fah deh rum sed -2" },
  { question: "What is a network management system?", id: 3, answer:"lorem ipsum fah deh rum sed -3" },
  { question: "What is a network management software?", id: 4, answer:"lorem ipsum fah deh rum sed -4" },
  { question: "What is wireless network management software?", id: 5, answer:"lorem ipsum fah deh rum sed -5" },
  { question: "What are the advantages of using network?", id: 6 , answer:"lorem ipsum fah deh rum sed -6"},
]


export default function NMIS() {

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === id ? null : id
    );
  };


  return (

    <section className="bg-blue-50  items-center mt-10 md:pt-[8rem] ">
    <div className="flex flex-col gap-10 items-center  mx-4 md:flex-row md:justify-center md:items-start ">
      <main className="font-poppins px-4 md:px-10 py-10 shadow-lg max-w-xl md:py-[5rem] rounded-3xl mt-10 md:mt-0 bg-white relative z-10">
        <h2 className="text-ui_primary text-2xl md:text-4xl font-semibold font-poppins ">
          Download NMIS
        </h2>
        <p className="mt-4 md:mt-7 text-sm md:text-lg font-md">
          NMIS (Network Management Information System) 
          is <br /> an open-source network management system
          <br /> that was first released in 1998.
          <br />
          <Link href="" className="text-ui_button underline mt-2">
            Download dataSheet
          </Link>
        </p>
        <button className=" mt-10 bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">
          Download
        </button>
      </main>
  
      {/* FAQ */}
      <main className="font-poppins mt-6  md:pt-[5rem]  md:items-end cursor-pointer">
      <section className=" md:mt-[-130px] b-5">
        <h2 className="text-ui_primary text-2xl md:text-4xl font-semibold font-poppins">
          FAQ
        </h2>
        <div className="mt-4 md:mt-5 text-md md:text-md font-semibold">
          {feedback.map((feedbackItem) => (
            <div
              className="grid grid-cols-[auto,1fr] gap-10 text-sm md:text-lg items-center mt-4 md:mt-5"
              key={feedbackItem.id}
            >
              <p onClick={() => toggleQuestion(feedbackItem.id)} className="cursor-pointer col-span-1 flex ">
                {feedbackItem.question}
                {openQuestion === feedbackItem.id ? (
                  <FaAngleUp className="ml-4 h-5" />
                ) : (
                  <FaAngleDown className="ml-4 h-5 " />
                )}
              </p>
              {openQuestion === feedbackItem.id && (
               <div className="bg-white px-2 py-2 rounded-md"> <p className=" text-gray-500 text-sm bg-white-500">{feedbackItem.answer}</p></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
    </div>
    <div className="mt-[-92px] w-full hidden md:flex">
      <Image src="/assets/images/Group 1000000869.png" width={1500} height={30} alt="imx" className="w-full" />
    </div>
  </section>
  );
}
