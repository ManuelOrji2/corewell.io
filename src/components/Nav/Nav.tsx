import logo from "../../images/Corewell.io.png";
import styles from "./Nav.module.scss";
import { useRef, useEffect } from "react";

const Nav = () => {
  const navRef: any = useRef();

  useEffect(() => {
    window.onscroll = () => {
      let top = window.scrollY;
      if (top >= 30) {
        navRef.current.classList.add(styles.active);
      } else {
        navRef.current.classList.remove(styles.active);
      }
    };
  }, []);

  return (
    <nav ref={navRef} className={`${styles.nav}`}>
      <div>
        <img src={logo} alt="" />
      </div>
      <div className={styles.navlinks}>
        <div>Features</div>
        <div>+</div>
        <div>Pricing</div>
        <div>+</div>
        <div>Appointment</div>
        <div>+</div>
        <div>Resources</div>
      </div>
      <button className={styles.button}>Get started</button>
    </nav>
  );
};

export default Nav;
