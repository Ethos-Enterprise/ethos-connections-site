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
        {textos && textos[slideAtual] &&
          <p className="texto-sobre-imagem">{textos[slideAtual]}
            {slideAtual && slideAtual === 0 && (
              <div className='teste'>
                Ethos: Conectando você às melhores empresas de soluções ESG para se destacar no mercado.
              </div>
            )}
            {slideAtual && slideAtual === 1 && (
              <div className='teste'>
                diusahdiashi dasuhaisuhdiuashd hudasihdaiuds
              </div>
            )}
            {slideAtual && slideAtual === 2 && (
              <div className='teste'>
                esse e o terceiro slide
              </div>
            )}
          </p>}

      </div>
    </div>
  );
};

export default Carrosel;