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
  const name = user?.user_metadata?.name.split(" ");
  const firstName = name?.[0];
  return (
    <div className="mt-16 h-screen flex-1 flex-col flex-wrap gap-y-2 p-7 py-2 text-2xl leading-8 text-black">
      <div>
        <h2 className="text-xl">
          Welcome <strong className="text-black">{firstName}!</strong>
        </h2>
        <p className="text-[1rem] font-[400] text-slate-500">
          {`Here's the summary of your email marketing process so far`}
        </p>
      </div>
      <div className="grid grid-cols-1 pb-8 xl:grid-cols-3 xl:gap-12">
        <div className="col-span-2">
          {/* First Three Card Section */}
          <div className="mt-10 justify-between gap-4 md:grid md:grid-cols-3">
            <div className="flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 pb-4 shadow-md duration-500 ease-in-out hover:scale-110">
              <div className="flex w-auto justify-between">
                <span className="flex items-center rounded-xl bg-[#6aacf844] p-2 text-ui_secondary1">
                  <HiOutlineBolt />
                </span>
                <span className="flex items-center rounded-full bg-[#8df4bf48] px-3 text-[0.8rem] font-[700] text-[#228B22]">
                  <BsArrowUp /> 85%
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  New Subscribers
                </p>
                <span className="text-xl font-[900]">40</span>
              </div>
            </div>
            <div className="mt-4 flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 pb-4 shadow-md duration-500 ease-in-out hover:scale-110 md:mt-0">
              <div className="flex w-auto justify-between">
                <span className="flex items-center rounded-xl bg-[#8df4bf48] p-2 text-[#228B22]">
                  <SlEye />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  Total Monthly Views
                </p>
                <span className="text-xl font-[900]">300,140</span>
              </div>
            </div>
            <div className="mt-4 flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 pb-4 shadow-md duration-500 ease-in-out hover:scale-110 md:mt-0">
              <div className="flex w-auto justify-between">
                <span className="flex items-center rounded-xl bg-[#f4c0785c] p-2 text-[#FDBC64]">
                  <HiOutlineBolt />
                </span>
                <span className="flex items-center rounded-full bg-[#8df4bf48] px-3 text-[0.8rem] font-[700] text-ui_primary2">
                  <BsArrowUp /> 85%
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-[0.8rem] leading-4 text-slate-500">
                  Total Interactions
                </p>
                <span className="text-xl font-[900]">4,100,200</span>
              </div>
            </div>
          </div>
          {/* Barchart X Subscribers */}
          <div className="mt-8 flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 pb-4 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-[1rem] font-[600] text-ui_primary">
                Subscribers
              </h2>
              <span className="group flex items-center justify-center gap-x-2 text-[0.8rem] text-ui_secondary1">
                See all
                <MdArrowForwardIos className="duration-500 ease-in-out group-hover:translate-x-2" />
              </span>
            </div>

            <div className="flex gap-2">
              <span className="flex items-center rounded-xl bg-[#6aacf844] p-2 px-4 text-ui_secondary1">
                <SlPeople />
              </span>
              <span className="flex flex-col gap-0 text-[0.8rem] font-[700] leading-5">
                <h3>{`Something I'm not very sure of`}</h3>

                <p className="text-[0.8rem] font-[400] text-slate-500">
                  <strong>2670</strong> Overall Subscriber count
                </p>
              </span>
            </div>

            <div className="z-1 relative flex h-[15rem] items-center justify-start p-0 md:w-[45rem]">
              <BarChart />
            </div>
          </div>
          {/* RECENT CAMPAIGN */}
          <div className="mt-8 flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 pb-8 shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-[1rem] font-[600] text-ui_primary">
                Most Recent Campaign
              </h2>
              <span className="group flex items-center justify-center gap-x-2 text-[0.8rem] text-ui_secondary1">
                See all
                <MdArrowForwardIos className="duration-500 ease-in-out group-hover:translate-x-2" />
              </span>
            </div>
            <div className="flex flex-row gap-2 border-b-[0.7px] border-slate-200 pb-4">
              <div className="flex flex-col items-start border-r-[0.5px] border-slate-200 pr-10">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Total Interactions</strong>
                </p>
                <span className="text-sm text-slate-500 md:mt-2">400</span>
              </div>
              <div className="flex flex-col items-start border-r-[0.5px] border-slate-200 pr-8">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Title</strong>
                </p>
                <span className="text-sm text-slate-500 md:mt-2">
                  I am here, Join me!
                </span>
              </div>
              <div className="flex flex-col items-start pr-8">
                <p className="text-[0.8rem] leading-4 text-slate-700">
                  <strong>Date Posted</strong>
                </p>
                <span className="text-sm text-slate-500 md:mt-2">
                  09/09/2023
                </span>
              </div>
            </div>
            <div className="flex w-full items-end justify-end">
              <button className="cursor-pointer rounded-xl bg-ui_secondary1 p-2 px-4 text-[0.8rem] leading-7 text-white duration-500 hover:scale-105 hover:opacity-80">
                View Campaign
              </button>
            </div>
          </div>
        </div>
        {/* SCHEDULE */}
        <div className="col-span-1">
          <div className="grid grid-cols-1 gap-y-2">
            <div className="mt-10 flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 px-6 pb-4 shadow-md">
              <span className="flex flex-col gap-y-3">
                <h3 className="text-[1rem] font-[600] leading-6">
                  Upcoming Schedule
                </h3>
                <p className="text-[0.7rem] text-slate-500">15 July 2023</p>
              </span>
              <div className="flex flex-col gap-y-2 border-b-[0.5px] border-slate-200 pb-4">
                <div className="flex flex-row items-center gap-4 pb-2">
                  <p className="text-[1rem] font-[600]">11:00</p>
                  <div className="h-full w-[0.2rem] bg-ui_primary2"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      Dwayne Johnson Fitfam Campaign
                    </p>
                    <span className="text-[0.7rem] font-[600]">
                      Follow up mail
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-4 pb-2">
                  <p className="text-[1rem] font-[600]">18:00</p>
                  <div className="h-full w-[0.2rem] bg-ui_secondary1"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      XYZ Fitfam Campaign
                    </p>
                    <span className="text-[0.7rem] font-[600]">
                      Webinar mail schedule
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col pt-2">
                <div className="flex flex-row items-center gap-4 pb-4">
                  <p className="text-[1rem] font-[600]">09:00</p>
                  <div className="h-full w-[0.2rem] bg-[#fbb34f]"></div>
                  <div className="flex flex-col items-start">
                    <p className="text-[0.7rem] leading-3 text-slate-500">
                      Dwayne Johnson XYZ Campaign
                    </p>
                    <span className="text-[0.7rem] font-[600]">
                      Follow up mail
                    </span>
                  </div>
                </div>
                <button className="group flex w-full flex-row items-center justify-center gap-x-4 rounded-xl bg-[#6aacf844] px-2 py-1 text-[0.8rem] font-[600] text-ui_secondary1">
                  View more schedules
                  <MdArrowForwardIos className="duration-500 ease-in-out group-hover:translate-x-2" />
                </button>
              </div>

              <div></div>
            </div>

            <div className="flex cursor-pointer flex-col gap-y-4 rounded-xl bg-white p-4 px-6 pb-4 shadow-md md:mt-10">
              <span className="flex flex-col">
                <h3 className="text-[1rem] font-[600] leading-6">
                  Contact Demographic
                </h3>
                <p className="text-[0.7rem] text-slate-500">
                  {`Visualization of the contacts you've made over time`}
                </p>
              </span>

              <div className="z-1 relative flex h-[18rem] items-center justify-center overflow-hidden md:w-[45rem]">
                <RadialChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
