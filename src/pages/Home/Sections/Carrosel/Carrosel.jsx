// Carrosel.js
import React, { useState } from 'react';
import './Carrosel.css';
import ods from '../../../../assets/imagens/ods.png';
import E from '../../../../assets/icones/amb.png'
import S from '../../../../assets/icones/social.png'
import G from '../../../../assets/icones/gov.png'


const Carrosel = ({ imagens, textos }) => {
  const [slideAtual, setSlideAtual] = useState(0);

  const goToSlide = (index) => {
    setSlideAtual(index);
  };

  return (
    <div className="carrosel">
      {/* Parte do Carrossel (primeiro) */}
      <div className={`primeira-frase ${slideAtual === 0 ? 'containerPrimario' : ''}`}>
        {slideAtual === 0 && (
          <>
            <p className='conexoes'>Conexões que transformam</p>
            <p className='ethos'>Ethos: Conectando você às melhores empresas de soluções ESG para se destacar no mercado.</p>
          </>
        )}
      </div>

      {/* Bolinhas de navegação */}
      <div className="bolinhas">
        {imagens.map((_, index) => (
          <div
            key={index}
            className={`bolinha ${index === slideAtual ? 'ativa' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Conteúdo do Carrossel (segundo) */}
      <div className="slide-content">
        {/* Imagem do slide */}
        <img src={imagens[slideAtual]} alt={`Slide ${slideAtual + 1}`} />

        {/* Texto associado à imagem */}
        {textos && textos[slideAtual] && (
          <div className="texto-sobre-imagem">
            {textos[slideAtual]}
          </div>
        )}

        {/* Seção específica para o segundo carrossel (com cards) */}
        {slideAtual === 1 && (
          <div className="segundo-carrosel">
            {/* Card 1 */}
            <div className="card-carrosel">
              <h2 className='letra'>E</h2>
              <img className= "ambi" src={E} alt="Descrição da imagem" />
              <p className='ingles'>Environmental</p>
              <p>Ambiental</p>
            </div>

            {/* Card 2 */}
            <div className="card-carrosel">
              <h2 className='letra'>S</h2>
              <img src={S} alt="Descrição da imagem" />
              <p className='ingles'>Social</p>
              <p>Social</p>
            </div>

            {/* Card 3 */}
            <div className="card-carrosel">
              <h2 className='letra'>G</h2>
              <img src={G} alt="Descrição da imagem" />
              <p className='ingles'>Governamental</p>
              <p>Governança</p>
            </div>
          </div>
        )}

        {/* Seção específica para o terceiro carrossel (adapte conforme necessário) */}
        {slideAtual === 2 && (
          <div className="terceiro-carrosel">
            <p className='ods'>A Ethos acredita na mudança e trabalha em colaboração com os ODS, buscando impactar positivamente o mundo.</p>
            <img src={ods} alt="Descrição da imagem" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Carrosel;
