import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-between gap-10 md:px-40 px-7 pt-8 md:h-[41.75rem] md:flex-row">
        <div className="text-base font-medium text-ui_primary">
          <p className="mb-8 text-sm text-ui_secondary1">
            get in touch with us
          </p>
          <h2 className="font-poppins text-[2.2rem] font-bold md:text-[3.125rem]">
            Contact Us
          </h2>
          <p className="my-6">{"We'll be glad to hear from you."}</p>
          <p className="font-normal text-[#575757]">
            {`Whether you have questions, suggestions, or just want to say hello,
            we're here and ready to assist you in any way we can.`}
          </p>
        </div>
        <div className="hidden w-full md:block">
          <Image
            src="/assets/images/contact-us-hero.webp"
            alt="hero image"
            width={600}
            height={600}
            className="object-cover"
          />
        </div>
      </div>
      <section>
        <div className="flex md:flex-row flex-col items-center justify-center lg:gap-20 md:gap-10 bg-white lg:px-24 md:px-10 px-7">
          <div className="md:w-[28.8rem] md:text-start text-center w-full md:relative top-24 md:mt-0 mt-24">
            <h2 className=" md:text-[2.5rem] text-[2rem] font-bold  mb-3">
              Make your Inquiry
            </h2>
            <p className=" text-Ash md:text-xl text-lg md:w-[80%] w-full">
              {
                "Send us a message and we'll response to you as shortly as we can."
              }
            </p>
          </div>
          <div className="md:w-[36.15rem] w-full z-[1] relative md:top-[10rem] top-[5rem]">
            <Form />
          </div>
        </div>
        <div className="flex relative items-center bg-[#1F384F] w-full">
          <div className=" rounded-full bg-[#0070F0E5] opacity-70 md:w-[11.6rem] md:h-[11.6rem] w-[9.6rem] h-[9.6rem] relative -left-[7rem]"></div>
          <img
            src="/assets/icons/dots.svg"
            alt=""
            className="absolute bottom-6 left-[45%] w-36"
          />
        </div>
      </section>
    </main>
  );
};

export default Contact;
