import wellnessToolsImg from "../../images/wellnesstools.png";
import joinUsImg from "../../images/join us.png";
import Testimonies from "../../components/Testimonies/Testimonies";
import Footer from "../../components/Footer/Footer";

import featIsocon from "../../images/features isocon.png";
import styles from "./Features.module.scss";

interface featuresdataType {
  img: string;
  header: string;
  description: string;
}

const featuresData: featuresdataType[] = [
  {
    img: `url("/images/Component 20.png")`,
    header: "Symptom checker",
    description:
      "Easily evaluate your symptoms with our intuitive, AI-powered tool. By answering simple questions about your condition, you'll receive personalized insights and recommendations. Whether it’s identifying potential causes or deciding if you need to consult a specialist, our symptom checker helps you take the first step toward better health.",
  },
  {
    img: `url("../../images/Component 21.png")`,
    header: "Personalized Wellness Plans",
    description:
      " Achieve your health goals with tailor-made wellness plans designed just for you. By analyzing your lifestyle, preferences, and health data, we create actionable plans that fit seamlessly into your routine. Whether it’s improving fitness, managing stress, or adopting healthier eating habits, our personalized approach ensures you stay on track and thrive.ur",
  },
  {
    img: `url("../../images/Component 22.png")`,
    header: "Virtual Consultations",
    description:
      "Connect with trusted healthcare specialists from the comfort of your home through our seamless virtual consultation feature. Whether it’s a routine check-up, discussing symptoms, or getting expert advice, our platform ensures timely, secure, and convenient access to the care you need.",
  },
  {
    img: `url("../../images/Component 23.png")`,
    header: "Health Tracker",
    description:
      "Stay on top of your wellness journey with our intuitive Health Tracker. Monitor your vital health metrics, set goals, and visualize your progress over time. Whether it’s steps walked, calories burned, or sleep patterns, our tracker empowers you with real-time insights to make informed decisions about your health.",
  },
  {
    img: `url("../../images/Component 24.png")`,
    header: "Educational Resources",
    description:
      "Empower yourself with knowledge through our extensive library of educational resources. From expert-written articles to video guides and interactive tools, we provide reliable information on a wide range of health and wellness topics. Stay informed, make better decisions, and take charge of your journey to a healthier life.",
  },
  {
    img: `url("../../images/Group 138.png")`,
    header: "Community Support",
    description:
      "Join a thriving community of like-minded individuals who share your health and wellness journey. Whether you’re seeking motivation,sharing tips, or simply connecting with others who understand your goals, our supportive community provides a space to grow, learn, and inspire one another.",
  },
];
const Features = () => {
  return (
    <main
      className={`${styles.features} container m-auto flex flex-col items-center`}
    >
      <section className="px-16 mt-40 pb-12 w-full flex items-center gap-28">
        <div>
          <div>
            <img src={wellnessToolsImg} alt="" />
          </div>
          <h3 className="text-[40px] font-semibold w-[946px h-lv-[54.72px]]">
            Designed to empower your wellness journey
          </h3>
          <p className="w-[440px]">
            From real-time health tracking to virtual consultations, discover
            the tools designed to fhelp you thrive
          </p>
        </div>
        <div>
          <img src={featIsocon} alt="" />
        </div>
      </section>
      {featuresData.map((datum, i) => (
        <section
          className={`${styles.featSec} h-[92vh] w-screen`}
          style={{ background: datum.img }}
          key={i}
        >
          <div className=" w-screen flex justify-between px-24 text-[#fff] sticky top-0  ]">
            <h3 className="text-[36px]">{datum.header}</h3>
            <p className="w-[536px] text-[20px]">{datum.description}</p>
          </div>
        </section>
      ))}
      <section
        className={`${styles.testiJoinSec} flex flex-col items-center relative z-10`}
      >
        <Testimonies />
        <div className="h-[40vh] flex flex-col items-center gap-6">
          <div>
            <img src={joinUsImg} alt="" />
          </div>
          <h3 className="text-[36px]">
            Take the First Step Toward Better Health
          </h3>
          <p className="w-[553px] text-[18px]">
            Your health journey starts here. Explore expert support, trusted
            tools, and personalized care to help you thrive every day
          </p>
          <button className="bg-[#D6FF01] px-[20px] py-[15px]">
            Get started
          </button>
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default Features;
