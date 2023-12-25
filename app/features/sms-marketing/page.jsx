import { SmsHero } from "./SmsHero";
import Section2 from "./Section2";
import Support from "./Support";
import NMIS from "./NMIS";
import BookDemo from "./BookDemo"
import Testimonial from "../email-marketing/Testimonial";
import Community from "./Community";

const Sms_Marketing = () => {
  return (
    <div className="bg-white m-0">
      <SmsHero />
      <Section2 />
      <Support />
      <Testimonial />
      <NMIS />
      <Community />
      <BookDemo />
    </div>
  );
};

export default Sms_Marketing;
