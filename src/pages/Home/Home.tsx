import Experts from "../../components/Experts/Experts";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Help from "../../components/Help/Help";
import Hero from "../../components/Hero/Hero";
import OurStory from "../../components/OurStory/OurStory";
import ResourceHub from "../../components/ResourceHub/ResourceHub";
import Testimonies from "../../components/Testimonies/Testimonies";

const Home = () => {
  return (
    <main className="flex flex-col items-center container m-auto px-[75px]  ">
      <Hero />
      <ResourceHub />
      <Features />
      <Experts />
      <Testimonies />
      <OurStory />
      <Help />
      <Footer />
    </main>
  );
};

export default Home;
