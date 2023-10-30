import React from 'react'
import './Progresso.css';

const Progresso = ({etapaAtual}) => {
    return (
        <div className='etapa-progresso'>
            <div className='etapa '>
                <div className='numero2'> 1</div>
                <p className='nome-etapa2'>Dados Gerais</p>
            </div>

            <div className='linha'></div>

            <div className='etapa'>
                <div className={`step ${etapaAtual >= 1 ? "numero2" : "numero"}`}> 2</div>
                <p className={`step ${etapaAtual >= 1 ? "nome-etapa2" : "nome-etapa"}`}>Endereço e Contato</p>
            </div>

            <div className='linha'></div>

            <div className='etapa'>
                <div className={`step ${etapaAtual >= 2 ? "numero2" : "numero"}`}> 3</div>
                <p className={`step ${etapaAtual >= 2 ? "nome-etapa2" : "nome-etapa"}`}>Criar Senha</p>
            </div>

        </div>
    )
}

export default Progresso