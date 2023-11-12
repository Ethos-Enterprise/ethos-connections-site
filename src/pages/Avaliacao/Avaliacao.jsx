import React from 'react'

//Importando CSS
import './Avaliacao.css';

//Imagem
import ImagemPerfil from '../../assets/imagens/perfil.jpg'
import ImagemCoracao from '../../assets/favorito (2).png'

//Componentes Footer e Header
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//Componentes Botões
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled'
import ButtonBorda from '../../components/ButtonOutlined/ButtonOutlined'


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
      link1={'/pagina-inicial'}
      titulo1={'Soluções ESG'}

      link2={'dont2'}
      titulo2={'Parceiros Ethos'}

      link3={'dont3'}
      titulo3={'Aplicativo Ethos'}

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
                <Link to={'/pagina-inicial/portfolio'}> 
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

            <div className="box-container-informacoes">
              <button className='botao-preenchido-servico'>Solicitar Contato</button>

              <label className="container-coracao">
                <input defaultChecked type="checkbox" />
                <div className="checkmark">
                  <svg viewBox="0 0 256 256">
                    <rect fill="none" height="256" width="256"></rect>
                    <path d="M224.6,51.9a59.5,59.5,0,0,0-43-19.9,60.5,60.5,0,0,0-44,17.6L128,59.1l-7.5-7.4C97.2,28.3,59.2,26.3,35.9,47.4a59.9,59.9,0,0,0-2.3,87l83.1,83.1a15.9,15.9,0,0,0,22.6,0l81-81C243.7,113.2,245.6,75.2,224.6,51.9Z" strokeWidth="20px" stroke="#01A2C3" fill="none"></path>
                  </svg>
                </div>
              </label>
              <h2 className='subtitulo-container-informacao-favoritar'>Favoritar</h2>
            </div>

          </div>
        </div>


        <div className="container-avaliacao">
          <div className='margin-avaliacao-2'>
            <div className="titulo-caixa-avaliacao-2"> <h2 className='titulo-avaliacao-servico-2'>Avaliações do Serviço </h2><h2 className='titulo-avaliacao-servico-3'>(3)</h2></div>
            <div className="traco"></div>
          </div>
        </div>

      </div>



      <FooterPlataforma></FooterPlataforma>



    </>
  )
}

export default Avaliacao