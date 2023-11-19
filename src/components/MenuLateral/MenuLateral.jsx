import React from 'react'
import './MenuLateral.css'

const MenuLateral = ({ titulo, opcoes ,secaoAtiva, setSecaoAtual  }) => {

    const mudarSecao = (opcao) => {
        setSecaoAtual( opcao.hash); 
      };

    return (
        <div className='container-menu-lateral'>
            <h2 className='titulo-menu'>{titulo}</h2>
            <div className='tracinho-divisor-menu'></div>
            <ul className='lista-opcoes-menu'>
                {opcoes.map((opcao, index) => (
                        <li 
                        key={index}
                        className={`opcao-menu ${opcao.hash === secaoAtiva ? 'ativa' : ''}`}
                        onClick={() => mudarSecao(opcao)}
                        
                        >
                            {opcao.nome}
                        </li>

                ))}
            </ul>
        </div>
    )
}

export default MenuLateral