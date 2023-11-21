import React from 'react'
import PlanoCaixa from './PlanoCaixa/PlanoCaixa'

//css
import './MeuPlano.css'

const MeuPlano = () => {
  return (
    <div className='dados-minha-conta'>
         <h2 className='titulo-secao'>
        Meu Plano
      </h2>

      <div className='tracinho-divisor'></div>
      {/* COLCOAR DETALHES DA PAGINA */}

      <h2 className='titulo-plano-exibido'>Plano Atual</h2>
      <PlanoCaixa />

      <h2 className='titulo-plano-exibido'>Outros Planos</h2>

      <PlanoCaixa />
      <PlanoCaixa />

    </div>
  )
}

export default MeuPlano