/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="w-[1440px] flex flex-col items-center justify-start gap-[48px] py-[96px] px-[165px]">
        <div className="w-[1140px] flex flex-col items-center justify-center overflow-hidden">
          <h2 className="w-[1130px] text-[40px] leading-[48px] font-['Poppins'] font-bold text-[#1f284f] text-center">
            Our products
          </h2>
        </div>
        <div className="flex flex-col items-start justify-start gap-[64px] overflow-hidden">
          <div className="flex flex-row items-center justify-start gap-[30px] overflow-hidden">
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="car-engine"
                width="32"
                height="32"
                src="car-engine 1I1_2783;1_1874.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <p className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Sophisticated Business Rules{" "}
                </p>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Manrope'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="think-out-of-the-box"
                width="32"
                height="32"
                src="think-out-of-the-box 1I1_2783;1_1896.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <h3 className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Pre-Configured Out-of-the-
                </h3>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Manrope'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="maximize"
                width="24"
                height="24"
                src="maximize 1I1_2783;1_1912.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <h3 className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Massively Scalable
                </h3>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Poppins'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[30px] overflow-hidden">
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="visibility"
                width="32"
                height="32"
                src="visibility 1I1_2783;1_1919.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <div className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Visible Operational Impact
                </div>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Manrope'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="heart-monitoring"
                width="32"
                height="32"
                src="heart-monitoring 1I1_2783;1_1932.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <p className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Automated Health Live{" "}
                </p>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Manrope'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start gap-[24px] rounded-[8px]">
              <Image
                alt="setting"
                width="32"
                height="32"
                src="setting 1I1_2783;1_1942.png"></Image>
              <div className="flex flex-col items-center justify-start gap-[8px] overflow-hidden">
                <h3 className="w-[350px] text-[24px] leading-[32px] font-['Manrope'] font-semibold text-[#18191f] text-center">
                  Customizable Alert Escalation{" "}
                </h3>
                <p className="w-[350px] text-[16px] leading-[26px] font-['Manrope'] text-[#575757] text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  erat nibh tristique ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
