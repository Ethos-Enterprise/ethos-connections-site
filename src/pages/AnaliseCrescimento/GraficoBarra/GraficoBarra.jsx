import React, { useState, useEffect } from 'react';

//css
import './GraficoBarra.css'

const BarraProgresso = ({ porcentagem }) => {
    const [largura, setLargura] = useState(0);

    useEffect(() => {
        setLargura(porcentagem);
    }, [porcentagem]);

    return (
        <div className='fundo-grafico'>
            <div className='porcentagem-progresso'style={{width: `${largura}%`}}/>
            <div className='hint-dado-porcentagem' style={{left: `${largura + 4}%`}}>
                <p className='dado-porcentagem'>{porcentagem}%</p>
                <div className="triangulo"></div>

            </div>
        </div>
    );
};

export default BarraProgresso;