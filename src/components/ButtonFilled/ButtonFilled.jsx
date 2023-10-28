import React from 'react'

import './ButtonFilled.css'

const ButtonFilled = (props) => {
  return (
    <>
        <button className='botao-preenchido'>{props.acao}</button>
    </>
  )
}

export default ButtonFilled