import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

// Composant global qui contient l'ensemble des routes de l'application et le layout général (Header & Footer) défini dans Layout.js
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
