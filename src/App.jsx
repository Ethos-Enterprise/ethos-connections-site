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
import EditarPortfolio from "./pages/EditarPortfolio/EditarPortfolio.jsx";
import MeuPortfolio from "./pages/MeuPortfolio/MeuPortfolio.jsx";
import Contrato from "./pages/Contrato/Contrato.jsx";


//contexto
import { UsuarioProvider } from "./hooks/Usuario.jsx";
import AnaliseCrescimento from "./pages/AnaliseCrescimento/AnaliseCrescimento.jsx";
import MinhaConta from "./pages/MinhaConta/MinhaConta.jsx";
import Pagamento from "./pages/Pagamento/Pagamento.jsx";
import Formulario from "./pages/Formulario/Formulario.jsx";

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
          <Route path="/solucoes-esg" element={<PaginaInicial />} />
          <Route path="/solucoes-esg/portfolio/avaliacao" element={<Avaliacao />} />
          <Route path="/solucoes-esg/portfolio" element={<Portfolio />} />
          <Route path="/meu-progresso" element={<AnaliseCrescimento />} />

          <Route path="/minha-conta" element={<MinhaConta/>}/>

          <Route path="/meu-portfolio" element={<MeuPortfolio />} />
          <Route path="/meu-progresso/formulario" element={<Formulario />} />


          <Route path="/meu-portfolio/editar-portfolio" element={<EditarPortfolio />} />


          <Route path="/meu-plano/contrato" element={<Contrato />} />
          <Route path="/meu-plano/contrato/pagamento" element={<Pagamento />} />

        </Routes>

      </Router>
    </UsuarioProvider>

  );
}

export default App;