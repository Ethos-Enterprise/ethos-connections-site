import React from 'react';

import Header from '../../components/Header/Institucional/Header';
import Fazemos from './Sections/Fazemos/Fazemos';
import Oferecemos from './Sections/Oferecemos/Oferecemos';
import Planos from './Sections/Planos/Planos';
import ExplicacaoESG from './Sections/ExplicacaoESG/ExplicacaoESG';
import BeneficiosESG from './Sections/BeneficiosESG/BeneficiosESG';
import Carrosel from './Sections/Carrosel/Carrosel'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';

import './Home.css';

import imagem1 from '../../assets/imagens/carrosel-1.png';
import imagem2 from '../../assets/imagens/carrossel-3.png';
import imagem3 from '../../assets/background-fazemos.jpg';

 
// Componente Home
const Home = () => {
  const imagens = [imagem1, imagem2, imagem3];
  const textos = [
    '', 
    '',
    '',
  ];

 
  return (
    <>
      <Header />
      <Carrosel imagens={imagens} textos={textos} />
      <ExplicacaoESG />
      <BeneficiosESG />
      <Fazemos/>
      <Oferecemos />
      <Planos tela={'institucional'} />
      <FooterPlataforma />
    </>
  );
};

export default Home;