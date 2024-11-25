import styles from "./Hero.module.scss";
import wellnessImg from "../../images/wellnessimg.png";
import vidImg from "../../images/lv_0_20241118131438.gif";
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

const Hero = () => {
  return (
    <section className={styles.heroSec}>
      <div className={styles.hero}>
        <img src={wellnessImg} alt="" />
        <div className={styles.featureOne}>
          <h1>Your path to better</h1>
          <div className={styles.featureTwo}>
            <h1>Health</h1>
            <div className={styles.videoCtn}>
              <img src={vidImg} alt="" />
            </div>
            <h1>begins here</h1>
          </div>
        </div>
        <div className={styles.btnsContainer}>
          <button className={styles.specBtn}>Find a specialist</button>
          <button className={styles.getBtn}>Get started</button>
        </div>
      </div>
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
    </section>
  );
};

export default Hero;
