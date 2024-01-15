import Image from "next/image";

const AboutStory = () => {
  return (
    <section className="max-width px-4 font-poppins text-ui_primarypy-16 flex flex-wrap items-center py-8 md:py-20 lg:py-28">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="px-8 py-16 md:pt-0 md:p-16 lg:w-1/2">
                  <h3 className="pb-10 text-center text-[38px] font-bold md:text-5xl leading-[38px] text-[#1f284f]">
                    Our story
                  </h3>
                  <p className="text-[#565656] text-base md:text-lg text-center md:text-left">
                    Our FirstWave support engineers are highly skilled and
                    experienced in NMIS, Open-AudIT and all of our commercial
                    products and helped customers from Telcos, MSP, enterprise
                    organisations. We work closely with you during implementation
                    and rollout, as well as post delivery of our solutions. as
                    well as post delivery of our solutions.
                  </p>
            </div>
            <div className="w-full px-4 lg:w-1/2 ">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                src="/assets/images/about-story.png"
                  alt="about image"
                  width={600}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
        </div>
          <div className="my-6 px-8 lg:px-16 md:my-12 lg:my-8">
              <p className="text-[#565656] text-base md:text-lg text-center md:text-left ">
                Our mailblink support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.. <br/>
                Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.<br/>
                Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.<br/>Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.<br/>
                Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.We’re tired with recruiting and we know it can be done better. We’re starting with juniors and tech.
                </p>
          </div>
    </section>
  );
};

export default AboutStory;
