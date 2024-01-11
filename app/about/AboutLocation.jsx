import Image from './Image';
import { FiPhoneCall } from "react-icons/fi";
import { aboutData } from "@/constants";
import { BsEnvelope } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const AboutLocation = () => {
  return (
     <section className="mt-10 bg-blue-50 px-4 py-10 font-poppins text-ui_primary md:px-20 md:py-[100px] lg:px-40">
      <h1 className="text-center text-2xl font-extrabold md:text-4xl">
     Locations    
       </h1>
      <div className="flex flex-col items-center md:mb-5 px-10 md:px-0">
        <div className="py-40 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden  px-5 py-5 text-center"
            >
              <div className="flex items-center justify-center ">
               <Image
              alt=""
              width="200"
              height="200"
              src={item.image}
               />     
                
              </div>
              <h2 className="flex items-center text-sm md:text-base my-2">
                  <FiPhoneCall className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656] text-md mt-3 font-bold md:mt-5 md:text-lg">
                    {item.phone}
                  </span>
              </h2>
              <h2 className="flex items-center text-sm md:text-base my-2">
                  <BsEnvelope className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656] text-md mt-3 font-bold md:mt-5 md:text-lg">
                   {item.contact}
                  </span>
              </h2>
              <h2 className="flex items-center text-sm md:text-base my-2">
                  <CiLocationOn className="text-navyBlue" size={24} />
                  <span className="ml-4 text-[#565656] text-md mt-3 font-bold md:mt-5 md:text-lg">
                   {item.address}
                  </span>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutLocation;
