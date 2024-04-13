import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeatureCards.module.css";

export type FeatureCardsType = {
  integrationEcosystem?: string;
  body?: string;

  
  propWidth?: CSSProperties["width"];
};

const FeatureCards: FunctionComponent<FeatureCardsType> = ({
  integrationEcosystem,
  body,
  propWidth,
}) => {
  const integrationEcosystemStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.featureCards}>
      <div className={styles.icons}>
        <img className={styles.icons1} alt="" src="/icons-2.svg" />
      </div>
      <div className={styles.body}>
        <b
          className={styles.integrationEcosystem}
          style={integrationEcosystemStyle}
        >
          {integrationEcosystem}
        </b>
        <div className={styles.body1}>{body}</div>
      </div>
    </div>
  );
};

export default FeatureCards;
