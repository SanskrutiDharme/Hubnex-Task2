import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroChild} />
        <div className={styles.coreSafariBigSurToolbar} />
        <div className={styles.heroContent}>
          <div className={styles.tag}>
            <div className={styles.featureCardContainer}>
              <div className={styles.version20Is}>Version 2.0 is here</div>
              <div className={styles.readMoreParent}>
                <a className={styles.readMore}>Read more</a>
                <img className={styles.icons} alt="" src="/icons-1.svg" />
              </div>
            </div>
          </div>
          <h1 className={styles.h1}>
            <p className={styles.oneTask}>One Task</p>
            <p className={styles.atATime}>at a Time</p>
          </h1>
          <h3 className={styles.body}>
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <div className={styles.buttons}>
            <a className={styles.getForFree}>Get for free</a>
          </div>
          <div className={styles.getFreeButton}>
            <div className={styles.wrapperCursor1}>
              <img
                className={styles.cursor1Icon}
                loading="lazy"
                alt=""
                src="/cursor-1@2x.png"
              />
            </div>
            <img className={styles.cursor2Icon} alt="" src="/cursor-2@2x.png" />
          </div>
          <div className={styles.helixShape}>
            <div className={styles.wrapperMessage2}>
              <img
                className={styles.message2Icon}
                alt=""
                src="/message-2@2x.png"
              />
            </div>
            <img
              className={styles.message1Icon}
              loading="lazy"
              alt=""
              src="/message-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
