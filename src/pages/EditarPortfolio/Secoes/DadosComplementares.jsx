import React from 'react'

import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined'

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

        <div className='campo-texto-portfolio'>
          <label htmlFor="">Sobre a Empresa</label>
          <textarea name="" id="" cols="30" rows="10" className='text-area-sobre-empresa'></textarea>
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Link WebSite</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Empresa Certificada desde</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='botoes-portfolio'>

<ButtonOutlined acao={'Cancelar'} />

<ButtonFilled acao={'Salvar'} />
</div>

      </div>
    </div>
  )
}

export default DadosComplementares