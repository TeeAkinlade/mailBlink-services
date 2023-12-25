import Image from "next/image";

const TestimonialCard = (props) => {
  return (
    <div className="bg-white rounded-2xl w-full flex items-start gap-3 p-5 box-shadow transition-all hover:scale-105 border-b-4 border-transparent hover:border-ui_primary">
        <Image src="/assets/icons/quote_mark.svg" alt="quation mark" width={15} height={15} />
        <div>
          <p className=" text-base text-[#17181A] mb-6">
            {props.feedback}
          </p>
          <div className="flex items-center">
            <Image src={props.image} alt="" width={50} height={50} className=" rounded-full w-[2.75rem] h-[2.75rem] object-cover mr-5"/>
            <div className="flex flex-col">
                <span className="text-lg font-semibold">{props.name}</span>
                <span className=" text-Ash text-sm">{props.position}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default TestimonialCard;
