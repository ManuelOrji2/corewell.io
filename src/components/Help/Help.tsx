import styles from "./Help.module.scss";
import freqAskedImg from "../../images/freqAsked.png";

import Xicon from "../../images/cancel.png";
import plusIcon from "../../images/plus.png";

import { accordionDetail } from "../../pages/Home/Home";

import { useState, FC } from "react";

interface HelpProps {
  accordionData: accordionDetail[];
}

const Help: FC<HelpProps> = ({ accordionData }) => {
  const [selected, setSelected] = useState(null);

  function toggle(i: any) {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }

  return (
    <section className="w-full  pt-16 pb-24">
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
          {accordionData.map((data) => (
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
