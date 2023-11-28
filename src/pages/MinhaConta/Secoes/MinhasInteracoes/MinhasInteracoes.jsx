import React, { useState } from 'react';
import './MinhasInteracoes.css';
import ImagemContatos from '../../../../assets/icones/contatos.png';
import ImagemFavoritos from '../../../../assets/icones/favoritos.png';

import ImagemEmpresas from '../../../../assets/imagens/deloitte_logo.jpeg';
import ImagemEmpresaPerfil from '../../../../assets/imagens/perfilImg.png';
import ImagemEmpresaPerfilEy from '../../../../assets/imagens/ey.jpg';
import CardSerInteractionsBox from './Componente/cardServico.jsx';
import SolicitarContato from '../../../../assets/imagens/solicitar contato.jpg';
import InteractionsBoxComponentCurtida from './Componente/cardFavorito.jsx';

const MinhasInteracoes = (props) => {

  const [componente, setComponente] = useState(props.componente);
  console.log(componente)

  const contatosFunc = () => {
    setComponente('minhas-interacoes#favoritos');
    window.location.hash = "#minhas-interacoes#favoritos";
  };

  const favoritosFunc = () => {
    setComponente('minhas-interacoes#contatos');
    window.location.hash = "#minhas-interacoes#contatos";
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

  return (
    <div className='dados-minha-conta'>
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

      <h2 className='titulo-secao'>Minhas Interações</h2>
      <div className='tracinho-divisor'></div>

      {componente === 'minhas-interacoes#contatos' ? (
        <>
          <div className="interactions-box">
            <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC' onClick={favoritosFunc} />
            <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF' onClick={contatosFunc} />
          </div>

          <div className='tracinho-divisor'></div>

          <div className="interactions-title">Empresas Contatadas</div>

          <div className="interactions-title-box">
            <h2 className='box-title-interactions'>Total: 2 empresas</h2>
            <h3 className='box-interactions-letter'>Finalizados: 1 empresa</h3>
            <h3 className='box-interactions-letter'>Em andamento: 1 empresa</h3>
          </div>

          <CardSerInteractionsBox
            ImagemEmpresas={ImagemEmpresas}
            empresaNome='Deloitte'
            servicoNome='Treinamento de Responsabilidade Social Corporativa (RSC)'
            statusContato='Aguardando resposta da empresa'
            inicioContato='15-11-2023'
          />
          <CardSerInteractionsBox
            ImagemEmpresas={ImagemEmpresaPerfilEy}
            empresaNome='Ernst & Young'
            servicoNome='Gestão de portfólios de investimentos'
            statusContato='Aguardando resposta da empresa'
            inicioContato='25-11-2023'
          />

        </>
      ) : (

        /* favoritos */
        <>

          <div className="interactions-box">
            <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC-2' onClick={favoritosFunc} />
            <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF-2' onClick={contatosFunc} />
          </div>
          <div className='tracinho-divisor'></div>

          <div className="interactions-title">Histórico de Curtidas</div>

          <div className="interactions-title-box">
            <h2 className='box-title-interactions'>Total: 2 empresas</h2>
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
    </div >
  );
}

export default MinhasInteracoes;
