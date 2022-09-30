import React, {useEffect} from 'react';
import { Form } from "./Components/Form";
import styles from "./App.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
      <div className={styles.form__Container} >
        <Form/>
      </div>
  );
}

export default App;
