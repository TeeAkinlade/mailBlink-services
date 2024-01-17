import Link from "next/link";

const SignBtn = () => {
  return (
    <div className="flex flex-col-reverse 2lg:flex-row w-full gap-2">
      <Link
        href="/signup"
        className="w-full rounded-[24px] border border-navyBlue bg-navyBlue px-6 py-2 text-center text-sm font-medium text-white duration-200 hover:border hover:border-navyBlue hover:bg-white hover:text-navyBlue"
      >
        Sign Up
      </Link>
      <Link
        href="/login"
        className="text-navyblue 2lg:border hover:border-none 2lg:border-solid 2lg:border-navyBlue w-full rounded-[24px] hover:bg-transparent px-6 py-2 text-center text-sm font-medium duration-200 hover:bg-navyBlue hover:text-white"
      >
        Login
      </Link>
    </div>
  );
};

export default SignBtn;
