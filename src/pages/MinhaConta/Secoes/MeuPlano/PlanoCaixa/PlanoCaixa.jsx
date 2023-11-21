import React from 'react'

//css
import './PlanoCaixa.css'

const PlanoCaixa = () => {
    return (
        <div className='container-plano'>
            <h2 className='nome-plano-informacao'>Plano Nome</h2>

            <div className='informacoes-plano'>
                <div className='detalhes-plano'>
                    Ideal para buscar serviços para sua empresa.

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>Acesso a portfolios de empresas certificadas</p>
                    </div>

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>Acesso a portfolios de empresas certificadas</p>
                    </div>

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>Acesso a portfolios de empresas certificadas</p>
                    </div>
                </div>
                <div className='preco-plano'>
                    bbb

                </div>
            </div>
        </div>
    )
}

export default PlanoCaixa