import styles from "./InfoAnimatedComp.module.scss";

import ddInsightIcon from "../../images/Group 8.png";
import commSuppIcon from "../../images/Group 10.png";
import sAccessIcon from "../../images/Group 11.png";
import affIcon from "../../images/Group 12.png";
import rTimeIcon from "../../images/Group 13.png";
import iHealthIcon from "../../images/Group 15.png";
import psupportIcon from "../../images/Group 9.png";
import pcareIcon from "../../images/Group 7.png";

const animatedCont: string[] = [
  pcareIcon,
  ddInsightIcon,
  psupportIcon,
  commSuppIcon,
  sAccessIcon,
  iHealthIcon,
  affIcon,
  rTimeIcon,
  pcareIcon,
  ddInsightIcon,
  psupportIcon,
  commSuppIcon,
  sAccessIcon,
  iHealthIcon,
  affIcon,
  rTimeIcon,
];

const InfoAnimatedComp = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className={styles.heroAnimatedCont}>
        {animatedCont.map((data, i) => (
          <div className={styles.animatedTexts} key={i}>
            <img src={data} alt="" />
          </div>
        ))}
        <div className={styles.leftBlur}></div>
        <div className={styles.rightBlur}></div>
      </div>
    </div>
  );
};

export default InfoAnimatedComp;
