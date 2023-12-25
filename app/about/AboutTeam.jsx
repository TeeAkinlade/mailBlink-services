import Image from "next/image";
import React from "react";

const AboutTeam = () => {
  return (
    <div className="m-50 container">
      <div className="mt-5 w-[1140px] p-20 text-center font-['Poppins'] text-[40px] font-bold leading-[48px] text-[#1f284f]">
        Meet Our Team Leaders
        <div className="flex flex-row items-start justify-start gap-[149px] ">
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-01.png"
            ></Image>
            <div className="relative flex h-[63px] w-[176px] shrink-0 p-10">
              <h2 className="absolute left-[0px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000] ">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                General Manager
              </p>
            </div>
          </div>
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-02.png"
            ></Image>
            <div className="relative flex h-[63px] w-[214px] shrink-0">
              <h2 className="absolute left-[18px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                Community Manager
              </p>
            </div>
          </div>
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-03.png"
            ></Image>
            <div className="relative flex h-[63px] w-[214px] shrink-0">
              <h2 className="absolute left-[19px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                Community Manager
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[149px]">
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-04.png"
            ></Image>{" "}
            <div className="relative flex h-[63px] w-[176px] shrink-0">
              <h2 className="absolute left-[0px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                General Manager
              </p>
            </div>
          </div>
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-start gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-05.png"
            ></Image>{" "}
            <div className="relative flex h-[63px] w-[214px] shrink-0">
              <h2 className="absolute left-[18px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                Community Manager
              </p>
            </div>
          </div>
          <div className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-[24px]">
            <Image
              alt=""
              width="200"
              height="200"
              src="/images/about/team-01.png"
            ></Image>{" "}
            <div className="relative flex h-[63px] w-[214px] shrink-0">
              <h2 className="absolute left-[19px] top-0 whitespace-nowrap font-['Poppins'] text-[22px] font-bold text-[#000]">
                Michal Kosinski{" "}
              </h2>
              <p className="absolute left-0 top-[33px] whitespace-nowrap font-['Poppins'] text-[20px] text-[#979292]">
                Community Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
