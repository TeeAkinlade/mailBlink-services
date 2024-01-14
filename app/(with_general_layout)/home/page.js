import Campaign from "./Campaign";
import Subscribe from "./Subscribe";
import Services from "./Services";
import Hero from "./Hero";
import About from "./About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Campaign />
      <Subscribe />
      <Services />
    </main>
  );
}
