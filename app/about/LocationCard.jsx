import Image from "next/image";
import { BsEnvelope } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";

const LocationCard = ({ id, image, title, contact, phone, address }) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300 ">
      <h1 className="text-[40px] leading-[48px] font-bold text-[#1f284f]">
        Locations
      </h1>

      <Image
        src="/assets/images/location-img-1.png"
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <div className="mt-4 flex gap-x-4">
          <h3 className="text-[18px] font-['Poppins'] font-medium text-[#1f284f]">{item.title}</h3>
                <FiPhoneCall className="h-16 w-16" />
              <h4 className="text-[14px] font-['Poppins'] text-[#575757] whitespace-nowrap">{item.phone}</h4>
              <BsEnvelope className="h-16 w-16" />
            <h5 className="text-[14px] font-['Poppins'] text-[#575757]">{item.contact}</h5>
            <CiLocationOn className="h-16 w-16" />
         <p className="text-[14px] font-['Poppins'] text-[#575757]">{item.address}</p>    
            <CiLocationOn className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
        </div>
      </div>
    </article>
  );
};
export default LocationCard;
