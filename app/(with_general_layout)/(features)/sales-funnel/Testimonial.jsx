"use client";

import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

const Testimonial = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const testimonials = [
    {
      feedback:
        "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kits I have come across. It’s so flexible, well organised and easily editable.",
      image: "/assets/images/display_pic.jpeg",
      name: "Floyd Miles",
      position: "Co-Founder, BookMyShow",
    },
    {
      feedback:
        "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
      image: "/assets/images/display_pic.jpeg",
      name: "Floyd Miles",
      position: "Co-Founder, BookMyShow",
    },
    {
      feedback: "Landify saved our time in designing my company page.",
      image: "/assets/images/display_pic.jpeg",
      name: "Floyd Miles",
      position: "Co-Founder, BookMyShow",
    },
    {
      feedback:
        "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kits I have come across. It’s so flexible, well organised and easily editable.",
      image: "/assets/images/display_pic.jpeg",
      name: "Floyd Miles",
      position: "Co-Founder, BookMyShow",
    },
    {
      feedback:
        "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kits I have come across. It’s so flexible, well organised and easily editable.",
      image: "/assets/images/display_pic.jpeg",
      name: "Floyd Miles",
      position: "Co-Founder, BookMyShow",
    },
    // Add more testimonials as needed
  ];

  const testimonialsPerPage = 1; // Adjust the number of testimonials per page as needed
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderTestimonials = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;
    const currentTestimonials = testimonials.slice(startIndex, endIndex);

    return currentTestimonials.map((testimonial, index) => (
      <div
        key={index}
        className=" mb-5 md:w-[50rem] flex md:flex-nowrap flex-wrap items-center justify-center gap-10"
      >
        <TestimonialCard {...testimonial} className="md:w-[20rem]" />
        <div>
          <div className="md:w-[25.8rem] mb-5">
            <TestimonialCard
              feedback={
                "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it."
              }
              image={"/assets/images/display_pic.jpeg"}
              name={"Floyd Miles"}
              position={"Co-Founder, BookMyShow"}
            />
          </div>
          <div className="md:w-[22rem]">
            <TestimonialCard
              feedback={"Landify saved our time in designing my company page."}
              image={"/assets/images/display_pic.jpeg"}
              name={"Floyd Miles"}
              position={"Co-Founder, BookMyShow"}
            />
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className="md:h-[56rem] lg:p-10 md:p-5 p-10 bg-white flex flex-col justify-center">
      <div className=" md:ml-[10%] md:mb-0 mb-8">
        <Image
          src="/assets/icons/quote_mark.svg"
          alt="test image"
          width={100}
          height={100}
          className="md:w-[100px] w-[60px] "
        />
        <div className="md:-mt-14 md:ml-16 -mt-10 ml-12">
          <h2 className="text-ui_primary font-bold md:text-[2.5rem] text-[2rem]">
            Hear What <br /> Real Customers Are Saying
          </h2>
          <p className=" text-Ash md:text-lg">
            Find a strong reason to do <br />
            business with VendGenix.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-nowrap mt-5 flex-wrap items-center justify-center gap-10">
        <div className="cursor-pointer">{renderTestimonials()}</div>
      </div>
      {/* Pagination */}
      <div className="mt-16 gap-1 flex justify-center items-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`w-3 h-1 rounded-md cursor-pointer ${
              currentPage === index + 1 ? "bg-Ash" : "bg-[#00000033]"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
