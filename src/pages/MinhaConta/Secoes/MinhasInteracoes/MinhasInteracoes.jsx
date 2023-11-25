import React from 'react'
import './MinhasInteracoes.css';

const MinhasInteracoes = () => {
  return (
    <div className='dados-minha-conta'>
      <h2 className='titulo-secao'>
        Minhas Interações
      </h2>

      <div className='tracinho-divisor'></div>

      <div className="caixa-interacoes">
        <img src="" alt="Contatos" />
        <img src="" alt="Favoritos" />
      </div>

      <div className="interacoes-titulo">Empresas Contatadas</div>

      <h1>Empresas Contatadas</h1>
      <h2>Total: 2 empresas</h2>

      <h3>Finalizados: 1 empresa</h3>
      <h3>Em andamento: 1 empresa</h3>

    </div>
  )
}

export default MinhasInteracoes