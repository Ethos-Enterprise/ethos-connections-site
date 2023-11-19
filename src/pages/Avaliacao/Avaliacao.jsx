import React from 'react'

//Importando CSS
import './Avaliacao.css';

//Imagem
import ImagemPerfil from '../../assets/imagens/perfil.jpg'


//Componentes Footer e Header
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//Componentes Botões
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled'
import ButtonBorda from '../../components/ButtonOutlined/ButtonOutlined'

//Componente Coração
import HeartCheckbox from './favoritar/Heart.jsx';
import AvaliacaoServicoComponent from './Componente/Avaliacoes.jsx';


//coisas do react
import { useNavigate, Link } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';

//RAFCE
const Avaliacao = () => {
  const { usuario } = useUsuario();

  return (

    <><HeaderPlataforma
      plano={'Free'}

      razaoSocial={usuario.razaoSocial}
    ></HeaderPlataforma>

      <div className="conteudo">

        {/* COPIAR E COLAR A DIV beadcrumb NAS PAGINAS E IR ADICIONANDO O CAMINHO CONFORME ESTE, O CSS DO INDEX ESTA DEIXANDO ELE NO FORMATO BONITINHO :) */}
        <div className='beadcrumb'>
          <Link to='/pagina-inicial' className='link-beadcrumb'><span>Soluções ESG {'>'}</span>  </Link>
          <Link to='/pagina-inicial/portfolio' className='link-beadcrumb'><span>Portfólio {'>'}</span>  </Link>
          <Link to='/pagina-inicial/portfolio/avaliacao' className='link-beadcrumb-atual'><span> Avaliações do Serviço</span>  </Link>
        </div>

        <div className="conteudo-row">

          <div className="container-avaliacao-servico">
            <div className='margin-avaliacao-foto'>
              <img src={ImagemPerfil} alt="Imagem do perfil da empresa" className='imagem-perfil' />
              <div className="container-foto-bloco">
                <h1 className="titulo-avaliacao-servico">Deloitte</h1>
                <h1 className='subtitulo-avaliacao-servico'>Certificada desde 2018</h1>

                {/* QUANDO VOCE QUISER LINKaR UMA OUTRA PAG, VC ADD O LINK LA NOS IMPORT E AQUI COLOCAR O CAMINHO (olhar o app.jsx) */}
                <Link to={'/solucoes-esg/portfolio'}>
                  <ButtonBorda acao={'Ver Portfólio'}></ButtonBorda>
                </Link>

              </div>
            </div>
          </div>

          <div className="container-informacoes">
            <div className='margin-avaliacao'>
              <h1 className='titulo-container-informacao'>Treinamento de Responsabilidade Social Corporativa (RSC)</h1>
              <h2 className='subtitulo-container-informacao'>Deloitte</h2>
              <h2 className='texto-container-informacao'>O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC.</h2>
              <h2 className='texto-container-informacao'> <b>Valor médio:</b> R$ 2000.00</h2>
              <div className="traco"></div>
            </div>

            <div class='pilar-servico'>

              <p class='pilar-esg'>Environmental</p>
              {/* <p class='pilar-esg-nao-contido'>E</p> */}

              <p class='pilar-esg'>Social</p>
              {/* <p class='pilar-esg-nao-contido'>S</p> */}

              {/* <p class='pilar-esg'>Governamental</p> */}
              <p class='pilar-esg-nao-contido'>G</p>

            </div>

            <div className="box-container-informacoes">
              <button className='botao-preenchido-servico'>Solicitar Contato</button>
              <HeartCheckbox></HeartCheckbox>

              <h2 className='subtitulo-container-informacao-favoritar'>Favoritar</h2>
            </div>

          </div>
        </div>


        <div className="container-avaliacao">

          <div className='margin-avaliacao-2'>
            <div className="titulo-caixa-avaliacao-2"> <h2 className='titulo-avaliacao-servico-2'>Avaliações do Serviço </h2><h2 className='titulo-avaliacao-servico-3'>(3)</h2></div>
            <AvaliacaoServicoComponent></AvaliacaoServicoComponent>

            <AvaliacaoServicoComponent></AvaliacaoServicoComponent>

            <AvaliacaoServicoComponent></AvaliacaoServicoComponent>
          </div>


        </div>




      </div>



      <FooterPlataforma></FooterPlataforma>



    </>
  )
}

export default Avaliacao