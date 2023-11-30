import React from 'react'
import './UltimosServicos.css'

import { useState } from 'react';

const UltimosServicos = (props) => {
  const divStyle = {
    backgroundImage: `url(${props.imagemFundo})`,
    backgroundSize: 'auto 180px', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '7px',
    filter: 'brightness(80%) contrast(100%)',
    // boxSha: props.ativo ? 'brightness(100%) contrast(100%)' : 'brightness(100%) contrast(110%)',
  };


  return (
    <div className={`container-ultimo-servico ${props.ativo ? 'servicoAtivado' : ''}`}  style={divStyle} onClick={props.onClick} >
        <h4 className='titulo-ultimo-servico'>{props.nomeServico}</h4>   
    </div>
  )
}

export default UltimosServicos