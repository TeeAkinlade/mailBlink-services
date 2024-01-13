import Image from "next/image";
// import Supportimg from "./Group 1000000830.png";

export default function Support() {
  return (
    <main className="max-width padding-x flex-center md:flex-row w-full bg-blue-50 py-4 text-ui_primary md:px-[.5rem] md:py-10">
      <div className="md:w-3/5 md:text-left ">
        <h2 className="mt-10 font-poppins text-xl font-semibold text-ui_primary md:text-4xl md:font-bold">
          Premium Support
        </h2>
        <p className="text-md font-md mt-4 md:mt-10 md:text-lg md:pr-[7.5rem]">
          Our FirstWave support engineers are highly skilled and experienced in
          NMIS, Open-AudIT and all of our commercial products and helped
          customers from Telcos, MSP, enterprise organizations.
        </p>
        <p className="text-md mt-4 md:mt-7 md:text-lg">
          We work closely with you during implementation and rollout, as well as
          post delivery of our solutions.
        </p>
        <button className="custom-btn mt-10 cursor-pointer transition duration-150 ease-in-out">
          Go to Support
        </button>
      </div>
      <div className="md:w-2/5">
        <Image
          src="/assets/images/Group 1000000830.png"
          width={1000}
          height={500}
          alt="support"
          className="w-full md:max-w-xl"
        />
      </div>
    </main>
  );
}
