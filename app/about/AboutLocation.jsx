import LocationCard from "./LocationCard";
import { aboutData } from "@/constants";

const AboutLocation = () => {
  return (
    <section className="py-20">
      <div className="py-6 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {aboutData.map((item, index) => {
          return <LocationCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default AboutLocation;
