import styles from "./Nav.module.css";
export default function Nav(props) {
  const setActive = props.setActive;
  const active = props.active;

  // handle click
  const handleClick = (key) => {
    setActive(key);
  };
  return (
    <div className={styles.main}>
      <ul className={styles.ul_nav}>
        {active == "home" ? (
          <li
            onClick={() => {
              handleClick("home");
            }}
            className={styles.active}
          >
            Home
          </li>
        ) : (
          <li
            onClick={() => {
              handleClick("home");
            }}
          >
            Home
          </li>
        )}

        {active == "projects" ? (
          <li
            onClick={() => {
              handleClick("projects");
            }}
            className={styles.active}
          >
            Projects
          </li>
        ) : (
          <li
            onClick={() => {
              handleClick("projects");
            }}
          >
            Projects
          </li>
        )}

        {active == "contact" ? (
          <li
            onClick={() => {
              handleClick("contact");
            }}
            className={styles.active}
          >
            Contact
          </li>
        ) : (
          <li
            onClick={() => {
              handleClick("contact");
            }}
          >
            Contact
          </li>
        )}
        {active == "resume" ? (
          <li
            onClick={() => {
              handleClick("resume");
            }}
            className={styles.active}
          >
            Resume
          </li>
        ) : (
          <li
            onClick={() => {
              handleClick("resume");
            }}
          >
            Resume
          </li>
        )}
      </ul>
    </div>
  );
}
