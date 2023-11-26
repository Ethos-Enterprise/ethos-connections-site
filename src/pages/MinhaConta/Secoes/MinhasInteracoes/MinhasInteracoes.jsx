import React, { useState } from 'react';
import './MinhasInteracoes.css';
import ImagemContatos from '../../../../assets/icones/contatos.png';
import ImagemEmpresas from '../../../../assets/imagens/deloitte_logo.jpeg';
import ImagemEmpresaPerfil from '../../../../assets/imagens/perfilImg.png';
import ImagemFavoritos from '../../../../assets/icones/favoritos.png';
import CardSerInteractionsBox from './Componente/cardServico.jsx';
import SolicitarContato from '../../../../assets/imagens/solicitar contato.jpg'

const MinhasInteracoes = () => {
  const [favoritosClicado, setFavoritosClicado] = useState(false);
  const [contatosClicado, setContatosClicado] = useState(true);

  const handleFavoritosClick = () => {
    setFavoritosClicado(!favoritosClicado);
    setContatosClicado(false);
  };

  const handleContatoClick = () => {
    setContatosClicado(!contatosClicado);
    setFavoritosClicado(false);
  };

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

    let modal2 = document.querySelector('.modal2');
    modal2.style.display = modal2.style.display === 'none' ? 'block' : 'none';
  };



  const closeModal2 = () => {
    closeModal();
    let modal2 = document.querySelector('.modal2');

    modal2.style.display = 'none';

  };
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

              {/* ACRESCENTAR LINK */}
              <span onClick={closeModal2} className='fechar'>
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

      <h2 className='titulo-secao'>Minhas Interações</h2>
      <div className='tracinho-divisor'></div>

      <div className={`minhas-interacoes-container ${favoritosClicado ? 'favoritos-hidden' : ''}`}>
        <div className="interactions-box">
          <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC' onClick={handleContatoClick} />
          <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF' onClick={handleFavoritosClick} />
        </div>

        <div className='tracinho-divisor'></div>

        <div className="interactions-title">Empresas Contatadas</div>

        <div className="interactions-title-box">
          <h2 className='box-title-interactions'>Total: 2 empresas</h2>
          <h3 className='box-interactions-letter'>Finalizados: 1 empresa</h3>
          <h3 className='box-interactions-letter'>Em andamento: 1 empresa</h3>
        </div>

        {/* Card */}
        <CardSerInteractionsBox
          ImagemEmpresas={ImagemEmpresas}
          empresaNome='Deloitte'
          servicoNome='Nome do Serviço'
          statusContato='Aguardando resposta da empresa'
          inicioContato='XX-XX-XXXX'
        />
        <CardSerInteractionsBox
          ImagemEmpresas={ImagemEmpresaPerfil}
          empresaNome='Nome da Empresa'
          servicoNome='Nome do Serviço'
          statusContato='Aguardando resposta da empresa'
          inicioContato='XX-XX-XXXX'
        />
      </div>

      {/* Contato */}
      <div className={`minhas-interacoes-container ${contatosClicado ? 'contato-hidden' : ''}`}>
        <div className="interactions-box">
          <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC-2' onClick={handleContatoClick} />
          <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF-2' onClick={handleFavoritosClick} />
        </div>

        <div className="interactions-title">Histórico de Curtidas</div>

        <div className="interactions-title-box">
          <h2 className='box-title-interactions'>Total: 2 empresas</h2>
        </div>


        {/*Componente */}
        <div className="interactions-box-component-curtida">
          <div className="box-interactions-imagem">
            <img src={ImagemEmpresas} alt="" className="interaction-img" />
          </div>

          <div className="caixa-curtida">
            <h1 className="interactions-title">Nome do serviço</h1>
            <h2 className="interactions-subtitle">Nome da Empresa</h2>
            <h2 className="interactions-subtitle">   Breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descri.....</h2>

            <div className="interactions-subtitle-posicionar">
              <h2 className="interactions-subtitle">  <b>Pilar ESG:</b> Ambiental</h2>
              <h2 className="interactions-subtitle">  <b>Valor Médio:</b> R$ XXXX,XX </h2>
            </div>
            <div className="interactions-box-component-empresa-curtida">
              <div className="box-botao-favorito">
                <div className="gap-botao-favorito">
                  <button className="botao-posicao-vazio">Remover Favorito</button>
                  <button className="botao-posicao-cheio" onClick={toggleModal}>Solicitar Contato</button>
                </div>
              </div>
            </div>

          </div>
        </div>





      </div>


    </div>



  );
}

export default MinhasInteracoes;
