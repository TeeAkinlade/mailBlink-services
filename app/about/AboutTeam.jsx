import { items } from "@/constants";
import Image from "next/image";
import React from "react";

const AboutTeam = () => {
  // <section className="">
  
    //   <div className="mt-5 w-[1140px] p-20 text-center font-['Poppins'] text-[40px] font-bold leading-[48px] text-[#1f284f]">
    //     Meet Our Team Leaders
    //     <div className="flex flex-row items-start justify-start gap-[149px] ">
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>
    //         <div className="relative flex h-[63px] w-[176px] shrink-0 p-10">
    //           <h2 className="absolute left-[0px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000] ">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             General Manager
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>
    //         <div className="relative flex h-[63px] w-[214px] shrink-0">
    //           <h2 className="absolute left-[18px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             Community Manager
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>
    //         <div className="relative flex h-[63px] w-[214px] shrink-0">
    //           <h2 className="absolute left-[19px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             Community Manager
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex flex-row items-start justify-start gap-[149px]">
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>{" "}
    //         <div className="relative flex h-[63px] w-[176px] shrink-0">
    //           <h2 className="absolute left-[0px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             General Manager
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>{" "}
    //         <div className="relative flex h-[63px] w-[214px] shrink-0">
    //           <h2 className="absolute left-[18px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             Community Manager
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-[24px]">
    //         <Image
    //           alt=""
    //           width="200"
    //           height="200"
    //           src="/assets/images/team-01.png"
    //         ></Image>{" "}
    //         <div className="relative flex h-[63px] w-[214px] shrink-0">
    //           <h2 className="absolute left-[19px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
    //             Michal Kosinski{" "}
    //           </h2>
    //           <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
    //             Community Manager
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    const teams = [
  {
    id: 1,
    image: "/assets/images/team-01.png",
    name: "Michal Kosinski",
    position:
      "General Manager.",
  },
  {
    id: 2,
    image: "/assets/images/team-02.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 3,
    image: "/assets/images/team-03.png",
    name:"Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 4,
    image: "/assets/images/team-04.png",
    name:"Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 5,
    image: "/assets/images/team-05.png",
    name:"Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 6,
    image: "/assets/images/team-06.png",
    name:"Michal Kosinski",
    position: "General Manager.",
  },
];
return (
  <main className="mt-10 bg-blue-50 px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h1 className="text-center text-2xl font-extrabold md:text-4xl">
     Meet Our Team Leaders     
       </h1>
      <div className="flex flex-col items-center md:mt-10 px-10 md:px-0">
        <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((item, index) => (
            <div
              key={index}
              className={`transform overflow-hidden rounded-xl border-b-4 border-transparent px-5 py-5 text-center transition-transform hover:scale-105 hover:border-ui_primary hover:bg-white hover:shadow-lg`}
            >
              <div className="flex items-center justify-center ">
               <Image
              alt=""
              width="200"
              height="200"
              src="/assets/images/team-03.png"
               />    
                
              </div>
              <h2 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.name}
              </h2>
              <h2 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.title}
              </h2>
              <p className="text-sm md:text-base">{item.position}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default AboutTeam;
