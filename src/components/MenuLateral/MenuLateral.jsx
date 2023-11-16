import React from 'react'
import './MenuLateral.css'

import  { useState} from 'react';

const MenuLateral = ({ titulo, opcoes , setSecaoAtual  }) => {
    const [secaoAtiva, setSecaoAtiva] = useState(opcoes[0].nome);

    const mudarSecao = (nome) => {
        setSecaoAtiva(nome);
        setSecaoAtual(nome);
      };

    return (
        <div className='container-menu-lateral'>
            <h2 className='titulo-menu'>{titulo}</h2>
            <div className='tracinho-divisor-menu'></div>
            <ul className='lista-opcoes-menu'>
                {opcoes.map((opcao, index) => (
                        <li 
                        key={index}
                        className={`opcao-menu ${opcao.nome === secaoAtiva ? 'ativa' : ''}`}
                        onClick={() => mudarSecao(opcao.nome)}
                        
                        >
                            {opcao.nome}
                        </li>

                ))}
            </ul>
        </div>
    )
}

export default MenuLateral