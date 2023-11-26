import React from 'react';
import './cardServico.css';
import PropTypes from 'prop-types';
import ButtonPreenchido from '../../../../../components/ButtonFilled/ButtonFilled'; // Corrected import statement

const InteractionsBox = ({ ImagemEmpresas, empresaNome, servicoNome, statusContato, inicioContato }) => { // Corrected prop name
  return (
    <div className="interactions-box-component">
      <div className="box-interactions-imagem">
        <img src={ImagemEmpresas} alt="" className="interaction-img" /> {/* Corrected prop name */}
      </div>
      <div className="interactions-box-component-empresa">
        <h1 className="interactions-title">{empresaNome}</h1>
        <h2 className="interactions-subtitle">Serviço de interesse: {servicoNome}</h2>
        <h2 className="interactions-subtitle">Status do contato: {statusContato}</h2>
        <h3 className="interactions-subtitle-data">Início do contato: {inicioContato}</h3>
      </div>
      <div className="box-botao">
        <ButtonPreenchido acao={'Avaliar Serviço'} className="botao-posicao"></ButtonPreenchido> {/* Corrected component name */}
      </div>
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
