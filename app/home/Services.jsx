import Link from "next/link";
import { servicesData } from "@/constants";

const Services = () => {
  return (
    <section className="bg-linear">
      <div className="max-width md:px-12 mx-auto">
        <div className="py-32 px-8">
          <p className="text-4xl md:text-5xl font-semibold text-navyBlue font-Roboto text-center">
            Our Services
          </p>
          <p className="text-center text-sm md:text-base padding-y text-primaryBlack">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. The text
            will be populated with the right information later on. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. The text will be
            populated with the right information later on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-10">
            {servicesData.map(
              ({ id, icon, title, contents, href, linkText }) => (
                <div
                  className="py-16 bg-backGround shadow-xl p-8 rounded-lg transition-all hover:scale-105 duration-200 border-b-4 border-transparent hover:border-ui_primary"
                  key={id}
                >
                  <div className="bg-[#3CBA79] p-3 rounded-[50%] inline-block">
                    <span className="text-white">{icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-primaryBlack2 py-4 font-Roboto">
                    {title}
                  </h3>
                  <p className="text-primaryBlaxck mb-8 text-sm md:text-[15px]">
                    {contents}
                  </p>
                  <Link
                    href={href}
                    className="py-2.5 px-4 rounded-full hover:bg-white hover:text-navyBlue hover:font-semibold transition duration-300 text-sm md:text-base bg-navyBlue text-white"
                  >
                    {linkText}
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
