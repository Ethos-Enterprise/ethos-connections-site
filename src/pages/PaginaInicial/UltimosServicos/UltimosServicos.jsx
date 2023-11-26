import React from 'react'
import './UltimosServicos.css'

const UltimosServicos = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.imagemFundo})`,
    backgroundSize: 'auto 175px', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '7px',
    filter: 'brightness(80%) contrast(100%)'
  };

  return (
    <div className='container-ultimo-servico' style={divStyle}>
        <h4 className='titulo-ultimo-servico'>{props.nomeServico}</h4>   
        {/* <p className='nome-empresa-ultimo-servico'>{props.nomeEmpresaServico}</p> */}
        {/* <p className='valor-ultimo-servico'>Valor Médio: {props.valorServico}</p> */}
    </div>
  )
}

export default UltimosServicos