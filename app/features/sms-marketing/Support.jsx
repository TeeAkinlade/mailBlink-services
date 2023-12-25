import Image from "next/image";
// import Supportimg from "./Group 1000000830.png";

export default function Support() {
  return (

    <main className="mt-0 bg-blue-50 text-ui_primary w-full font-poppins md:b-10 md:px-[2.25rem] py-4 md:py-10">
    <div className="mx-4  md:mx-10 md:max-w-screen-lg lg:max-w-screen-xl">
      <div className="flex flex-col md:flex-row justify-center items-center mb-[100px]">
        <div className="">
          <h2 className="text-ui_primary mt-10 font-semibold text-xl md:text-4xl md:font-bold font-poppins">
            Premium Support
          </h2>
          <p className="mt-4  md:mt-10 text-md md:text-lg font-md">
            Our FirstWave support engineers are highly skilled and <br /> experienced in
            NMIS, Open-AudIT and all of our commercial products and<br /> helped
            customers from Telcos, MSP, enterprise organisations.
          </p>
          <p className="mt-4 text-md md:mt-7  md:text-lg">
            We work closely with you during implementation and <br />rollout, as well as
            post delivery of our solutions.
          </p>
          <button className=" mt-10 bg-navyBlue text-white px-8 py-3 border border-navyBlue hover:text-navyBlue hover:bg-white hover:border-navyBlue rounded-full transition duration-150 ease-in-out cursor-pointer">
            Go to Support
          </button>
        </div>
        <div>
          <Image src="/assets/images/Group 1000000830.png" width={1000} height={500} alt="support" className="w-full md:max-w-xl" />
        </div>
      </div>
    </div>
  </main>
  );
}
