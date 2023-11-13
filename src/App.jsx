// import api from "./service/Api.js"; // importando o arquivo com acesso a api Axios

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando css global
import './index.css'

//importar pages
import Home from './pages/Home/Home.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from './pages/Login/Login.jsx';
import PaginaInicial from "./pages/PaginaInicial/PaginaInicial";
import Avaliacao from "./pages/Avaliacao/Avaliacao";
import Portfolio from "./pages/Portfolio/Potfolio.jsx";

//contexto
import { UsuarioProvider } from "./hooks/Usuario.jsx";
import AnaliseCrescimento from "./pages/AnaliseCrescimento/AnaliseCrescimento.jsx";

function App() {
  return (
    //rotas
    <UsuarioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastrar" element={<Cadastro />} />
          <Route path="/pagina-inicial" element={<PaginaInicial />} />
          <Route path="/pagina-inicial/portfolio/avaliacao" element={<Avaliacao />} />
          <Route path="/pagina-inicial/portfolio" element={<Portfolio />} />
          <Route path="/analise-crescimento" element={<AnaliseCrescimento />} />
          {/* <Route path="/meu-perfil"/ > */}
          {/* <Route path="/minhas-interacoes"/> */}
          {/* <Route path="/meu-plano"/> */}

        </Routes>

      </Router>
    </UsuarioProvider>

  );
}

export default App;