import React from 'react'
import './BeneficiosESG.css';


import Numero2 from '../../../../assets/icones/Numero2.png'
import Numero3 from '../../../../assets/icones/Numero3.png'
import Numero4 from '../../../../assets/icones/Numero4.png'
import Numero5 from '../../../../assets/icones/Numero5.png'
import Numero6 from '../../../../assets/icones/Numero6.png'
import Numero1 from '../../../../assets/icones/numero1-beneficios.png'
import CardBeneficio from '../BeneficiosESG/CardBeneficio/CardBeneficioESG'

export const BeneficiosESG = (props) => {
  return (

    <div class='beneficios-esg'>
      <div class="overlay"></div>
      <div class='titulo'>      <h2 className='titulo-beneficios-esg'> 
      <span>Por que </span>adotar<span> práticas ESG? </span></h2>
      </div>

      <div className='titulo-container'>
        <CardBeneficio texto="Maior alcance de investidores e clientes." numero="1" />
        <CardBeneficio texto="Mais eficiência e economia nas operações." numero="2" />
        <CardBeneficio texto="Beneficia comunidades e a sociedade." numero="3" />
        <CardBeneficio texto="Adaptação às mudanças do cenário global." numero="4" />
        <CardBeneficio texto="Reduz riscos legais de reputação." numero="5" />
        <CardBeneficio texto="Valoriza a imagem da empresa." numero="6" />
      </div>

      <p>{props.descricao}</p>
    </div>
  )
}

export default BeneficiosESG;