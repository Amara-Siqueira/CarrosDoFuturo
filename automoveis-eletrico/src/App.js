import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Fabricante from "./components/pages/Fabricante";
import Contato from "./components/pages/Contato";
import Creditos from "./components/pages/Creditos";
import Sobre from "./components/pages/Sobre";
function App() {
  return (
    <div className="App">
     

      <Router>
        <nav className="NavBar">
        <h1 className="title">Automoveis do futuro</h1>
          <Link to="/" className="NavBarL">
            Inicio
          </Link>
          <Link to="/Fabricante" className="NavBarL">
            Fabricante
          </Link>
          <Link to="/Contato" className="NavBarL">
            Contato
          </Link>
          <Link to="/Creditos" className="NavBarL">
            Creditos
          </Link>
          <Link to="/Sobre" className="NavBarL">
            Sobre
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Fabricante" element={<Fabricante />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Creditos" element={<Creditos />} />
          <Route path="/Sobre" element={<Sobre />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
