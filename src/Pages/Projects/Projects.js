import styles from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={styles.main}>
      <div className={styles.project_container}>
        <div className={styles.narrative_container}>
          <h1 className={styles.projet_title}> A full stack Application </h1>

          <p>
            <span className={styles.span}>&#60; &#62;</span>
            &nbsp; CRUD, MVC, REST, INDUCES and JSX: Mycookbook is a full stack
            application built using mongoose and mongoDB for the backend and JSX
            for the front-end. MyCookbook is a customizable catalog for users to
            create and house recipies, along with a chat feature to connect with
            others! &nbsp;
            <span className={styles.span}>&#60;/&#62;</span>
            <br />
            <a href="https://bilal-mycookbook.herokuapp.com/recipes">
              OPEN APP <code>{">>>"}</code>
            </a>
          </p>
        </div>
        <div className={styles.image1_container}>
          <img src="https://media.git.generalassemb.ly/user/15881/files/c2cf4100-2e61-11eb-913c-d8b656fd9709"></img>
        </div>
      </div>
      <div className={styles.project_container}>
        <div className={styles.narrative_container}>
          <h1 className={styles.projet_title}> A mern stack Application </h1>
          <p>
            <span className={styles.span}>&#60; &#62;</span>
            &nbsp; &nbsp; REACT, NODE js, and Express were implemented for my
            workout App. Latest technology from the REACT framework
            authenticates front end user data by fetching ajax requests from the
            back end and requests will be uniquely handled by the request type.
            <span className={styles.span}>&#60;/&#62;</span>
            <br />
            <a href="https://bilal-workout.herokuapp.com">
              OPEN APP <code>{">>>"}</code>
            </a>
          </p>
        </div>

        <div className={styles.image1_container}>
          <img src="https://i.imgur.com/uoJvBRK.jpg"></img>
        </div>
      </div>
      <div className={styles.project_container}>
        <div className={styles.narrative_container}>
          <h1 className={styles.projet_title}> Game </h1>
          <p>
            <span className={styles.span}>&#60; &#62;</span>
            &nbsp; Trucking Simulator
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>JavaScript</li>
            </ul>{" "}
            &nbsp;
            <span className={styles.span}>&#60;/&#62;</span>
            <br />
            <a href="https://yaminabil.github.io/unit1-final-project/">
              OPEN APP <code>{">>>"}</code>
            </a>
          </p>
        </div>
      </div>
      {/* progress bar */}
    </div>
  );
}
