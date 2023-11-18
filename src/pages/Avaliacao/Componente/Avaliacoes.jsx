import React from 'react';
import './Avaliacoes.css';
import estrela from '../../../assets/estrela.png';
import estrelaPreenchida from '../../../assets/estrela-pontiaguda.png';
import usuariPerfil from '../../../assets/icones/perfil-de-usuario.png';

const AvaliacaoServicoComponent = () => {
  return (
    <div>
      <div className="traco"></div>

      <div className="container-avaliacao">
        <div className="caixa-avaliacao-servico">
          <div className="usuario-conjunto">
            <img src={usuariPerfil} alt="Usuário Perfil" className='usuario-servico' />
            <h1 className='titulo-star-avaliacao'>Matrix Energia</h1>
          </div>
          <div className="estrelas-conjunto">
            <img src={estrelaPreenchida} alt="Estrela Cheia" className='estrela-servico' />
            <img src={estrelaPreenchida} alt="Estrela Cheia" className='estrela-servico' />
            <img src={estrelaPreenchida} alt="Estrela Cheia" className='estrela-servico' />
            <img src={estrelaPreenchida} alt="Estrela Cheia" className='estrela-servico' />
            <img src={estrela} alt="Estrela vazia" className='estrela-servico' />
          </div>
        </div>
        <h2 className='subtitulo-star-avaliacao'>Feito em 06-09-2023</h2>
        <h3 className='descricao-star-avaliacao'>Descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico descricao do servico </h3>
      </div>
    </div>
  );
};

export default AvaliacaoServicoComponent;
