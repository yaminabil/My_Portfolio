import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1>Hi, I'm Bilal </h1>
        <p>
          <span className={styles.span}>&#60; &#62;</span> &nbsp; A junior Web
          Developer with a Bachelor's Degree in Computer Science, coding
          bootcamp graduate, and self taught programmer &nbsp;{" "}
          <span className={styles.span}>&#60;/&#62;</span>
        </p>
        <br />
      </div>
      <div className={styles.gif_home}></div>
    </div>
  );
}
