import Footer from "../../components/Footer/Footer";
import PriceCard from "../../components/PriceCard/PriceCard";

import Help from "../../components/Help/Help";
import InfoAnimatedComp from "../../components/InfoAnimatedComp/InfoAnimatedComp";
import affordableImg from "../../images/affordableImg.png";
import forVisionariesImg from "../../images/for visionaries.png";
import forHealthEnthusiastsImg from "../../images/for health enthusiasts.png";
import forSelfStartersImg from "../../images/for health enthusiasts.png";
import popularTag from "../../images/popular tag.png";

import priceIsocon from "../../images/prcing Isoicon.png";

interface accordionDetail {
  header: string;
  description: string;
  id: number;
}

export const accordionData: accordionDetail[] = [
  {
    header: "Can I cancel my subscription at any time?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 1,
  },
  {
    header: "Are there any hidden fees or charges?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 2,
  },
  {
    header: "Do I need a subscription to access the platform?",
    description:
      "CoreWell is a comprehensive health and wellness platform designed to make managing your well-being easier and more effective. It connects you with expert specialists, trusted resources, and advanced tools to track your health metrics in real time. From virtual consultations and personalized care plans to a supportive community and a library of wellness insights, CoreWell empowers you to take control of your health journey—all in one convenient place.",
    id: 3,
  },
];

export interface CardDetails {
  header: string;
  planType: string;
  price: string;
  description: string;
  benefits: {
    first: string;
    second: string;
    third: string;
  };
  popularTag: string;
}

const priceCardDetails: CardDetails[] = [
  {
    header: forSelfStartersImg,
    planType: "Basic Plan",
    description:
      "Start your wellness journey with essential tools and resources to take the first step toward better health.",
    price: "$0",
    benefits: {
      first: "Access to educational resources",
      second: "Symptom checker",
      third: "Basic health tracking",
    },
    popularTag: "",
  },
  {
    header: forHealthEnthusiastsImg,
    planType: "Standard Plan",
    description:
      "Elevate your care with personalized plans, community support, and more tools to keep you on track",
    price: "$20.99",
    benefits: {
      first: "Includes Basic plan features",
      second: "Personalized wellness plans",
      third: "Community support",
    },
    popularTag: popularTag,
  },
  {
    header: forVisionariesImg,
    planType: "Premium Plan",
    description:
      "Experience the best of CoreWell with unlimited consultations and advanced tracking tools",
    price: "$99.99",
    benefits: {
      first: "Includes Standard plan features",
      second: "Unlimited virtual consultations",
      third: "Priority access to specialists",
    },
    popularTag: "",
  },
];

const Pricing = () => {
  return (
    <main className="flex flex-col items-center container m-auto px-[64px]">
      <section className="w-full mt-40">
        <div className="flex items-center gap-32">
          <div>
            <header className="flex flex-col">
              <div>
                <img src={affordableImg} alt="" />
              </div>
              <h1 className="text-[48px]">Pricing</h1>
            </header>
            <p className="w-[624px] text-[18px] font-[400] text-[#5C5C5C]">
              Choose the plan that works best for you and start your journey to
              better health today
            </p>
          </div>
          <img src={priceIsocon} alt="" />
        </div>
        <InfoAnimatedComp />
      </section>
      <section className="flex items-center justify-between gap-1 ">
        {priceCardDetails.map((data) => (
          <PriceCard data={data} />
        ))}
      </section>
      <Help accordionData={accordionData} />
      <Footer />
    </main>
  );
};

export default Pricing;

// font-family: Aeonik TRIAL;
// font-size: 18px;
// font-weight: 400;
// line-height: 20.52px;
// text-align: left;
// text-underline-position: from-font;
// text-decoration-skip-ink: none;
