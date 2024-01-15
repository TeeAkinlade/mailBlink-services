"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import Spinner from "../../../components/Spinner";
import OauthComponent from "../OauthComponent";

const Login = () => {
  // Access routing functionality
  const router = useRouter();
  // Initialize Supabase client
  const supabase = createClientComponentClient();

  // State to manage form inputs and their validation statuses
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Function to handle input changes
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};

    // Validate username
    if (!email.trim()) {
      errors.email = "email is required";
    }

    // Validate password
    if (!password.trim()) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form and check if it's valid
    const isValid = validateForm();

    if (!isValid) {
      return; // Don't proceed if validation fails
    }

    // Set loading state and start login process with supabase
    setLoading(true);
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      // Update loading state and handle response
      setLoading(false);

      if (error) {
        alert(error.message);
      } else if (user.length !== 0) {
        router.push("/dashboard/Home");
      }
    } catch (error) {
      // Handle unexpected errors
      alert("catch error: " + error.message);
    }
  };

  return (
    <div>
      <div className="lg:flex">
        <div
          style={{
            background: "rgb(243,255,250)",
            background:
              "linear-gradient(90deg, rgba(243,255,250,1) 0%, rgba(210,249,232,1) 35%, rgba(204,250,230,1) 100%)",
          }}
          className="hidden h-[100vh] lg:block lg:w-[720px]"
        >
          <Link href={"/"} className="font-Poppins ps-[1rem] text-[35px] font-[700] leading-[64px] text-[#17181A]">
            SalesBlink
          </Link>
          <div className="pt-[190px] xs:ps-[10px] lg:w-[720px] lg:pr-[109px] lg:ps-[190px]">
            <h3 className="font-Poppins text-[48px] font-[700] leading-[64px] text-[#17181A]">
              Welcome back <br /> to SalesBlink
            </h3>
            <Image
              src="/assets/images/Group 2936.svg"
              className="ms-[6rem] flex justify-end"
              width="172"
              height="23"
            />
          </div>
        </div>

      {/* loading animation */}
        {loading && (
          <div className="h-screen w-full flex items-center justify-center">
            <Spinner />
          </div>
        )}
        {!loading && (
          <div className="flex h-screen w-full flex-col items-center justify-center bg-[#fff]">
            <h3 className="font-Poppins text-center text-[24px] font-[600] leading-[32px] text-[#17181A]">
              Login
            </h3>
            <form className="mt-[16px] w-4/5 lg:w-3/5" onSubmit={handleSubmit}>
              <label className="font-Poppins mt-[22px] text-[12px] font-[500] text-[#515458]">
                user name
              </label>
              <input
                type="text"
                placeholder="enter user name"
                className="font-Poppins mt-[-1rem] rounded-[8px] border-[1px] border-solid border-[#B7BFC7] bg-[#fff] text-[16px] font-[400] leading-[24px] text-[#575757] outline-none"
                style={{ padding: "12px 0px 12px 12px", height: "48px" }}
                value={email}
                onChange={handleEmailChange}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
              {/* Display error message */}
              <label className="font-Poppins text-[12px] font-[500] text-[#515458]">
                password
              </label>
              <input
                type="password"
                placeholder="enter password"
                className="font-Poppins mt-[-1rem] rounded-[8px] border-[1px] border-solid border-[#B7BFC7] bg-[#fff] text-[16px] font-[400] text-[#575757] outline-none"
                style={{ padding: "12px 0px 12px 12px", height: "48px" }}
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
              {/* Display error message */}
              <p className="mt-[5px]">
                <Link
                  href="/reset"
                  className="font-Poppins text-[14px] font-[600] leading-[18px] text-navyBlue"
                >
                  Forgot password?
                </Link>
              </p>

              {/* Normal login */}
              <button
                type="submit"
                className="w-full rounded-[24px] border border-navyBlue bg-navyBlue px-6 py-2 text-center text-sm font-medium text-white duration-200 hover:border hover:border-navyBlue hover:bg-white hover:text-navyBlue"
              >
                Sign In
              </button>

              {/* Google login */}
              <OauthComponent />

              <p className="font-Poppins text-left text-[14px] font-[400] leading-[18px] text-[#575757]">
                {`Don't have an account? `}
                <Link href="/signup" className="font-[600] text-navyBlue">
                  Create an account
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default Login;
