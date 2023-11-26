import React from 'react';
import PropTypes from 'prop-types';
import './cardFavorito.css';


const InteractionsBoxComponentCurtida = ({ ImagemEmpresas, nomeServico, nomeEmpresa, descricao, pilarESG, valorMedio, toggleModal }) => {
    return (
        <div className="interactions-box-component-curtida">
            <div className="box-interactions-imagem">
                <img src={ImagemEmpresas} alt="" className="interaction-img" />
            </div>

            <div className="caixa-curtida">
                <h1 className="interactions-title-curtida">{nomeServico}</h1>
                <h2 className="interactions-subtitle">{nomeEmpresa}</h2>
                <h2 className="interactions-subtitle">{descricao}</h2>

                <div className="interactions-subtitle-posicionar">
                    <h2 className="interactions-subtitle"><b>Pilar ESG:</b> {pilarESG}</h2>
                    <h2 className="interactions-subtitle"><b>Valor Médio:</b> R$ {valorMedio}</h2>
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
    );
};

InteractionsBoxComponentCurtida.propTypes = {
    ImagemEmpresas: PropTypes.string.isRequired,
    nomeServico: PropTypes.string.isRequired,
    nomeEmpresa: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    pilarESG: PropTypes.string.isRequired,
    valorMedio: PropTypes.number.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default InteractionsBoxComponentCurtida;
