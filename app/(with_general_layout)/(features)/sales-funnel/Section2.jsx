import { FaBalanceScale } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const items = [
    {
      title: "All-in-One Simplicity",
      description:
        "Simplify your digital journey with our all-in-one platform. From email campaigns to social media, we've consolidated the tools you need for a seamless marketing experience.",
    },
    {
      title: "Innovative Technology",
      description:
        "We're committed to providing you with the latest tools and features, empowering your business to adapt and thrive in the dynamic digital space.",
    },
    {
      title: "Vibrant Community Support",
      description:
        "Exchange ideas, seek advice, and learn from the experiences of others. Our community is a valuable resource for networking and collective growth.",
    },
    {
      title: "Visible Operational Impact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Automated Health Life",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
    {
      title: "Customizable Alert Escalation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
    },
  ];

  return (
    <main className="mt-10 bg-[#ecfdf6] px-4 py-10 font-poppins text-navyBlue md:px-20 md:py-[100px] lg:px-40">
      <h2 className="text-center text-2xl font-extrabold md:text-4xl">
        Why Choose VendGenix?
      </h2>
      <div className="flex flex-col items-center px-10 md:mt-10 md:px-0">
        <div className="mt-5 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className={`transform overflow-hidden rounded-xl border-b-4 border-transparent px-5 py-5 text-center transition-transform hover:scale-105 hover:border-[#e0fffd] hover:bg-[#086250] hover:text-white hover:shadow-xl ease-in-out duration-500`}
            >
              <div className="flex items-center justify-center">
                <FaBalanceScale className="h-8 w-[50%]" />
              </div>
              <h3 className="text-md mt-3 font-bold md:mt-5 md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
