import React from 'react';
import './cardServico.css';
import PropTypes from 'prop-types';

const InteractionsBox = ({ ImagemEmpresas, empresaNome, servicoNome, statusContato, inicioContato }) => {
  const avaliar = () => {
    console.log('Avaliar Serviço clicked');
  };

  return (
    <div className="interactions-box-component">
      <div className="box-interactions-imagem">
        <img src={ImagemEmpresas} alt="" className="interaction-img" />
      </div>
      
      <div className="interactions-box-component-empresa">
        <h1 className="interactions-title-servico">{empresaNome}</h1>
        <h2 className="interactions-subtitle"> <span className='titulo-info-contato'>Serviço de interesse:</span> {servicoNome}</h2>
        <h2 className="interactions-subtitle"> <span className='titulo-info-contato'>Status do contato:</span> {statusContato}</h2>
        <div className='box-ultimo-servico'>

          <h3 className="interactions-subtitle-data"> <span className='titulo-info-contato'>Início do contato:</span> {inicioContato}</h3>
          <button onClick={avaliar} className="botao-posicao">Avaliar Serviço</button>
        </div>
      </div>
      {/* <div className="box-botao"> */}
      {/* </div> */}
    </div>
  );
};

InteractionsBox.propTypes = {
  ImagemEmpresas: PropTypes.string.isRequired,
  empresaNome: PropTypes.string.isRequired,
  servicoNome: PropTypes.string.isRequired,
  statusContato: PropTypes.string.isRequired,
  inicioContato: PropTypes.string.isRequired,
};

export default InteractionsBox;
