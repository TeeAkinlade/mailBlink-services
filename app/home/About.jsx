import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-backGround">
      <div className="max-width padding-x">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-16 md:py-28 items-center md:gap-10 lg:gap-20">
          <h2 className="font-Roboto font-semibold text-3xl text-center text-navyBlue mb-10 md:hidden">
            About Us
          </h2>
          <div className="">
            <Image
              src="/assets/images/Group 1000000895.svg"
              alt="About image"
              width="80"
              height="80"
              className="w-[80%]"
            />
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="font-semibold md:text-4xl lg:text-5xl text-navyBlue mb-10 hidden md:block">
              About Us
            </h2>
            <h3 className="text-navyBlue font-semibold leading-[28px] mb-4 text-lg">
              Who are we? MailBlink is a team of talented individuals working
              together to make software people love.
            </h3>
            <p className="text-primaryBlack leading-[28px] mb-8">
              We develop multi-award winning enterprise-class software that
              helps IT teams audit IT environments.
            </p>
            <Link href="/about" className="custom-btn">
              Read More
            </Link>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
