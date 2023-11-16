import React, { useState } from 'react';
import './Carrosel.css';

const Carrosel = ({ imagens, textos }) => {
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
      <div className="slide-content">
        <img src={imagens[slideAtual]} alt={`Slide ${slideAtual + 1}`} />
        {textos && textos[slideAtual] && <p className="texto-sobre-imagem">{textos[slideAtual]}</p>}
      </div>
    </div>
  );
};

export default Carrosel;