"use client";
import { BsArrowUp } from "react-icons/bs";
import { HiOutlineBolt } from "react-icons/hi2";
import { SlEye } from "react-icons/sl";
import { MdArrowForwardIos } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import BarChart from "../Charts/BarChart";
import RadialChart from "../Charts/RadialChart";
import { useCurrentUser } from "@/app/auth/currentUser";

export default function Home() {
  const { user } = useCurrentUser();
  const name = user?.user_metadata?.name?.split(" ");
  const firstName = name?.[0];

  return (
    <div className="p-7 text-2xl flex-1 flex-col h-screen text-black leading-8 py-2 gap-y-2 mt-16 flex-wrap">
      <div>
        <h2 className="text-xl">
          Welcome
          <strong className="text-black">
            {firstName ? firstName : user?.email}!
          </strong>
        </h2>
        <p className="text-slate-500 text-[1rem] font-[400]">
          {`Here's the summary of your email marketing process so far`}
        </p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-12 pb-8">
        <div className="col-span-2">
          {/* First Three Card Section */}
          <div className=" md:grid md:grid-cols-3 gap-4 justify-between  mt-10">
            <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 rounded-xl pb-4 hover:scale-110 duration-500 ease-in-out ">
              <div className="flex justify-between w-auto">
                <span className="text-ui_secondary1 bg-[#6aacf844] rounded-xl flex items-center p-2 ">
                  <HiOutlineBolt />
                </span>
                <span className="px-3 bg-[#8df4bf48] text-[#228B22] text-[0.8rem] rounded-full flex items-center font-[700]">
                  <BsArrowUp /> 85%
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  New Subscribers
                </p>
                <span className="font-[900] text-xl">40</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 mt-4 md:mt-0 rounded-xl pb-4 hover:scale-110 duration-500 ease-in-out ">
              <div className="flex justify-between w-auto">
                <span className="bg-[#8df4bf48] text-[#228B22] rounded-xl flex items-center p-2 ">
                  <SlEye />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  Total Monthly Views
                </p>
                <span className="font-[900] text-xl">300,140</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 mt-4 md:mt-0 rounded-xl pb-4 hover:scale-110 duration-500 ease-in-out ">
              <div className="flex justify-between w-auto">
                <span className="bg-[#f4c0785c] text-[#FDBC64] rounded-xl flex items-center p-2 ">
                  <HiOutlineBolt />
                </span>
                <span className="px-3 bg-[#8df4bf48] text-ui_primary2 text-[0.8rem] rounded-full flex items-center font-[700]">
                  <BsArrowUp /> 85%
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  Total Interactions
                </p>
                <span className="font-[900] text-xl">4,100,200</span>
              </div>
            </div>
          </div>
          {/* Barchart X Subscribers */}
          <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 rounded-xl pb-4 mt-8 ">
            <div className="flex justify-between items-center">
              <h2 className="text-[1rem] text-ui_primary font-[600]">
                Subscribers
              </h2>
              <span className="flex gap-x-2 text-ui_secondary1 text-[0.8rem] justify-center items-center group ">
                See all
                <MdArrowForwardIos className="group-hover:translate-x-2 duration-500 ease-in-out" />
              </span>
            </div>

            <div className="flex gap-2 ">
              <span className="text-ui_secondary1 bg-[#6aacf844] rounded-xl flex items-center p-2 px-4 ">
                <SlPeople />
              </span>
              <span className="flex flex-col gap-0 text-[0.8rem] font-[700] leading-5">
                <h3>{`Something I'm not every sure of`}</h3>

                <p className="text-slate-500 text-[0.8rem] font-[400]">
                  <strong>2670</strong> Overall Subscriber count
                </p>
              </span>
            </div>

            <div className="flex items-center justify-start md:w-[45rem] h-[15rem] p-0 relative z-1">
              <BarChart />
            </div>
          </div>
          {/* RECENT CAMPAIGN */}
          <div className="flex flex-col gap-y-4 bg-white shadow-md mt-8 cursor-pointer p-4 rounded-xl pb-8 ">
            <div className="flex justify-between items-center">
              <h2 className="text-[1rem] text-ui_primary font-[600]">
                Most Recent Campaign
              </h2>
              <span className="flex gap-x-2 text-ui_secondary1 text-[0.8rem] justify-center items-center group ">
                See all
                <MdArrowForwardIos className="group-hover:translate-x-2 duration-500 ease-in-out" />
              </span>
            </div>
            <div className="flex flex-row gap-2 pb-4 border-b-[0.7px] border-slate-200">
              <div className="flex flex-col items-start border-r-[0.5px] border-slate-200 pr-10">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Total Interactions</strong>
                </p>
                <span className="md:mt-2 text-sm text-slate-500">400</span>
              </div>
              <div className="flex flex-col items-start border-r-[0.5px] border-slate-200 pr-8">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Title</strong>
                </p>
                <span className="md:mt-2 text-sm text-slate-500">
                  I am here, Join me!
                </span>
              </div>
              <div className="flex flex-col items-start pr-8">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Date Posted</strong>
                </p>
                <span className="md:mt-2 text-sm text-slate-500">
                  09/09/2023
                </span>
              </div>
            </div>
            <div className="flex w-full justify-end items-end">
              <button className="p-2 px-4 text-white bg-ui_secondary1 cursor-pointer rounded-xl text-[0.8rem] leading-7 hover:scale-105 duration-500 hover:opacity-80">
                View Campaign
              </button>
            </div>
          </div>
        </div>
        {/* SCHEDULE */}
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-y-2">
            <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 px-6 rounded-xl pb-4 mt-10">
              <span className="flex flex-col gap-y-3">
                <h3 className="text-[1rem] leading-6 font-[600]">
                  Upcoming Schedule
                </h3>
                <p className="text-[0.7rem] text-slate-500">15 July 2023</p>
              </span>
              <div className="flex flex-col gap-y-2 border-b-[0.5px] pb-4 border-slate-200">
                <div className="flex flex-row gap-4 items-center pb-2">
                  <p className="font-[600] text-[1rem]">11:00</p>
                  <div className="h-full  bg-ui_primary2 w-[0.2rem]"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      Dwayne Johnson Fitfam Campaign
                    </p>
                    <span className="font-[600] text-[0.7rem]">
                      Follow up mail
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-center pb-2">
                  <p className="font-[600] text-[1rem]">18:00</p>
                  <div className="h-full  bg-ui_secondary1 w-[0.2rem]"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      XYZ Fitfam Campaign
                    </p>
                    <span className="font-[600] text-[0.7rem]">
                      Webinar mail schedule
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col  pt-2">
                <div className="flex flex-row gap-4 items-center pb-4">
                  <p className="font-[600] text-[1rem]">09:00</p>
                  <div className="h-full  bg-[#fbb34f] w-[0.2rem]"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      Dwayne Johnson XYZ Campaign
                    </p>
                    <span className="font-[600] text-[0.7rem]">
                      Follow up mail
                    </span>
                  </div>
                </div>
                <button className="flex flex-row gap-x-4 text-ui_secondary1 bg-[#6aacf844] w-full text-[0.8rem] font-[600] rounded-xl px-2 py-1 justify-center items-center group">
                  View more schedules
                  <MdArrowForwardIos className="group-hover:translate-x-2 duration-500 ease-in-out" />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-4 bg-white shadow-md cursor-pointer p-4 px-6 rounded-xl pb-4 md:mt-10">
              <span className="flex flex-col">
                <h3 className="text-[1rem] leading-6 font-[600]">
                  Contact Demographic
                </h3>
                <p className="text-[0.7rem] text-slate-500">
                  {`Visualization of the contacts you've made over time`}
                </p>
              </span>

              <div className="  md:w-[45rem] h-[18rem] flex justify-center items-center overflow-hidden  relative z-1">
                <RadialChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
