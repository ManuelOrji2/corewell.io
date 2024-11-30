import styles from "./Help.module.scss";
import freqAskedImg from "../../images/freqAsked.png";

import Xicon from "../../images/cancel.png";
import plusIcon from "../../images/plus.png";

import { useState } from "react";

interface accordionDetail {
  header: string;
  description: string;
  id: number;
}

const accordiondata: accordionDetail[] = [
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

const Help = () => {
  const [selected, setSelected] = useState(null);

  function toggle(i: any) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <section className="w-full h-screen pt-16">
      <div className="w-full flex justify-between">
        <div>
          <div>
            <div>
              <img src={freqAskedImg} alt="" />
            </div>
            <h3 className="font-semibold text-[36px]">How can we help?</h3>
          </div>
          <p className="w-[391px]">
            Find answers to common questions about CoreWell and our services.
            Still have questions? Get in touch at {""}
            <a href="#">hello@corewell.io</a>
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {accordiondata.map((data) => (
            <div className=" w-[600px] flex flex-col gap-6 border-t px-5 pt-5 border-solid border-[#ACACA8]">
              <div key={data.id} className="flex items-center justify-between">
                <h3 className="font-medium text-[20px]">{data.header}</h3>
                <img
                  onClick={() => toggle(data.id)}
                  className="cursor-pointer"
                  src={selected === data.id ? Xicon : plusIcon}
                  alt=""
                />
              </div>

              <p
                className={
                  selected === data.id
                    ? ` ${styles.showDetails}`
                    : `${styles.details}`
                }
              >
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Help;
