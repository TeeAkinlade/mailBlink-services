/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutStory = () => {
  return (
    <section className="m-auto py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-[40px] p-14 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="whitespace-nowrap pb-20 text-center font-['Poppins'] text-[40px] font-bold leading-[48px] text-[#1f284f]">
                  Our story
                </h3>
                <p className="w-[519px] pb-20 font-['Poppins'] text-[20px] leading-[32px] text-[#17181a]">
                  Our FirstWave support engineers are highly skilled and
                  experienced in NMIS, Open-AudIT and all of our commercial
                  products and helped customers from Telcos, MSP, enterprise
                  organisations. We work closely with you during implementation
                  and rollout, as well as post delivery of our solutions. as
                  well as post delivery of our solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-story.png"
                alt="about image"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
          <p className="w-[1140px] font-['Poppins'] text-[20px] leading-[32px] text-[#575757]">
            Our mailblink support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.Our FirstWave
            support engineers are highly skilled and experienced in NMIS,
            Open-AudIT and all of our commercial products and helped customers
            from Telcos, MSP, enterprise organisations.. <br />
            <br />
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.
            <br />
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.Our FirstWave
            support engineers are highly skilled and experienced in NMIS,
            Open-AudIT and all of our commercial products and helped customers
            from Telcos, MSP, enterprise organisations.Our FirstWave support
            engineers are highly skilled and experienced in NMIS, Open-AudIT and
            all of our commercial products and helped customers from Telcos,
            MSP, enterprise organisations.t <br />
            Our FirstWave support engineers are highly skilled and experienced
            in NMIS, Open-AudIT and all of our commercial products and helped
            customers from Telcos, MSP, enterprise organisations.
            <br />
            We’re tired with recruiting and we know it can be done better. We’re
            starting with juniors and tech.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
