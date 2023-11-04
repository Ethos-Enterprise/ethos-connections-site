import React from 'react'

//css
import './PaginaInicial.css'

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Sevico.jsx';

import { useNavigate } from 'react-router-dom';

export const PaginaInicial = ({ usuario }) => {

  const navigate = useNavigate();


  return (
    <div className='pagina-inicial'>

      <HeaderPlataforma
        link1={'/pagina-inicial'}
        titulo1={'Soluções ESG'}

        link2={'dont2'}
        titulo2={'Parceiros Ethos'}

        link3={'dont3'}
        titulo3={'Aplicativo Ethos'}

        razaoSocial={usuario && usuario.razaoSocial}
      />

   

      <div className='conteudo-solucoes'>

      <div className='container-ultimos-serviços'>
        <h4>Últimos serviços visitados</h4>
      </div>

        <div className='input-pesquisa'>
          <input type="text" className='pesquisa' placeholder='Buscar soluções' />
          <button className="botao-pesquisar" type="submit"><i className="fa-solid fa-magnifying-glass" style={{color: "#9cb8e8;", fontSize: '1.3rem'}}></i></button>

        </div>

        <div className='filtros-pesquisa'>
          <p className='titulo-filtro'>Filtros</p>
          <div className='filtros'>

          </div>
        </div>

        <div className='servicos-pesquisados'>
          <Servico />

          <Servico />
          <Servico />
          <Servico />

        </div>

      </div>

      <FooterPlataforma />
    </div>
  )
}

export default PaginaInicial