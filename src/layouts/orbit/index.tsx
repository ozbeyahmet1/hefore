import styles from "./orbit.module.scss";
export interface IAppProps {}

export default function Orbit() {
  return (
    <div className={styles["orbit"]}>
      <div className={styles["orbit__innerCircle"]}></div>
      <div className={styles["orbit__outerCircle--small"]}></div>
      <div className={styles["orbit__outerCircle--large"]}>
        <div className={styles["orbit__innerOrbit--small"]}>
          <div className={styles["orbit__innerOrbitCircles--white"]}></div>
        </div>
        <div className={styles["orbit__innerOrbit--large"]}>
          <div className={styles["orbit__innerOrbitCircles--orange"]}></div>
        </div>
        <div className={styles["orbit__innerOrbit--large"]}>
          <div className={styles["orbit__innerOrbitCircles--pink"]}></div>
        </div>
      </div>
      <div className={styles["orbit__circle--yellow"]}></div>
      <div className={styles["orbit__circle--pink"]}></div>
      <div />
    </div>
  );
}
