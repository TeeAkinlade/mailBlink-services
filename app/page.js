import Campaign from "./home/Campaign";
import Subscribe from "./home/Subscribe";
import Services from "./home/Services";
import Nav from "./home/nav/Nav";
import Hero from "./home/Hero";
import About from "./home/About";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Campaign />
      <Subscribe />
      <Services />
    </main>
  );
}
