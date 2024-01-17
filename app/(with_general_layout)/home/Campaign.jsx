import Image from "next/image";
import Link from "next/link";
import { campaignDetailsList, campaignFeaturesDetails } from "@/constants";

const Campaign = () => {
  return (
    <section className="max-width md:px-12 mx-auto">
      <div className="my-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 lg:gap-20">
          <Image
            src="/assets/images/amico.svg"
            alt="campaign splash photo"
            width={80}
            height={80}
            className="w-full md:w-[80%] object-cover"
          />
          <div className="">
            <p className="font-Roboto text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-0 font-bold text-primaryBlack2 leading-tight md:hidden lg:block text-center md:text-left">
              Turn Around
              <span className="text-forestGreen"> Your Business </span>
            </p>
            <div className="mt-4">
              <p className="text-base text-center md:text-left text-primaryBlack leading-6 md:hidden lg:block">
                We believe in simplifying the complexities of online marketing,
                providing you with the tools and support needed to achieve your
                goals.
              </p>
              <p className="text-navyBlue font-semibold mt-6 md:mt-2 font-lg text-sm md:text-base">
                💡 Explore VendGenix:
              </p>
              <div className="mt-4">
                {campaignDetailsList.map(
                  ({ id, photo, alt, heading, content }) => (
                    <div className="flex gap-10 mb-4" key={id}>
                      <Image src={photo} alt={alt} width={40} height={40} />
                      <div className="">
                        <h3 className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                          {heading}
                        </h3>
                        <p className="text-primaryBlack text-sm max-w-[340px]">
                          {content}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="py-10 flex justify-center md:justify-start md:ml-4">
                <Link href="/campaigns" className="custom-btn">
                  Get Start Today!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 text-sm md:text-base md:grid-cols-2 pt-16 gap-x-20 gap-y-10">
          {campaignFeaturesDetails.map(
            ({ id, photo, alt, heading, content }) => (
              <div className="flex gap-10" key={id}>
                <Image src={photo} alt={alt} width={40} height={40} />
                <div className="">
                  <h3 className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">
                    {heading}
                  </h3>
                  <p className="text-primaryBlack text-sm max-w-[450px]">
                    {content}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Campaign;
