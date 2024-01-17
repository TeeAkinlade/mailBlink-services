import Link from "next/link";
import Image from "next/image";
import FooterLink from "./FooterLinks";
import { contacts, socialMediaLinks } from "@/constants";

const Footer = () => {
  return (
    <div className="max-width md:px-12 mx-auto">
      <div className="mt-10">
        <div className="px-8 pt-14">
          <div className="flex flex-col gap-12 md:gap-28 md:flex-row">
            <div className="col-span-5 md:col-span-2 md:w-2/5">
              <Link href="/">
                <Image
                  src="/assets/images/Logo VendGenix.svg"
                  ait="logo"
                  width="150"
                  height="150"
                />
              </Link>
              <p className="my-4 text-base text-primaryBlack">
               {` Ready to take the leap into a new era of digital marketing? Join
                VendGenix today and witness the transformation of your small
                business. Let's write the success story of your brand together.`}
              </p>
              <div>
                <p className="padding-y text-lg font-semibold text-primaryBlack2">
                  Reach us
                </p>
                {contacts.map(({ id, photo, alt, title, details, styles }) => (
                  <div className="flex items-center space-x-3 pb-4" key={id}>
                    <Image
                      src={photo}
                      alt={alt}
                      width="25"
                      height="25"
                      className={styles}
                    />
                    <p className="text-xs text-black md:text-sm">
                      {title}
                      <Link
                        href={
                          title === "Phone:"
                            ? `sms:${details.replace(/\s/g, "")}`
                            : `mailto:${details}`
                        }
                        className="pb-4 hover:text-[#089373]"
                      >
                        {details}
                      </Link>
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex items-center space-x-6">
                {socialMediaLinks.map(({ id, alt, href, photo }) => (
                  <Link
                    href={href}
                    key={id}
                    className="hover:bg-green-400 border-2 border-forestGreen rounded-full transition-colors"
                  >
                    <Image src={photo} alt={alt} width="40" height="40" />
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-span-5 md:col-span-3">
              <FooterLink />
            </div>
          </div>
          <hr className="mt-5" />
          <div className="my-5 flex flex-col gap-2 items-center justify-between md:flex-row">
            <p className="text-xs text-primaryBlack md:text-sm">
              <Link
                href="#"
                className="text-xs text-primaryBlack hover:text-[#089373] md:text-sm"
              >
                VendGenix &copy; 2023. All rights reserved
              </Link>
            </p>
            <div>
              <p className="flex text-xs text-primaryBlack md:text-sm">
                <Link
                  href="/terms-of-use"
                  className="text-xs text-primaryBlack hover:text-[#089373] md:text-sm"
                >
                  Terms of use
                </Link>
                <span className="px-1"> | </span>
                <Link
                  href="/privacy-policy"
                  className="text-xs text-primaryBlack hover:text-[#089373] md:text-sm"
                >
                  Privacy policy
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
