import Link from "next/link";
import Image from "next/image";
import errorImage from "@/public/assets/images/404-error-page-templates.png";

export default function NotFound() {
  return (
    <main className="flex items-center justify-center py-24">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={errorImage}
          alt="not found image"
          className="px-4 sm:px-0"
          priority
        />
        <h2 className="2xl font-Roboto pt-6 text-center font-bold md:text-4xl">
          404- Page Not Found
        </h2>
        <div className="my-10 text-center">
          <p className="text-sm text-gray-400 md:text-base">{`We're sorry, the page you requested could not be found`}</p>
          <p className="text-sm text-gray-400 md:text-base">
            Please go back to the home page
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-navyBlue px-6 py-2.5 text-white hover:bg-ui_secondary1"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
