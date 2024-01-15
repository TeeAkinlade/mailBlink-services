import Image from "next/image";

const TestimonialCard = (props) => {
  return (
    <div className="box-shadow flex w-full items-start gap-3 rounded-2xl border-b-4 border-transparent bg-white p-5 transition-all hover:scale-105 hover:border-navyBlue ease-in-out duration-500">
      <Image
        src="/assets/icons/quote_mark.svg"
        alt="quation mark"
        width={15}
        height={15}
      />
      <div>
        <p className="mb-6 text-base text-[#17181A]">{props.feedback}</p>
        <div className="flex items-center">
          <Image
            src={props.image}
            alt="Testimonial images"
            width={50}
            height={50}
            className="mr-5 h-[2.75rem] w-[2.75rem] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">{props.name}</span>
            <span className="text-sm text-Ash">{props.position}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
