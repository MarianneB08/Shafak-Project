import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import styles from "./globals.module.scss";

// Composant global qui contient l'ensemble des routes de l'application et le layout général (Header & Footer) défini dans Layout.js
function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
