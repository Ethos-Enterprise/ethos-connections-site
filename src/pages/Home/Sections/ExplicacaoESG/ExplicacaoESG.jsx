
import React from 'react';
import './ExplicacaoESG.css';

const CardESG = (props) => {
    return (
        <div className={`card card-${props.cardNumber}`}>
            <div className="card-image"></div>
            <div className="texto-container">
                <p className="texto">{props.texto}</p>
            </div>
        </div>
    );
};

const ExplicacaoESG = (props) => {
    return (
        <div className='explicacao-esg'>
            <div className='titulo1-container'>
                <h2 className='titulo-esg'> <span>O que é ESG?</span></h2>
                <h2 className='subtitulo-esg'> <span>A sigla ESG se refere às práticas de responsabilidade Ambiental (Environment), Social e Governance (Governança) de uma empresa.</span></h2>
            </div>
            <div className='cards-container'>
                <CardESG texto="Ambiental" cardNumber={1} />
                <CardESG texto="Social" cardNumber={2} />
                <CardESG texto="Governança" cardNumber={3} />
            </div>
        </div>
    );
}

export default ExplicacaoESG;
