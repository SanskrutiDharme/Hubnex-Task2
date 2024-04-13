import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormFAQ.module.css";

export type FormFAQType = {
  propMarginTop?: CSSProperties["marginTop"];
};

const FormFAQ: FunctionComponent<FormFAQType> = ({ propMarginTop }) => {
  const formFAQStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className={styles.formfaq} style={formFAQStyle}>
      <b className={styles.howDoesThe}>How does the pricing work for teams</b>
      <div className={styles.frame}>
        <img
          className={styles.vectorIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

export default FormFAQ;
