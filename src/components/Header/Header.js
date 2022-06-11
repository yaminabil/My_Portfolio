import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.name}>
        <h1>BiLaL Younes </h1>
      </div>

      <div className={styles.logo}>
        <h1>
          <div className={styles.logo}>BY</div>
        </h1>
      </div>
    </div>
  );
}
