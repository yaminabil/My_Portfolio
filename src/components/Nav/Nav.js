import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <div className={styles.main}>
      <ul className={styles.ul_nav}>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
    </div>
  );
}
