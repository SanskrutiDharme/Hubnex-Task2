import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.socialLinksWrapper}>
      <div className={styles.socialLinks}>
        <div className={styles.trustedByTheWorldsMostInWrapper}>
          <div className={styles.trustedByThe}>
            Trusted by the world’s most innovative teams
          </div>
        </div>
        <div className={styles.coreTrafficLightsBigSur}>
          <img
            className={styles.acme1Icon}
            loading="lazy"
            alt=""
            src="/acme-1@2x.png"
          />
          <img
            className={styles.quantum1Icon}
            loading="lazy"
            alt=""
            src="/quantum-1@2x.png"
          />
          <div className={styles.echo1Wrapper}>
            <img
              className={styles.echo1Icon}
              loading="lazy"
              alt=""
              src="/echo-1@2x.png"
            />
          </div>
          <div className={styles.celestia1Wrapper}>
            <img
              className={styles.celestia1Icon}
              loading="lazy"
              alt=""
              src="/celestia-1@2x.png"
            />
          </div>
          <div className={styles.graphicShape}>
            <img
              className={styles.pulse1Icon}
              loading="lazy"
              alt=""
              src="/pulse-1@2x.png"
            />
          </div>
          <div className={styles.socialMediaLogos}>
            <img
              className={styles.apex1Icon}
              loading="lazy"
              alt=""
              src="/apex-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
