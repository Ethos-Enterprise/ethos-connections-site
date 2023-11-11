import React, { useState } from 'react';
import './Carrosel.css';

const Carrosel = ({ imagens }) => {
  const [slideAtual, setSlideAtual] = useState(0);

  const goToSlide = (index) => {
    setSlideAtual(index);
  };

  return (
    <div className="carrosel">
      <div className="bolinhas">
        {imagens.map((_, index) => (
          <div
            key={index}
            className={`bolinha ${index === slideAtual ? 'ativa' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
      <img src={imagens[slideAtual]} alt={`Slide ${slideAtual + 1}`} />
    </div>
  );
};

export default Carrosel;
