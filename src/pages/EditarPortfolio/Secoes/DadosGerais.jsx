import React from 'react'

import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined'


const DadosGerais = () => {
  return (
    <div className='dados-portfolio'>

      <h2 className='titulo-secao'>
        Dados Gerais
      </h2>

      <div className='tracinho-divisor'></div>

      <div className='inputs-portfolio'>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Nome da Empresa</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>CNPJ</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Setor</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Quantidade de Funcionários</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Telefone</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Email</label>
          <input type="text" className='input-portfolio' />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>CEP</label>
          <input type="text" className='input-portfolio' />
        </div>

      </div>

      <div className='botoes-portfolio'>

        <ButtonOutlined acao={'Resetar Alterações'} />

        <ButtonFilled acao={'Salvar'} />
      </div>
    </div>
  )
}

export default DadosGerais