import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    image: "/assets/icons/support.svg",
    title: "Community Support",
    description:
      "Community Support is also available for all open source users.",
  },
  {
    id: 2,
    image: "/assets/icons/github.icon.svg",
    title: "MailBlink on GitHub",
    description: "Track the MailBlink development changes on GitHub.",
  },
];

const Community = () => {
  return (
    <section className="flex md:flex-row flex-col lg:gap-5 md:gap-5 justify-center items-center md:h-[49.875rem] lg:px-[7.37rem] md:px-10 px-6 md:py-5 rounded-[100px]">
      <div className="md:w-[40% ] w-full ">
       <Image
          src="/assets/images/community.jpeg"
          alt=""
          width={500}
          height={500}
          quality={100}
          className="rounded-3xl"
        />
      </div>

      <div className="md:w-[100%]">
        <h2 className=" text-ui_primary font-bold lg:text-5xl text-4xl">
          Download NMIS
        </h2>
        <p className=" leading-8 text-Ash mt-2 text-md md:text-lg ">
          NMIS (Network Management Information System) is an open-source network
          management system that was first released in 1998.
          <Link href="/">
            <span className="underline text-ui_secondary1 block cursor-pointer">
              Download daataSheet
            </span>
          </Link>
        </p>
        <div className="flex justify-center items-center gap-8 mt-10">
          {items.map((item) => (
            <div key={item.id} className="w-[50%]">
              <img src={item.image} alt="" />
              <h3 className="font-semibold md:text-2xl text-xl mt-2">
                {item.title}
              </h3>
              <p className="text-Ash my-5 text-lg">{item.description}</p>
              <Link href="/">
                <button className=" bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer ">
                  Join
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
