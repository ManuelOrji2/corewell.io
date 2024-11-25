// import { useEffect, useRef} from "react";
import Experts from "./components/Experts/Experts";
import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import OurStory from "./components/OurStory/OurStory";
import ResourceHub from "./components/ResourceHub/ResourceHub";
import Testimonies from "./components/Testimonies/Testimonies";

function App() {
  return (
    <main className="flex flex-col items-center container m-auto px-[75px] ">
      <Nav />
      <Hero />
      <ResourceHub />
      <Features />
      <Experts />
      <Testimonies />
      <OurStory />
    </main>
  );
}

export default App;
