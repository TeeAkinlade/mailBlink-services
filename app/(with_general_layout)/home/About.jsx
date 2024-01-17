import Image from 'next/image';
import Link from 'next/link';

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
              className=" w-full lg:w-[80%]"
            />
          </div>
          <div className="mt-10 md:mt-0">
            <h2 className="font-semibold text-4xl lg:text-5xl text-navyBlue mb-10 hidden md:block">
              Why VendGenix?
            </h2>
            <h3 className="text-navyBlue font-semibold leading-[28px] mb-4 text-lg text-center md:text-left">
              We want you to stay ahead with cutting-edge marketing tools. No
              tech hurdles – just focus on your business.
            </h3>
            <p className="text-primaryBlack text-sm md:text-base leading-[28px] py-4 md:py-0 text-center md:text-left mb-8">
              {`We understand the challenges faced by small businesses. That's why
              we've created an inclusive community and an all-in-one hub,
              ensuring you have everything necessary for a successful digital
              presence.`}
            </p>
            <Link
              href="/about"
              className="custom-btn block sm:inline-block text-center"
            >
              Learn More About Us
            </Link>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
