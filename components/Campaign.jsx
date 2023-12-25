import Image from "next/image";

const Campaign = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="my-20 px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
          <Image
            src="/image/unsplash_Of_m3hMsoAA.svg"
            alt="campaign splash photo"
            width={100}
            height={100}
            className="w-full object-cover"
          />
          <div className="">
            <p className="font-Roboto text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-0 font-bold text-primaryBlack2 text-center leading-tight">
              Create beautiful <br />
              <span className="text-forestGreen">Email Campaigns </span>
            </p>
            <div className=" mt-4">
              <p className="text-sm md:text-base text-primaryBlack leading-6">
                Use our machine learning powered propriotory solutions to
                protect your business from any cybersecurity attacts.
              </p>
              <p className="text-navyBlue font-semibold mt-2 font-lg text-sm md:text-base">
                Schedule a demo with our friendly experts.
              </p>
              <div className="mt-4">
                <div className="flex gap-10">
                  <Image
                    src="/assets/images/Frame 57.svg"
                    alt="Feature Icon"
                    width={50}
                    height={50}
                    className=""
                  />
                  <div className="">
                    <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                      Plug-n-plPlug-n-play configuration
                    </p>
                    <p className="text-primaryBlack text-sm max-w-[340px]">
                      Secure your organization without changing all the settings
                    </p>
                  </div>
                </div>
                <div className="flex gap-10 mt-4">
                  <Image
                    src="/assets/image/Frame 57.svg"
                    alt="Feature Icon"
                    width={50}
                    height={50}
                    className=""
                  />
                  <div className="">
                    <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                      Easy Integration
                    </p>
                    <p className="text-primaryBlack text-sm max-w-[340px]">
                      Smooth Integrated with Microsoft Office 365
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  href="#"
                  className="bg-navyBlue hover:rounded-[24px] rounded-full text-white hover:bg-white hover:text-navyBlue px-6 py-3 font-semibold hover:border hover:border-navyBlue hover:font-medium text-sm duration-200"
                >
                  Schedule a demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-sm md:text-base md:grid-cols-2 pt-16 gap-x-20 gap-y-10">
          <div className="flex gap-10">
            <Image
              src="/assets/images/Feature Icon with circle.svg"
              alt="Feature Icon with circle"
              width={60}
              height={60}
              className=""
            />
            <div className="">
              <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                Web Security
              </p>
              <p className="text-primaryBlack text-sm max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <Image
              src="/assets/images/Feature Icon with circle (1).svg"
              alt="Feature Icon with circle"
              width={60}
              height={60}
              className=""
            />
            <div className="">
              <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                Email Security
              </p>
              <p className="text-primaryBlack text-sm max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <Image
              src="/assets/images/Feature Icon with circle (2).svg"
              alt="Feature Icon with circle"
              width={60}
              height={60}
              className=""
            />
            <div className="">
              <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                Endpoint Security
              </p>
              <p className="text-primaryBlack text-sm max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <Image
              src="/image/Feature Icon with circle (4).svg"
              alt="Feature Icon with circle"
              width={60}
              height={60}
              className=""
            />
            <div className="">
              <p className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                Firewall & ADR
              </p>
              <p className="text-primaryBlack text-sm max-w-[450px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                et sed nam sem tellus erat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
