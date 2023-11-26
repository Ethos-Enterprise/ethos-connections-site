import React, { useState } from 'react';
import './MinhasInteracoes.css';
import ImagemContatos from '../../../../assets/icones/contatos.png';
import ImagemEmpresas from '../../../../assets/imagens/deloitte_logo.jpeg';
import ImagemEmpresaPerfil from '../../../../assets/imagens/perfilImg.png';
import ImagemFavoritos from '../../../../assets/icones/favoritos.png';
import CardSerInteractionsBox from './Componente/cardServico.jsx';

const MinhasInteracoes = () => {
  const [favoritosClicado, setFavoritosClicado] = useState(false);
  const [contatosClicado, setContatosClicado] = useState(true);

  const handleFavoritosClick = () => {
    setFavoritosClicado(!favoritosClicado);
    setContatosClicado(false); // Certifique-se de que a outra seção está oculta
  };

  const handleContatoClick = () => {
    setContatosClicado(!contatosClicado);
    setFavoritosClicado(false); // Certifique-se de que a outra seção está oculta
  };

  return (
    <div className='dados-minha-conta'>
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

        <div className="interactions-box-component">
          <div className="box-interactions-imagem">
            <img src={ImagemEmpresas} alt="" className="interaction-img" />
          </div>
        
          <div className="interactions-box-component-empresa">
  <div className="box-botao-favorito">
            <button className="botao-posicao">Remover  Favorito</button>
            <button className="botao-posicao">Solicitar Contato</button>
          </div>

            <h1 className="interactions-title">Nome do serviço</h1>
            <h2 className="interactions-subtitle">Nome da Empresa</h2>
            <h2 className="interactions-subtitle">   Breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descrição breve descri.....</h2>

            <div className="interactions-subtitle-posicionar">
              <h2 className="interactions-subtitle">  <b>Pilar ESG:</b> Ambiental</h2>
              <h2 className="interactions-subtitle">  <b>Valor Médio:</b> R$ XXXX,XX </h2>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MinhasInteracoes;
