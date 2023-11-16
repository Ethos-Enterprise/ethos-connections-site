import React from 'react'

const DadosComplementares = () => {
  return (
    <div className='dados-portfolio'>
      <h2 className='titulo-secao'>
        Dados Complementares
      </h2>
      <div className='tracinho-divisor'></div>

      <div className='inputs-portfolio'>
      <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Descricao Breve</label>
          <input type="text" className='input-portfolio' />
        </div>


<div>
  <label htmlFor="">Sobre a Empresa</label>
  <textarea name="" id="" cols="30" rows="10"></textarea>
</div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Link WebSite</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Empresa Certificada desde</label>
          <input type="text" className='input-portfolio' />
        </div>
      </div>
    </div>
  )
}

export default DadosComplementares