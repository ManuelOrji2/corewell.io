import styles from "./Hero.module.scss";
import wellnessImg from "../../images/health & wellness.png";
import vidImg from "../../images/lv_0_20241118131438.gif";
import InfoAnimatedComp from "../InfoAnimatedComp/InfoAnimatedComp";

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
      <InfoAnimatedComp />
    </section>
  );
};

export default Hero;
