import React from 'react';
import './Planos.css';

const Planos = (props) => {
    return (
        <div className={`card cardPlanos-${props.cardNumber}`}>
            <div className="card-planos"></div>
            <div className="texto-container">
                <p className="texto">{props.texto}</p>
            </div>
        </div>
    );
};

const ExplicacaoPlano = (props) => {
    return (
        <div className='explicacao-planos'>
            <div className='planos-container'>
                <h2 className='titulo-planos'> <span>O que é ESG?</span></h2>
                <h2 className='subtitulo-planos'> <span>A sigla ESG se refere às práticas de responsabilidade Ambiental (Environment), Social e Governamental de uma empresa.</span></h2>

            </div>
            <div className='cardsPlanos-container'>
                <Planos texto="Ambiental" cardNumber={1} />
                <Planos texto="Social" cardNumber={2} />
                <Planos texto="Governança" cardNumber={3} />
            </div>
        </div>
    );
}

export default Planos;
