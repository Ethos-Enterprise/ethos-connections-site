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
import { useNavigate, Link, useLocation } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';

//RAFCE
const Avaliacao = () => {
  const { usuario } = useUsuario();

  const location = useLocation();
  const dadosServico = location.state ? location.state.dadosServico : null;

  console.log(dadosServico);
  return (

    <><HeaderPlataforma
      plano={'Free'}

      razaoSocial={usuario.razaoSocial}
    ></HeaderPlataforma>

      <div className="conteudo">

        {/* COPIAR E COLAR A DIV beadcrumb NAS PAGINAS E IR ADICIONANDO O CAMINHO CONFORME ESTE, O CSS DO INDEX ESTA DEIXANDO ELE NO FORMATO BONITINHO :) */}
        <div className='beadcrumb'>
          <Link to='/solucoes-esg' className='link-beadcrumb'><span>Soluções ESG {'>'}</span>  </Link>
          <Link to='/solucoes-esg/portfolio' className='link-beadcrumb'><span>Portfólio {'>'}</span>  </Link>
          <Link to='/solucoes-esg/portfolio/avaliacao' className='link-beadcrumb-atual'><span> Avaliações do Serviço</span>  </Link>
        </div>

        <div className="conteudo-row">

          <div className="container-avaliacao-servico">
            <div className='margin-avaliacao-foto'>
              <img src={ImagemPerfil} alt="Imagem do perfil da empresa" className='imagem-perfil' />
              <div className="container-foto-bloco">
                <h1 className="titulo-avaliacao-servico">{dadosServico.nomeEmpresa}</h1>
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
              <h1 className='titulo-container-informacao'>{dadosServico.nomeServico}</h1>
              <h2 className='subtitulo-container-informacao'>{dadosServico.nomeEmpresa}</h2>
              <h2 className='texto-container-informacao'>{dadosServico.descricao}</h2>
              <h2 className='texto-container-valor'> <b className='tag-valor-medio'>Valor médio:</b> R$ {dadosServico.valorMedio}</h2>
              <div className="traco"></div>
            </div>

            <div className='pilar-servico'>

              {dadosServico.areaESG == 'environmental' ? (
                <p className='pilar-esg'>Environmental</p>
              ) : (
                <p className='pilar-esg-nao-contido'>E</p>
              )}

              {dadosServico.areaESG == 'social' ? (
                <p className='pilar-esg'>Social</p>
              ) : (
                <p className='pilar-esg-nao-contido'>S</p>
              )}

              {dadosServico.areaESG == 'governamental' ? (
                <p className='pilar-esg'>Governamental</p>
              ) : (
                <p className='pilar-esg-nao-contido'>G</p>
              )}


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