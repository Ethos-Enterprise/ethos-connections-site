import React from 'react'

//importando css
import './oferecemos.css';

//importando components
import Beneficio from './Beneficio/Beneficio.jsx';

const Oferecemos = () => {
  return (
    <div className='nossa-solucao'>
      <h2 className='titulo'>O <span>que</span> oferecemos<span>?</span></h2>

      <div>
        <div className='linha-beneficios'>
          <Beneficio />
          <Beneficio />

        </div>

        <div className='linha-beneficios'>
          <Beneficio />
          <Beneficio />
        </div>

      </div>
    </div>
  )
}

export default Oferecemos