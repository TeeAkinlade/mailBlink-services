import { FiFeather } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { SlEye } from "react-icons/sl";

const Subscribe = () => {
  return (
    <div className="bg-navyBlue">
      <div className="max-width padding-x">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center px-8 py-24 md:gap-10 lg:gap-40">
          <div className="text-white">
            <p className="uppercase text-sm">Why Choose Us</p>
            <h3 className="font-Roboto text-3xl md:text-5xl font-semibold py-8 leading-tight ">
              Partiality on or continue in the particular principles
            </h3>
            <p className="text-sm leading-[2]">
              End-to-end payments and financial management in a single solution.
              Meet the right platform to help realize. The text will be
              populated with the right information later on.
            </p>
          </div>
          <ul>
            <li className="flex items-center text-white text-sm gap-4 font-light">
              <span className="bg-[#3CBA79] p-[10px] rounded-[50%] inline-block">
                {" "}
                <FiFeather className="text-ui_secondary" />
              </span>
              <p>
                We connect our customers with the best. The text will be
                populated with the right information later on.
              </p>
            </li>
            <li className="flex items-center text-sm gap-4 text-white padding-y">
              <span className="bg-[#3CBA79] p-[10px] rounded-[50%] inline-block">
                <SlEye className="text-ui_secondary" />
              </span>
              <p>
                Advisor success customer launch party. The text will be
                populated with the right information later on.
              </p>
            </li>
            <li className="flex items-center text-sm gap-4 text-white">
              <span className="bg-[#3CBA79] p-[10px] rounded-[50%] inline-block">
                <FiSun className="text-ui_secondary" />
              </span>
              <p>
                Business-to-consumer long tail. The text will be populated with
                the right information later on.
              </p>
            </li>
            <li className="flex items-center text-sm gap-4 text-white padding-y">
              <span className="bg-[#3CBA79] p-[10px] rounded-[50%] inline-block">
                <FiSun className="text-ui_secondary" />
              </span>
              <p>
                We connect our customers with the best. The text will be
                populated with the right information later on.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
