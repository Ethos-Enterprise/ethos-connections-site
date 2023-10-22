import React from 'react'
import './Beneficio.css';

export const Beneficio = (props) => {
  return (
    <div className='container'>
      
      <div className='titulo-beneficio'>
        <img className='icone-beneficio' src={props.img} alt="icone" />
        <h3>{props.beneficio}</h3>
      </div>

      <p>{props.descricao}</p>
    </div>
  )
}

export default Beneficio;