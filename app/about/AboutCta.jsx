import React from "react";

const AboutCta = () => {
  return (
    <div className=" container h-[815px] w-[1440px] bg-[#fafbfc]">
      <div className="flex w-[553px] flex-col items-start justify-start gap-[24px] overflow-hidden pb-0 pl-0 pr-[48px] pt-0">
        <div className="flex flex-col items-start justify-start overflow-hidden">
          <h1 className="whitespace-nowrap font-['Poppins'] text-[50px] font-bold leading-[60px] text-[#1f284f]">
            Become a Partner
          </h1>
          <p className="w-[444px] font-['Poppins'] text-[20px] leading-[32px] text-[#575757]">
            Used and supported in over 178 countries around the globe.
            <br />
            We’ll work with you to open more doors and close more sales across
            all verticals.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start rounded-[16px] bg-[#fff] p-[32px]">
        <div className="flex w-[514px] flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[16px] self-stretch rounded-[16px]">
            <div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  First name
                  <input
                    type="Email address"
                    name="q"
                    className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]"
                    placeholder="Enter your email"
                    autoComplete="off"
                  />
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter first name
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Last name
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter last name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] self-stretch">
              <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                email
              </div>
              <div className="relative flex h-[48px] shrink-0 self-stretch">
                <div className="absolute left-0 top-0 h-[48px] w-[514px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                  <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                    enter email address
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Company
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter contact number
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Phone
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      select
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] self-stretch">
              <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                Your Country
              </div>
              <div className="relative flex h-[48px] shrink-0 self-stretch">
                <div className="absolute left-0 top-0 h-[48px] w-[514px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                  <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                    enter your country
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between self-stretch">
              <div className="flex w-[140px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#0070f0e5] bg-[#0070f0e5] px-[24px] py-[12px]">
                <div className="whitespace-nowrap font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff]">
                  Apply
                </div>
              </div>
              <div className="whitespace-nowrap font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#1f284f]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-start justify-start rounded-[16px] bg-[#fff] p-[32px]">
        <div className="flex w-[514px] flex-col items-start justify-start">
          <div className="flex flex-col items-start justify-start gap-[16px] self-stretch rounded-[16px]">
            <div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  First name
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter first name
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Last name
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter last name
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] self-stretch">
              <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                email
              </div>
              <div className="relative flex h-[48px] shrink-0 self-stretch">
                <div className="absolute left-0 top-0 h-[48px] w-[514px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                  <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                    enter email address
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[20px] self-stretch">
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Company
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      enter contact number
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                  Phone
                </div>
                <div className="relative flex h-[48px] shrink-0 self-stretch">
                  <div className="absolute left-0 top-0 h-[48px] w-[247px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                    <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                      select
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[4px] self-stretch">
              <div className="w-[381px] font-['Poppins'] text-[12px] font-medium text-[#515458]">
                Your Country
              </div>
              <div className="relative flex h-[48px] shrink-0 self-stretch">
                <div className="absolute left-0 top-0 h-[48px] w-[514px] rounded-[8px] border-[1px] border-solid border-[#b7bfc7] bg-[#fff]">
                  <div className="absolute left-[12px] top-[12px] w-[357px] font-['Poppins'] text-[16px] leading-[24px] text-[#575757]">
                    enter your country
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between self-stretch">
              <div className="flex w-[140px] shrink-0 flex-col items-center justify-center rounded-[30px] border-[1px] border-solid border-[#0070f0e5] bg-[#0070f0e5] px-[24px] py-[12px]">
                <button
                  type="submit"
                  className="whitespace-nowrap font-['Poppins'] text-[16px] font-semibold leading-[24px] text-[#fff]"
                >
                  Apply
                </button>
              </div>
              <div className="whitespace-nowrap font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#1f284f]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div id="join-section" className="relative z-10 mt-32">
        <div className="bg-newsletter mx-auto max-w-2xl rounded-lg bg-[#1F384F] px-4 py-16 sm:px-6 md:max-w-7xl md:py-24 lg:px-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8">
            {/* COLUMN-1 */}
            <div>
              <h3 className="mb-3 text-5xl font-bold text-white">
                {" "}
                Join Our Newsletter{" "}
              </h3>
              <h4 className="mb-7 text-lg font-medium text-white">
                Subscribe our newsletter for discounts, promo and many more.
              </h4>
              <div className="flex gap-2">
                <input
                  type="Email address"
                  name="q"
                  className="w-full rounded-md bg-white py-4 pl-4 text-sm text-black"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <input
                  type="Email address"
                  name="q"
                  className="w-full rounded-md bg-white py-4 pl-4 text-sm text-black"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
                <button className="bg-purple rounded px-4 py-2 font-medium text-white hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>

            {/* COLUMN-2 */}
            <div className="hidden sm:block">
              <div className="float-right -mt-32">
                {/* <Image src={"/assets/newsletter/Free.svg"} alt="bgimg" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
