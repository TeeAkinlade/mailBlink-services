import Image from "next/image";
// import Supportimg from "./Group 1000000830.png";

export default function Support() {
  return (
    <main className="flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-3/5 md:text-left text-center justify-center items-center flex-col px-16">
        <h2 className="mt-10 text-xl font-semibold text-navyBlue md:text-4xl md:font-bold">
          Premium Support
        </h2>
        <p className="text-md font-md mt-4 md:mt-4 md:text-lg">
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
      <div className="mb-4 w-full p-20">
        <Image
          src="/assets/images/Group 1000000830.png"
          width={800}
          height={400}
          alt="support"
        />
      </div>
    </main>
  );
}
