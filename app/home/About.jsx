import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="bg-backGround">
      <div className="max-width md:px-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-16 md:py-28 items-center md:gap-10 lg:gap-20">
          <h2 className="font-Roboto font-semibold text-4xl text-center text-navyBlue mb-10 md:hidden">
            About Us
          </h2>
          <div>
            <Image
              src="/assets/images/cuate.svg"
              alt="About section image"
              width="80"
              height="80"
              className=" w-full md:w-[80%]"
            />
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="font-semibold text-4xl lg:text-5xl text-navyBlue mb-10 hidden md:block">
              About Us
            </h2>
            <h3 className="text-navyBlue font-semibold leading-[28px] mb-4 text-lg text-center md:text-left">
              Who are we? MailBlink is a team of talented individuals working
              together to make software people love.
            </h3>
            <p className="text-primaryBlack text-sm md:text-base leading-[28px] py-4 md:py-0 text-center md:text-left mb-8">
              We develop multi-award winning enterprise-class software that
              helps IT teams audit IT environments. Elevate your digital
              marketing business with ourplatform tailored for visionary website
              designers, skilled developers, and ambitious entrepreneurs.
            </p>
            <Link href="/about" className="custom-btn block sm:inline-block text-center">
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
