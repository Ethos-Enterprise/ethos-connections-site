import './CardBeneficioESG.css'
import React from 'react'


const CardBeneficio = (props) => {
    return (<div className="card-beneficio">
    <div className="numero-container">
      <p className="numeros">{props.numero}</p>
    </div>
    <p className="texto">{props.texto}</p>
  </div>);
}

export default CardBeneficio;





