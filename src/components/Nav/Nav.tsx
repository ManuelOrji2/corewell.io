import logo from "../../images/Corewell.io.png";
import styles from "./Nav.module.scss";
import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface navLink {
  name: string;
  target: string;
  plus: string;
}

const navLinks: navLink[] = [
  {
    name: "Features",
    target: "/features",
    plus: "+",
  },
  {
    name: "Pricing",
    target: "/pricing",
    plus: "+",
  },
  {
    name: "Appointment",
    target: "/appointment",
    plus: "+",
  },
  {
    name: "Resources",
    target: "/resources",
    plus: "",
  },
];
const Nav = () => {
  const navRef: any = useRef();
  const location = useLocation();

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
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className={styles.navlinks}>
        {navLinks.map((navLink) => (
          <div className="flex items-center gap-6">
            <div className={styles.navlink}>
              <Link
                className={
                  location.pathname === navLink.target
                    ? `flex flex-col line-through`
                    : `${styles.linkTexts} flex flex-col `
                }
                to={navLink.target}
              >
                <span>{navLink.name}</span>
                <span>{navLink.name}</span>
              </Link>
            </div>

            <div>{navLink.plus}</div>
          </div>
        ))}
      </div>
      <button className={styles.button}>Get started</button>
    </nav>
  );
};

export default Nav;
