import React from 'react'
import './Avaliacao.css';
import ImagemPerfil from '../../assets/imagens/perfil.jpg'
import SolicitarContato from '../../assets/imagens/solicitar contato.jpg'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'
import ButtonBorda from '../../components/ButtonOutlined/ButtonOutlined'
import HeartCheckbox from './favoritar/Heart.jsx';
import AvaliacaoServicoComponent from './Componente/Avaliacoes.jsx';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect , useState} from 'react';

import api from '../../service/api.js';

const Avaliacao = () => {
  const { usuario } = useUsuario();

  const location = useLocation();
  const dadosServico = location.state ? location.state.dadosServico : null;

  const navigate = useNavigate();

  const verPortfolio = () => {

    const dadosServicoAvaliacao = {
      id: dadosServico.id,
      nomeServico: dadosServico.nomeServico,
      nomeEmpresa: dadosServico.nomeEmpresa,
      descricao: dadosServico.descricao,
      valorMedio: dadosServico.valorMedio,
      areaESG: dadosServico.areaESG,
      fkPrestadoraServico: dadosServico.fkPrestadoraServico
    };
    navigate('/solucoes-esg/portfolio', { state: { dadosServicoAvaliacao } });
  }


  const toggleModal = () => {
    let modal = document.querySelector('.modal');
    let modalJanela = document.querySelector('.janela-modal');

    modalJanela.style.display = modalJanela.style.display === 'none' || modalJanela.style.display === '' ? 'block' : 'none';

    modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
  };

  const closeModal = () => {
    let modal = document.querySelector('.modal');
    let modalJanela = document.querySelector('.janela-modal');

    modal.style.display = 'none';
    modalJanela.style.display = 'none';
  };

  const toggleModal2 = () => {

    console.log('ENVIEIII');
    let modal2 = document.querySelector('.modal2');

    api.post('/v1.0/interacoes', {
      status: "PENDENTE",
      fkServico: dadosServico.id,
      fkEmpresa: usuario.id
    })
      .then((response) => {
        console.log(response.data);
        setContatoSolicitado(true);
        modal2.style.display = 'block';

      })
      .catch((error) => {
        console.log(error);
      })

  };

  const verInteracao = () => {
    navigate('/minhas-interacoes#contatos')
  }

  const closeModal2 = () => {
    closeModal();
    let modal2 = document.querySelector('.modal2');

    modal2.style.display = 'none';

  };

  // useEffect(() => {
  //   console.log(dadosServico.id);

  //   api.get(`/v1.0/avaliacoes`, {
  //     headers: {
  //       Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //     }
  //   })
  //   .then((response) => {
  //     console.log('deu bom');
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     console.log('deu ruim');
  //     console.log(error);
  //   })

  // },[])

  const [contatoSolicitado, setContatoSolicitado] = useState(false);


  return (

    <>

      {/* Primeiro Modal */}
      <div className="janela-modal">
        <div className="modal">
          <div className="box-modal">
            <img src={SolicitarContato} alt="Imagem contratar empresa" className='imagem-modal' />
            <div className="traco"></div>
            <div className="texto-modal">
              <h1 className='titulo-modal-h1'>Contatar Empresa</h1>
              <div className="traco"></div>
              <h2 className='titulo-modal-h2'>Informaremos a empresa que você solicitou que ela entre em contato com você.
                <br />
                <br />
                Confirme sua solicitação de contato para o seguinte serviço
              </h2>

              <div className="box-texto-modal">
                <h2 className='titulo-modal-h2-5'>Empresa:</h2>
                <h2 className='titulo-modal-h2-5-texto'>{dadosServico.nomeEmpresa}</h2>
              </div>

              <div className="box-texto-modal">
                <h2 className='titulo-modal-h2-5'>Serviço:</h2>
                <h2 className='titulo-modal-h2-5-texto'>{dadosServico.nomeServico}</h2>
              </div>

              <div className="box-texto-modal">
                <h2 className='titulo-modal-h2-5'>Preço Médio:</h2>
                <h2 className='titulo-modal-h2-5-texto'>{dadosServico.valorMedio}</h2>
              </div>


              <div className="botoes-modal">
                <span onClick={closeModal} className='fechar' >
                  Cancelar
                </span>

                <button onClick={toggleModal2} className='botao-preenchido-servico'>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Segundo Modal */}
      <div className="modal2">

        <div className="box-modal">
          <img src={SolicitarContato} alt="Imagem contratar empresa" className='imagem-modal' />
          <div className="traco"></div>
          <div className="texto-modal">
            <h1 className='titulo-modal-h1'>Solicitação Enviada!</h1>
            <div className="traco"></div>
            <h2 className='titulo-modal-h2'>Aguarde a empresa te contatar por email.
              <br />
              <br />
              Você pode acompanhar o andamento através da página de Contatos que fica em “Minhas interações” nas opções do seu perfil.
              <br />
              <br />
              Caso tenha alguma dúvida, entre em contato conosco para te ajudarmos.
              <br />
              <br />
              Agradecemos sua preferência pela Ethos!
              <br />
              <br />
            </h2>

            <div className="botoes-modal">

              <Link to={'/minha-conta#minhas-interacoes#contatos'} style={{ textDecoration: 'none', color: '#3366cc' }}>
                <span onClick={closeModal2} className='fechar'>
                  Ver Contatos
                </span>
              </Link>


              <button onClick={closeModal2} className='botao-preenchido-servico'>
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </div>



      <HeaderPlataforma
        plano={usuario.plano}
        razaoSocial={usuario.razaoSocial}
      ></HeaderPlataforma>

      <div className="conteudo">
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
                <button className='botao-preenchido' onClick={() => verPortfolio()}>Ver Portfólio</button>
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
              {dadosServico.areaESG == 'governance' ? (
                <p className='pilar-esg'>Governamental</p>
              ) : (
                <p className='pilar-esg-nao-contido'>G</p>
              )}

            </div>

            <div className="box-container-informacoes">
            {contatoSolicitado ? (
          <button className='botao-preenchido-servico' onClick={verInteracao}>
            Ver Interação
          </button>
        ) : (
          <button className='botao-preenchido-servico' onClick={toggleModal}>
            Solicitar Contato
          </button>
        )}
              <HeartCheckbox></HeartCheckbox>
              <h2 className='subtitulo-container-informacao-favoritar'>Favoritar</h2>
            </div>
          </div>

        </div>

        <div className="container-avaliacao">
          <div className='margin-avaliacao-2'>
            <div className="titulo-caixa-avaliacao-2"> <h2 className='titulo-avaliacao-servico-2'>Avaliações do Serviço </h2><h2 className='titulo-avaliacao-servico-3'>(1)</h2></div>
            <AvaliacaoServicoComponent></AvaliacaoServicoComponent>
          </div>
        </div>

      </div>

      <FooterPlataforma></FooterPlataforma>

    </>

  )
}

export default Avaliacao;