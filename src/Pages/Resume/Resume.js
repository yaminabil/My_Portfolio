import styles from "./Resume.module.css";
export default function Resume() {
  return (
    <div className={styles.main}>
      <div className={styles.left_side}>
        <h1 className={styles.title}> Skills </h1>
        <p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React.JS</li>
            <li>Node.JS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>JQuery</li>
            <li>Mongoose</li>
            <li>Bootstrap</li>
            <li>Git/GitHub</li>
          </ul>
        </p>
        <h1 className={styles.title}>Other Skills </h1>
        <p>
          <ul>
            <li>C</li>
            <li>Java</li>
            <li>SQL</li>
            <li>Assembly Language</li>
          </ul>
        </p>
        <h1 className={styles.title}>Hobbies</h1>
        <p>
          <ul>
            <li>Travel</li>
            <li>Soccer</li>
          </ul>
        </p>
        <h1 className={styles.title}>Languages</h1>
        <p>
          <ul>
            <li>English</li>
            <li>Arabic</li>
            <li>French</li>
          </ul>
        </p>
      </div>
      <div className={styles.right_side}>
        <h1 className={styles.title}>Career Objective</h1>
        <p>
          <span className={styles.span}>&#60; &#62;</span>
          &nbsp; Industrious General Assembly coding bootcamp graduate with a
          Computer Science Degree seeking Software Engineering opportunities
          with exposure to Full Stack Development&nbsp;
          <span className={styles.span}>&#60;/ &#62;</span>
        </p>
        <h1 className={styles.title}>Education</h1>
        <p>
          <span className={styles.span}>&#60; &#62;</span>
          &nbsp;University Of Science And Technology Houari Boumediene (USTHB)
          Bachelors in Computer Science & Mathematics, 2012 - 2015 General
          Assembly 24-week Software Engineering Immersive Bootcamp,
          2021-2022&nbsp;
          <span className={styles.span}>&#60;/ &#62;</span>
        </p>
      </div>
    </div>
  );
}
