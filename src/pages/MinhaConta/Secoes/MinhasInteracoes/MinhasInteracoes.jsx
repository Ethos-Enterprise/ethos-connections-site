import React, { useState, useEffect } from 'react';
import './MinhasInteracoes.css';
import ImagemContatos from '../../../../assets/imagens/contato.jpg';
import ImagemFavoritos from '../../../../assets/imagens/favoritos.jpg';

import ImagemEmpresas from '../../../../assets/imagens/deloitte_logo.jpeg';
import ImagemEmpresaPerfil from '../../../../assets/imagens/perfilImg.png';
import ImagemEmpresaPerfilEy from '../../../../assets/imagens/ey.jpg';
import CardSerInteractionsBox from './Componente/cardServico.jsx';
import SolicitarContato from '../../../../assets/imagens/solicitar contato.jpg';
import InteractionsBoxComponentCurtida from './Componente/cardFavorito.jsx';
import HeaderPlataforma from '../../../../components/Header/Plataforma/HeaderPlataforma.jsx';


import { useUsuario } from '../../../../hooks/Usuario.jsx';
import FooterPlataforma from '../../../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';

//api
import api from '../../../../service/api.js'

//react router

import { Link } from 'react-router-dom';
import UltimosServicos from '../../../PaginaInicial/UltimosServicos/UltimosServicos.jsx';
const MinhasInteracoes = (props) => {

  const [componente, setComponente] = useState(props.componente);

  const contatosFunc = () => {
    setComponente('favoritos');
    window.location.hash = "#favoritos";
  };

  const favoritosFunc = () => {
    setComponente('contatos');
    window.location.hash = "#contatos";
  };

  // Modal
  const toggleModal = () => {
    let modal = document.querySelector('.modal');
    let modalJanela = document.querySelector('.janela-modal');

    modalJanela.style.display =
      modalJanela.style.display === 'none' || modalJanela.style.display === ''
        ? 'block'
        : 'none';

    modal.style.display =
      modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
  };

  const closeModal = () => {
    let modal = document.querySelector('.modal');
    let modalJanela = document.querySelector('.janela-modal');

    modal.style.display = 'none';
    modalJanela.style.display = 'none';
  };

  const toggleModal2 = () => {
    let modal2 = document.querySelector('.modal2');
    modal2.style.display = modal2.style.display === 'none' ? 'block' : 'none';
  };

  const closeModal2 = () => {

    closeModal();
    let modal2 = document.querySelector('.modal2');
    modal2.style.display = 'none';


  };

  const closeModal3 = () => {
    closeModal();
    let modal2 = document.querySelector('.modal2');
    modal2.style.display = 'none';
    favoritosFunc();

  }

  const { usuario } = useUsuario();

  const imagem1 = {
    backgroundImage: `url(${ImagemContatos})`,
    backgroundSize: 'auto 180px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '7px',
    filter: 'brightness(80%) contrast(100%)'
  };

  const imagem2 = {
    backgroundImage: `url(${ImagemFavoritos})`,
    backgroundSize: 'auto 180px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '7px',
    filter: 'brightness(80%) contrast(100%)'
  };

  const [contatos, setContatos] = useState([]);

  console.log(contatos);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseContatos = await api.get(`/v1.0/interacoes/empresa/${usuario.id}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          }
        })
        const contatosData = responseContatos.data;
  
        const contatosPromises = contatosData.map(async (contato) => {
          const servicoResponse = await api.get(`/v1.0/servicos/${contato.fkServico}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            }
          })
          const servicoData = servicoResponse.data;


          console.log(servicoData.fkPrestadoraServico);
          const prestadorasResponse = await api.get(`/v1.0/prestadoras`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            }
          })
          console.log(prestadorasResponse.data);
          const idEmpresaServico = prestadorasResponse.data.filter(p => p.idPrestadora === servicoData.fkPrestadoraServico)
          .map(p => p.fkEmpresa);

          const empresaResponse = await api.get(`/v1.0/empresas/${idEmpresaServico}`, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            }
          })
  
          return {
            ...contato,
            nomeServico: servicoData.nomeServico, 
            nomeEmpresa: empresaResponse.data.razaoSocial 
          };
        });
  
        const contatosCompletos = await Promise.all(contatosPromises);
        setContatos(contatosCompletos);
  
      } catch (error) {
        console.error("Erro ao buscar dados das interações:", error);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <>

      <HeaderPlataforma
        plano={usuario.plano}
        razaoSocial={usuario.razaoSocial}
      />

      <div className='conteudo'>

        <div className='beadcrumb'>
          <Link to='/minhas-interacoes' className='link-beadcrumb-atual'><span>Minhas Interações </span>  </Link>
        </div>



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
                  <h2 className='titulo-modal-h2-5-texto'>Deloitte</h2>
                </div>

                <div className="box-texto-modal">
                  <h2 className='titulo-modal-h2-5'>Serviço:</h2>
                  <h2 className='titulo-modal-h2-5-texto'>Treinamento de Responsabilidade Social Corporativa</h2>
                </div>

                <div className="box-texto-modal">
                  <h2 className='titulo-modal-h2-5'>Preço Médio:</h2>
                  <h2 className='titulo-modal-h2-5-texto'>R$ 2.000</h2>
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
                <span onClick={closeModal3} className='fechar'>
                  Ver Contatos
                </span>

                <button onClick={closeModal2} className='botao-preenchido-servico'>
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fim Modal */}

        {/* Contatos */}

        {/* <div className='tracinho-divisor'></div> */}

        {componente === 'contatos' ? (
          <>
            <div className='container-opcoes-interacoes'>

              <h2 className='titulo-secao-interacoes'>Categorias de Interações</h2>

              <div className="interactions-box">

                <div className='imagem-interactionsC' style={imagem1} onClick={favoritosFunc}>
                  <h4 className='titulo-ultimo-servico'>Contatos</h4>
                </div>

                <div className='imagem-interactionsF' style={imagem2} onClick={contatosFunc}>
                  <h4 className='titulo-ultimo-servico'>Favoritos</h4>
                </div>

              </div>

            </div>

            {/* <div className='tracinho-divisor'></div> */}

            <div className="interactions-title-box">
              <div className="interactions-title">Empresas Contatadas</div>
              <div className='metricas-contatos'>
                {/* <h3 className='box-interactions-letter'>Total: <span>2 empresas</span></h3> */}
                <h3 className='box-interactions-letter'>Pendente: <span>{contatos.length} empresa</span></h3>
                <h3 className='box-interactions-letter'>Em andamento: <span>0 empresa</span></h3>
                <h3 className='box-interactions-letter'>Finalizado: <span>0 empresa</span></h3>
              </div>
            </div>

            {contatos && contatos.length > 0 ? (

              contatos.map((contato) => (
                <CardSerInteractionsBox
                  key={contato.id} 
                  ImagemEmpresas={ ImagemEmpresas}
                  empresaNome= {contato.nomeEmpresa}
                  servicoNome= {contato.nomeServico}
                  statusContato={contato.status}
                  inicioContato={contato.data}
                />
              ))
            ) : (
              <p>Você não fez nenhuma interação.</p>
            )}

          </>
        ) : (

          /* favoritos */
          <>

            <div className='container-opcoes-interacoes'>

              <h2 className='titulo-secao-interacoes'>Categorias de Interações</h2>

              <div className="interactions-box">

                <div className='imagem-interactionsC-2' style={imagem1} onClick={favoritosFunc}>
                  <h4 className='titulo-ultimo-servico'>Contatos</h4>
                </div>

                <div className='imagem-interactionsF-2' style={imagem2} onClick={contatosFunc}>
                  <h4 className='titulo-ultimo-servico'>Favoritos</h4>
                </div>

              </div>
            </div>


            <div className="interactions-title-box">

              <div className="interactions-title">Histórico de Curtidas</div>
              <div className='metricas-contatos'>
                <h2 className='box-title-interactions'>Total: <span>2 empresas</span></h2>
              </div>
            </div>

            <InteractionsBoxComponentCurtida
              ImagemEmpresas={ImagemEmpresas}
              nomeServico="Treinamento de Responsabilidade Social Corporativa (RSC)"
              nomeEmpresa="Deloitte"
              descricao=" O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC"
              pilarESG="Governança"
              valorMedio={2000.0}
              toggleModal={toggleModal}
            />

            <InteractionsBoxComponentCurtida
              ImagemEmpresas={ImagemEmpresaPerfilEy}
              nomeServico="Gestão de portfólios de investimentos"
              nomeEmpresa="Ernst & Young"
              descricao="A Gestão de Portfólios de Investimentos é um serviço especializado oferecido por instituições financeiras, gestoras de ativos ou profissionais do mercado financeiro. Essa prática envolve a administração estratégica de um conjunto diversificado de investimentos, com o objetivo de otimizar o retorno financeiro em linha com os objetivos e tolerâncias de risco do cliente."
              pilarESG="Governança"
              valorMedio={1000.0}
              toggleModal={toggleModal}
            />
          </>
        )
        }

      </div>


      <FooterPlataforma />
    </>

  );
}

export default MinhasInteracoes;
