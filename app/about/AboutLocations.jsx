import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { aboutData } from "@/constants";

const AboutLocations = () => {
  return (
    <section className="md:bg-white-500 mt-10 flex flex-col items-start justify-start gap-[33px] md:my-20 md:flex-row md:gap-10 md:px-24 bg-[#f4f2ff]">
      <h1 className="text-[40px] leading-[48px] font-bold text-[#1f284f]">Locations</h1>
    <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((item, index) => (
        <div
            key={index}
            className={`flex flex-col items-start justify-start`}
            >
         <Image
          src="/assets/images/Group 11_3097.png"
          alt="location-img"
          width={343} 
          height={206} 
          />
          <div className="w-[343px] flex flex-col items-start justify-start pt-[16px] pr-[16px] pb-[24px] pl-[24px] bg-[#fff] rounded-tl-0 rounded-tr-0 rounded-br-[16px] rounded-bl-[16px]">
            <div className="flex items-center justify-center">
              <h3 className="self-stretch text-[18px] font-['Poppins'] font-medium text-transform-[capitalize] text-[#1f284f]">{item.title}</h3>
                <FiPhoneCall className="h-16 w-16" />
              <h4 className="text-[14px] font-['Poppins'] text-transform-[capitalize] text-[#575757] whitespace-nowrap">{item.phone}</h4>
              <BsEnvelope className="h-16 w-16" />
            <h5 className="text-[14px] font-['Poppins'] text-transform-[capitalize] text-[#575757] whitespace-nowrap">{item.contact}</h5>
            <CiLocationOn className="h-16 w-16" />
         <p className="text-[14px] font-['Poppins'] text-transform-[capitalize] text-[#575757] whitespace-nowrap">{item.address}</p>
            </div>
          </div>
        </div>
          ))}
    </div>
    </section>
  );
}
 export default AboutLocations;