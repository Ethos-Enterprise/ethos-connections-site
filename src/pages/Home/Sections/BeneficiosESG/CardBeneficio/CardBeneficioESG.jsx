import './CardBeneficioESG.css'

const CardBeneficio = (props) => {
    return (<div className="card">
    <div className="numero-container">
      <p className="numeros">{props.numero}</p>
    </div>
    <p className="texto">{props.texto}</p>
  </div>);
}

export default CardBeneficio;





