// import api from "./service/Api.js"; // importando o arquivo com acesso a api Axios

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//importando css global
import './index.css'

//importar pages
import Home from './pages/Home/Home.jsx';
import Cadastro from './pages/Cadastro/Cadastro.jsx';
import Login from './pages/Login/Login.jsx';

function App() {
  return (
    //rotas
    <Router>
      <Routes>
        //colocar aqui todos os caminhos
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/entrar" element={<Login />} />
      </Routes>

    </Router>

  );
}

export default App;