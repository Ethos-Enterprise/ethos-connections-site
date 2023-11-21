import React from 'react'

const Certificacoes = () => {
  return (
    <div className='dados-portfolio'>
      <h2 className='titulo-secao'>
        Certificações
      </h2>
      <div className='tracinho-divisor'></div>

      <div className='inputs-portfolio'>
        <div className='campo-portfolio-arquivo'>
          <label htmlFor="" className='label-portfolio'>Adicione um ou mais certificados ESG da sua empresa</label>
          <div className='input-botao-portfolio'>
            <input
              type="file"
              accept='png'
              className='input-portfolio'
            // value={dadosComplementares.descricaoBreve}
            // onChange={(e) => atualizarCampos('descricaoBreve', e.target.value)}
            />
            <button className='botao-preenchido arquivo'>Adicionar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Certificacoes