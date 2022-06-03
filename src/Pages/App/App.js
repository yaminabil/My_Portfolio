import styles from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");
  return (
    <div className={styles.App}>
      {/* main container  */}
      <div className={styles.main_container}>
        <Header />
        <Nav setActive={setActive} active={active} />
        <Main active={active} />
      </div>
    </div>
  );
}

export default App;
