import { FunctionComponent, useState } from "react";
import styles from "./NavBarDesktop.module.css";

const NavBarDesktop: FunctionComponent = () => {

  const[showNav, setshowNav]=useState(false);

  const toggleNav=()=>{
    setshowNav(!showNav);
  };

  return (
    <header className={styles.navBarDesktop}>
      <div className={styles.logo}>
        <div className={styles.logodefault}>
          <div className={styles.logodefaultChild} />
          <img
            className={styles.logosaasIcon}
            loading="lazy"
            alt=""
            src="/logosaas@2x.png"
          />
        </div>
        <div className={styles.madeBy}>made by</div>
        <img
          className={styles.blackHorizontal1Icon}
          loading="lazy"
          alt=""
          src="/blackhorizontal-1.svg"
        />
      </div>
      <div className={`${showNav ? styles["show-nav"]  : ""}`}>
        <div className={styles.navhamburger}
        onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

      <ul className={styles.stack}>
        <li className={styles.about}>About</li>
        <li className={styles.features}>Features</li>
        <li className={styles.customers}>Customers</li>
        <li className={styles.updates}>Updates</li>
        <li className={styles.help}>Help</li>
        <li className={styles.buttons}>
          <a className={styles.getForFree}>Get for free</a>
        </li>
      </ul>
      </div>
      
    </header>
  );
};

export default NavBarDesktop;
