import React from 'react'
import './PaginaInicial.css'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import verificado from '../../assets/verificado.png'
import { useNavigate } from 'react-router-dom';

export const PaginaInicial = () => {

  const navigate = useNavigate();


  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/entrar');
};

  return (
    <div className='pagina-inicial'>
      {/* <HeaderPlataforma
        link1={'dont1'}
        titulo1={'Soluções ESG'}

        link2={'dont2'}
        titulo2={'Parceiros Ethos'}

        link3={'dont3'}
        titulo3={'Aplicativo Ethos'}
      /> */}


      <img src={verificado} alt="" className='imagem-pagina-inicial' />
      <h3>VOCÊ TEM O TOKEN DE ACESSO!!</h3>
      <h3>Foi liberado seu acesso as API'S</h3>

        <a className='api-link' href="">http://localhost:8083/v1.0/empresas</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/servicos</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/avaliacoes</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/portfolios</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/prestadoras</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/empresa-prestadora</a>
        <a className='api-link' href="">http://localhost:8083/v1.0/questionarios</a>


      <button className='botao-inicial' onClick={handleLogout}> Sair</button>

    </div>
  )
}

export default PaginaInicial