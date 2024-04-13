import { FunctionComponent } from "react";
import NavBarDesktop from "../components/NavBarDesktop";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FooterS1 from "../components/FooterS1";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.bar}>
        <div className={styles.thisPageIsIncludedInAFreParent}>
          <div className={styles.thisPageIs}>
            This page is included in a free SaaS Website Kit.
          </div>
          <div className={styles.heroContent}>
            <div className={styles.viewTheComplete}>View the complete Kit</div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FooterS1 />
      <FrameComponent />
      <FooterS />
    </div>
  );
};

export default Desktop;
