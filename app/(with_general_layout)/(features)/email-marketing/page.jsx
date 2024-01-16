import NMIS from "../sales-funnel/NMIS";
import { EmailAbout } from "./About";
import { EmailHero } from "./EmailHero";
import { Products } from "./Product";
import Testimonial from "./Testimonial";

const Email_Marketing = () => {
  return (
    <div>
      <EmailHero />
      <EmailAbout />
      <Products />
      <Testimonial />
      <NMIS />
    </div>
  );
};

export default Email_Marketing;
