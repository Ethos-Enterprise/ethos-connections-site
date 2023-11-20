import React from 'react'
import './UltimosServicos.css'

const UltimosServicos = (props) => {
  return (
    <div className='container-ultimo-servico'>
        <h4 className='titulo-ultimo-servico'>{props.nomeServico}</h4>   
        {/* <p className='nome-empresa-ultimo-servico'>{props.nomeEmpresaServico}</p> */}
        {/* <p className='valor-ultimo-servico'>Valor Médio: {props.valorServico}</p> */}
    </div>
  )
}

export default UltimosServicos