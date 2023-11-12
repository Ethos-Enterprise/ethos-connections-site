import React from 'react'

//api
import api from '../../service/api.js'

//css
import './PaginaInicial.css'

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Sevico.jsx';
import UltimosServicos from './UltimosServicos/UltimosServicos.jsx';

//coisas do react
import { useNavigate, Link } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';

export const PaginaInicial = () => {

  const { usuario } = useUsuario();

  const navigate = useNavigate();

  // useEffect(() => {
  //   api.post('v1.0/servicos', {
  //     "id": "11",
  //     "nomeServico": "Exemplo",
  //     "descricao": "Este é um serviço de Exemplo",
  //     "valor": 100
  //   }, {
  //     headers: {
  //       Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //     }
  //   })
  //   .then((response) =>
  //     console.log(response)
  //   )
  //   .catch((error) =>
  //     console.log('erro ao cadastrar cadastrar serviço: ' + error)
  //   )
  //   .finally(
  //     console.log('tudo executado')
  //   )
  // }
  // )

  useEffect(() => {
    api.get("v1.0/servicos", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      }
    })
      .then((response) =>
        console.log('OK Serviços disponiveis:' + response.data)
      )
      .catch((error) =>
        console.log('erro ao pegar todos os serviços. ERRO: ' + error)
      )
      .finally(
        console.log('Sai da requisição VerTodosServicos')
      );
  }

  )

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

      <div className='conteudo'>

        <div className='beadcrumb'>
        <Link to='/pagina-inicial' className='link-beadcrumb-atual'><span>Soluções ESG </span>  </Link>
        </div>
        
        <div className='container-ultimos-serviços'>
          <h4 className='titulo-ultimos-servicos'>Últimos serviços visitados</h4>
          <div className='ultimos-servicos'>
            <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
          </div>

        </div>

        <div className='input-pesquisa'>
          <input type="text" className='pesquisa' placeholder='Buscar soluções' />
          <button className="botao-pesquisar" type="submit"><i className="fa-solid fa-magnifying-glass icone-botao-pesquisar" ></i></button>
        </div>

        <div className='filtros-pesquisa'>
          <p className='titulo-filtro'>Filtros</p>
          <div className='filtros'>

            <select name="areas" id="" className='select-filtro'>
              <option value="">Selecione a área ESG</option>
              <option value="">Ambiental</option>
              <option value="">Social</option>
              <option value="">Governamental</option>
            </select>

            <div className='input-filtro'>
              <input className='filtro' type="text" placeholder='Preço médio (máximo)' />
              <button className='botao-filtrar'>Filtrar</button>
            </div>

            <div className='input-filtro'>
              <input className='filtro' type="text" placeholder='Localização(Digite seu CEP)' />
              <button className='botao-filtrar'>Filtrar</button>
            </div>

          </div>
        </div>

        <div className='servicos-pesquisados'>
          <Servico 
          key={1}
          fotoPerfil={true}
          nomeServico={'Treinamento de Responsabilidade Social Corporativa (RSC)'} 
          nomeEmpresa={'Deloitte'} 
          descricao={'O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC'} 
          valorMedio={'2.000'} 
          areaESG={'Environmental, Social'}
          />
        </div>

      </div>

      <FooterPlataforma />
    </div>
  )
}

export default PaginaInicial