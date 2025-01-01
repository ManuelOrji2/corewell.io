import styles from "./Features.module.scss";
import yourWellnessIcon from "../../images/wellnesstools.png";
import learnMoreIcon from "../../images/Group 20 (2).png";

import symptomCheckerIcon from "../../images/symptom checker isocon.png";
import heartIcon from "../../images/Personalized wellness isocon.png";
import virtualConsultIcon from "../../images/Virtual consultation isocon.png";
import healthTrackIcon from "../../images/Health tracker isocon.png";
import eduResIcon from "../../images/Educational resources isocon.png";
import commIcon from "../../images/comm support isocon.png";
import FeatCard from "../FeatCard/FeatCard";

export interface CardDetails {
  img: string;
  header: string;
  description: string;
}

const featuresCardDetails: CardDetails[] = [
  {
    img: symptomCheckerIcon,
    header: "Symptom Checker",
    description:
      "Easily identify potential conditions by entering your symptoms and get trusted health information instantly.",
  },
  {
    img: heartIcon,
    header: "Personalized Wellness Plans",
    description:
      "Get tailored health and wellness plans based on your needs, whether for fitness, nutrition, or mental well-being.",
  },
  {
    img: virtualConsultIcon,
    header: "Virtual Consultations",
    description:
      "Connect with health experts through secure, virtual appointments from the comfort of your home. seemless access.",
  },
  {
    img: healthTrackIcon,
    header: "Health Tracker",
    description:
      "Monitor your health metrics in real-time, gaining actionable insights to understand your body better. Track your progress toward fitness and wellness.",
  },
  {
    img: eduResIcon,
    header: "Educational Resources",
    description:
      "Access a comprehensive library of articles, guides, and actionable tips to stay informed on a wide range of health topics.",
  },
  {
    img: commIcon,
    header: "Community Support",
    description:
      "Join a vibrant community of like-minded individuals, all sharing their wellness journeys, exchanging experiences, and supporting each other.",
  },
];

const Features = () => {
  return (
    <section className={styles.features}>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-3">
          <div>
            <img src={yourWellnessIcon} alt="" />
          </div>
          <h1 className="text-4xl">Features</h1>
        </div>
        <img src={learnMoreIcon} alt="" />
      </div>
      <div className="grid grid-cols-3 grid-rows-2 items-center py-36">
        {featuresCardDetails.map((data) => (
          <FeatCard data={data} />
        ))}
      </div>
    </section>
  );
};

export default Features;
