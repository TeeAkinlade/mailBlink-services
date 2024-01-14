"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image'
import Link from 'next/link'

import { blogTitles, blogs, caseStudies, enterprise, podcast, webinars, whitepaper } from "@/constants";
import { SampleNextArrow, SamplePrevArrow } from "./SwiperButton";
import { useState } from "react";


const Blog = () => {
    const [toggle, setToggle] = useState(1);
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3.5,
              slidesToScroll: 3.5,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          }
        ]
      };


    const toggleTab = (index) =>{
        setToggle(index)
        console.log(index)
    }

    return (
        <main className="bg-[#ECFDF6]">
            <div className="mt-16 px-8 md:px-28 py-20">
                <div className=''>
                    <div className="flex flex-col md:flex-row items-center gap-10 mb-20">
                        <p className="font-bold text-3xl">Blogs</p>
                        <div className="flex items-center flex-wrap lg:flex-nowrap gap-y-4 gap-x-3 lg:gap-y-0">
                            {blogTitles.map(({title, id}) => (
                                <div key={id}>        
                                    <button className={toggle === id ? 'bg-navyBlue text-white rounded-full px-3.5 py-2 text-sm' : 'border border-gray-400 rounded-full px-3.5 py-2 text-sm bg-white'} onClick={() => toggleTab(id)}>{title}</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <section className="px-8">
                        {/* ---------------Blog------------------- */}
                        
                        { toggle === 1 &&
                            <>
                            
                            <Slider {...settings}  className='grid grid-cols-1 md:grid-cols-3 lg:grid-col-3'>
                                {blogs.map((data , id ) => (
                                        <div className='w-[240px] sm:w-[275px] md:w-[280px] relative' key={id} >
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[270] md:h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="md:absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                                </Slider>
                            </>
                        }
                            {/* ---------------Webinar------------------- */}
                        { toggle === 2 &&
                            <Slider {...settings}>
                                {webinars.map((data , id ) => (
                                        <div className='w-[240px] sm:w-[275px] md:w-[280px] gap-15 relative' key={id}>
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                        </div>
                                ))}
                            </Slider>
                        }
                                {/* ------------------------------Enterprise------------------------------               */}
                        {toggle === 3 && 
                                <Slider {...settings}>
                            {enterprise.map((data , id ) => (
                                    <div className='w-[240px] sm:w-[275px] md:w-[280px] gap-15 relative' key={id}>
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                    </div>
                            ))}
                            </Slider>
                        }
                                {/* ------------------------------Podcast------------------------------               */}
                        {toggle === 4 &&
                            <Slider {...settings}>
                            {podcast.map((data , id ) => (
                                    <div className='w-[240px] sm:w-[275px] md:w-[280px] gap-15 relative' key={id}>
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                    </div>
                            ))}
                        </Slider>
                        }
                                {/* ------------------------------White Paper------------------------------               */}
                        {toggle === 5 && 
                            <Slider {...settings}>
                            {whitepaper.map((data , id ) => (
                                    <div className='w-[240px] sm:w-[275px] md:w-[280px] gap-15 relative' key={id}>
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                    </div>
                            ))}
                        </Slider>
                        }
                                {/* ------------------------------case studies------------------------------               */}
                        {toggle === 6 &&  
                            <Slider {...settings}>
                            {caseStudies.map((data , id ) => (
                                    <div className='w-[240px] sm:w-[275px] md:w-[280px] relative' key={id}>
                                            <Image src={data.src} width='100' height='100' alt ='blog image' className='w-full' />
                                            <div className="shadow-md py-5 px-4 rounded-b-2xl h-[230px] bg-white">
                                                <h3 className="text-[18px] font-semibold">{data.heading}</h3>
                                                <p className="text-sm mt-2">{data.content}</p>
                                                <p className="text-sm my-3">{data.content2}</p>
                                                <div className="absolute bottom-7">
                                                    <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'><span>Read More</span> <MdKeyboardArrowRight size={20} className='font-semibold ml-1' /></Link>
                                                </div>
                                            </div>
                                    </div>
                            ))}
                        </Slider>
                        }
                    </section>
                    <div className="flex justify-center my-12">
                        <Link href='#' className='text-xs text-navyBlue font-semibold flex items-center pt-2'>View all</Link>
                    </div>
                        </div>
                
            </div>
        </main>
    )
}

export default Blog;