import { BrowserRouter } from "react-router-dom";
import styles from "./globals.module.scss";
import Router from "./Router";
import Layout from "./Components/Layout";

// Composant global qui contient l'ensemble des routes de l'application et le layout général (Header & Footer) défini dans Layout.js
function App() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
