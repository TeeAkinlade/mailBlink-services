import { FunnelHero } from "./FunnelHero";
import Section2 from "./Section2";
import Support from "./Support";
import NMIS from "./NMIS";
import BookDemo from "./BookDemo";
import Testimonial from "../email-marketing/Testimonial";
import Community from "./Community";

const SalesFunnel = () => {
  return (
    <div className="bg-white m-0">
      <FunnelHero />
      <Section2 />
      <Support />
      <Testimonial />
      <NMIS />
      <Community />
      <BookDemo />
    </div>
  );
};

export default SalesFunnel;
