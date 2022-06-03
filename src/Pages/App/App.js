import styles from "./App.module.css";
import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

function App() {
  return (
    <div className={styles.App}>
      {/* main container  */}
      <div className={styles.main_container}>
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;
