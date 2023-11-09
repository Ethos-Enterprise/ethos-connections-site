import React from 'react'

//css
import './PaginaInicial.css'

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Sevico.jsx';
import UltimosServicos from './UltimosServicos/UltimosServicos.jsx';

//coisas do react
import { useNavigate } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';

export const PaginaInicial = () => {

  
  const { usuario } = useUsuario();


  const navigate = useNavigate();

  console.log('DADOS RECEBIDOS');
  console.log(usuario);

  return (
    <div className='pagina-inicial'>

      <HeaderPlataforma
        link1={'/pagina-inicial'}
        titulo1={'Soluções ESG'}

        link2={'dont2'}
        titulo2={'Parceiros Ethos'}

        link3={'dont3'}
        titulo3={'Aplicativo Ethos'}

        razaoSocial={usuario.razaoSocial}

      />

      <div className='conteudo-solucoes'>

      <div className='container-ultimos-serviços'>
        <h4>Últimos serviços visitados</h4>
        <div className='ultimos-servicos'>
           <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} /> 
           <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} /> 
           <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} /> 
           <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} /> 
        </div>

      </div>

        <div className='input-pesquisa'>
          <input type="text" className='pesquisa' placeholder='Buscar soluções' />
          <button className="botao-pesquisar" type="submit"><i className="fa-solid fa-magnifying-glass" style={{color: '#9cb8e8;', fontSize: '1.3rem'}}></i></button>

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