import React from 'react';
import './Planos.css';
import Check from '../../../../assets/Vector.png'

const Planos = () => {
  return (
    <div className='planos-container'>
      <div className='textos-container'>
        <h2 className='titulo-planos'> Conheça<span>nossos</span> Planos</h2>
        <h2 className='subtitulo-planos'>Aqui nós temos diferentes planos para atender às diferentes necessidades de cada empresa.</h2>
        <div className='linhas'>
          <div className='line1'>
            <p>Para obter soluções ESG</p>
          </div>
          <div className='line2'>
            <p>Para oferecer soluções ESG</p>
          </div>
        </div>
      </div>

      <div className="cardPlanos-container">
        <div className='cardPlanos'>
          <p className='plano-categoria'>Free</p><div className='linha-fina'></div>
          <h2>Gratuito</h2>
          <p className='p1'>Plano Padrão</p>
          <p className='p2'>Ideal para buscar serviços para sua empresa.</p>
          <p className='p3'><img src={Check} alt="" />Acesso a portfolios de empresas certificadas</p>
          <p className='p3'> <img src={Check} alt="" />Filtros de busca de serviços</p>
          <p className='p3'><img src={Check} alt="" />Intermediação de contato </p>
          <button className='botao-preenchido-planos'>Escolher Plano</button>
        </div>
        <div className='cardPlanos'>
          <p className='plano-categoria'>Analytics</p>
          <div className='linha-fina'></div>
          <h2>R$ 29,90/mês</h2>
          <p className='p1'>Plano Anual</p>
          <p className='p2' >Ideal para buscar serviços e analisar o crescimento ESG na sua empresa.</p>
          <p className='p3'> <img src={Check} alt="" />Benefícios do Plano Free</p>
          <p className='p3'> <img src={Check} alt="" />Acesso ao formulário ESG</p>
          <p className='p3'> <img src={Check} alt="" />Área com gráficos que mostra o crescimento ESG na sua empresa</p>
            <button className='botao-preenchido-planos'>Escolher Plano</button>
        </div>
        <div className='cardPlanos'>
          <p className='plano-categoria'>Provider</p>
          <div className='linha-fina'></div>
          <h2>R$ 49,90/mês</h2>
          <p className='p1'>Plano Anual</p>
          <p className='p2'>Permite a criação de um portfolio da sua empresa na plataforma. </p>
          <p className='p3'><img src={Check} alt="" />Benefícios do Plano Free</p>
          <p className='p3'><img src={Check} alt="" />Criação de Potfolio</p>
          <p className='p3'><img src={Check} alt="" />Intermediação de contato com as empresas contratantes</p>
          <button className='botao-preenchido-planos'>Solicitar Avaliação</button>
        </div>
      </div>
    </div>
  );
};

export default Planos;
