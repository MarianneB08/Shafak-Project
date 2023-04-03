import { BrowserRouter } from "react-router-dom";
import styles from "./globals.module.scss";
import Router from "./Router";
import Layout from "./components/Layout";
import { LanguageProvider } from "./store/languageContext";

// Composant global qui contient l'ensemble des routes de l'application et le layout général (Header & Footer) défini dans Layout.js
function App() {
  return (
    <div className={styles.main}>
      <LanguageProvider>
        <BrowserRouter>
          <Layout>
            <Router />
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
