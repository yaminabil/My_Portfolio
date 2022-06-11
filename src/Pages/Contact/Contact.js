import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <div className={styles.main}>
      <p>
        <h1 className={styles.title}>Email </h1>
        <span className={styles.span}>&#60; &#62;</span>
        &nbsp;bilal94.younes@gmail.com&nbsp;
        <span className={styles.span}>&#60;/&#62;</span>
      </p>
    </div>
  );
}
