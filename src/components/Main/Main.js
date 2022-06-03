import styles from "./Main.module.css";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Project";
import Resume from "../../Pages/Resume/Resume";
import Contact from "../../Pages/Contact/Contact";

export default function Main(props) {
  const active = props.active;
  return (
    <div className={styles.main}>
      {active == "home" ? <Home /> : <></>}
      {active == "projects" ? <Projects /> : <></>}
      {active == "resume" ? <Resume /> : <></>}
      {active == "contact" ? <Contact /> : <></>}
    </div>
  );
}
