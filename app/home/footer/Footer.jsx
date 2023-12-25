import Link from "next/link";
import Image from "next/image";
import FooterLink from "./FooterLinks";
import { contacts, socialMediaLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="max-width padding-x">
      <div className="mt-16 mb-8">
        <div className="pt-16 pb-8 px-8">
          <div className="grid grid-cols-5 gap-20">
            <div className="col-span-5 md:col-span-2">
              <Link
                href="/"
                className="text-xl md:text-3xl font-Roboto font-semibold mb-8 text-primaryBlack2"
              >
                MailBlink.io
              </Link>
              <p className="my-4 text-primaryBlack font-medium text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                non leo at justo posuere luctus. Maecenas id mauris sit.
              </p>
              <div>
                  <p className="text-lg font-Roboto font-semibold padding-y text-primaryBlack2">
                  Reach us
                  </p>
                  {contacts.map(({ id, photo, alt, title, details }) => (
                    <div className="flex items-center space-x-3 pb-4" key={id}>
                      <Image src={photo} alt={alt} width="25" height="25" />
                      <p className="font-semibold text-primaryBlack text-xs md:text-sm">
                        {title}{" "}
                        <span className="font-normal pb-4">{details}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center space-x-6 mt-10">
                  {socialMediaLinks.map(({ id, alt, href, photo }) => (
                    <Link href={href} key={id}>
                      <Image
                        src={photo}
                        alt={alt}
                        width="40"
                        height="40"
                        className="hover:translate-y-4 hover:duration-300 hover:ease-in-out"
                      />
                    </Link>
                  ))}
                </div>
            </div>
            <div className="col-span-5 md:col-span-3">
              <FooterLink />
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex justify-between items-center">
            <p className="text-xs md:text-sm text-primaryBlack">
              <Link
                href="#"
                className="text-primaryBlack hover:text-ui_secondary1 text-xs md:text-sm"
              >
                MailBlink 2023.  
              </Link>  All rights reserved
            </p>
            <div className="">
              <p className="text-xs md:text-sm text-primaryBlack">
                <Link
                  href="/terms-of-use"
                  className="text-primaryBlack hover:text-ui_secondary1 text-xs md:text-sm"
                >Terms of use </Link> &  
                <Link
                  href="/privacy-policy"
                  className="text-primaryBlack hover:text-ui_secondary1 text-xs md:text-sm"
                  > Privacy policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
