import Link from "next/link";
import Form from "./Form";
import Image from "next/image";
import { contacts, socialMediaLinks } from "@/constants";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-between gap-10 px-7 py-4 pb-24 md:flex-row md:px-24">
        <div className="flex flex-col items-center gap-8 text-center text-base font-medium text-navyBlue md:items-start md:text-left">
          <h2 className="font-poppins text-[2.2rem] font-bold md:text-[3.125rem]">
            Get In <span className="font-light">Touch</span>
          </h2>
          <p className="font-normal text-[#575757]">
            {`Whether you have questions, suggestions, or just want to say hello,
            we're here and ready to assist you in any way we can.`}
          </p>
          <Link
            href={"#contact"}
            type="submit"
            className="custom-btn w-full md:w-fit"
          >
            Send Us a Message 👇
          </Link>
        </div>
        <div className="hidden w-full md:block">
          <Image
            src="/assets/images/contact-us-hero.webp"
            alt="hero image"
            width={400}
            height={350}
            className="object-cover"
          />
        </div>
      </div>
      <section id="contact">
        <div className="flex flex-col gap-10 bg-navyBlue px-7 py-20 md:flex-row md:gap-10 md:p-20">
          <div className="flex w-full flex-col items-center justify-between gap-4 text-white md:w-[50%] md:items-start">
            <h2 className="text-[2rem] font-bold md:text-[3rem]">
              Make your Inquiry
            </h2>
            <p className="text-gray-20 w-[80%]">
              {`Send us a message and we'll respond to you as shortly as we can.`}
            </p>
            <div className="flex flex-col items-center justify-center md:items-start">
              {contacts.map(({ id, alt, title, details }) => (
                <div
                  key={id}
                  className="cursor pointer flex w-fit gap-1 rounded-md border-2 border-transparent px-2 py-3 transition-all hover:border-green-50 hover:bg-[#032b25]"
                >
                  {title === "Support: " ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                  )}
                  <span>{details}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-6 py-2">
              {socialMediaLinks.map(({ id, alt, href, photo }) => (
                <Link
                  href={href}
                  key={id}
                  className="rounded-full bg-white transition-colors hover:bg-gray-400"
                >
                  <Image src={photo} alt={alt} width="40" height="40" />
                </Link>
              ))}
            </div>
          </div>
          <Form />
        </div>
      </section>
    </main>
  );
};

export default Contact;
