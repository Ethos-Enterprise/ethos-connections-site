import React from 'react'
import './Progresso.css';

const Progresso = () => {
    return (
        <div className='etapa-progresso'>
            <div className='etapa'>
                <div className='numero'> 1</div>
                <p>Dados Gerais</p>
            </div>

            <div className='etapa'>
                <div className='numero'> 2</div>
                <p>Endereço e Contatos</p>
            </div>

            <div className='etapa'>
                <div className='numero'> 3</div>
                <p>Criar Senha</p>
            </div>

        </div>
    )
}

export default Progresso