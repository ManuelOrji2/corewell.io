import Experts from "../../components/Experts/Experts";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Help from "../../components/Help/Help";
import Hero from "../../components/Hero/Hero";
import OurStory from "../../components/OurStory/OurStory";
import ResourceHub from "../../components/ResourceHub/ResourceHub";
import Testimonies from "../../components/Testimonies/Testimonies";

export interface accordionDetail {
  header: string;
  description: string;
  id: number;
}

export const accordionData: accordionDetail[] = [
  {
    header: "What is CoreWell, and how does it work?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 1,
  },
  {
    header: "How do I book an appointment with a specialist?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 2,
  },
  {
    header: "Does CoreWell offer wellness programs or plans?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 3,
  },
  {
    header: "Can I cancel my subscription at any time?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 4,
  },
  {
    header: "How does CoreWell ensure my personal data is secure?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 5,
  },
  {
    header: "Do I need a subscription to access the platform?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 6,
  },
];

const Home = () => {
  return (
    <main className="flex flex-col items-center container m-auto px-[64px]">
      <Hero />
      <ResourceHub />
      <Features />
      <Experts />
      <Testimonies />
      <OurStory />
      <Help accordionData={accordionData} />
      <Footer />
    </main>
  );
};

export default Home;
