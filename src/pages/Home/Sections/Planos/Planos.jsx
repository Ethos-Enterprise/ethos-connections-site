import React from 'react';
import './Planos.css';
import Check from '../../../../assets/Vector.png'

import { useNavigate } from 'react-router-dom';

const Planos = (props) => {

  const navigate = useNavigate();

  const escolherPlano = (plano) => {

    if (plano == 'Free') {
      navigate('/solucoes-esg')
      
    } else {
      navigate('/meu-plano/contrato', {
        state: {
          nomeDoPlano: plano,
          precoDoPlano: (plano === 'Analytics' ? ('29,90') : ('49,90')),
        },
      });
    }

  }

  return (
    props.tela == 'institucional' ? (

      <div className='planos-container'>
        <div className='textos-container'>
          <h2 className='titulo-planos'> Conheça<span>nossos</span>planos</h2>
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

          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Free</p><div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'> <span className='preco-institucional'>Gratuito</span></h2>
              <p className='p1'>Plano Padrão</p>
              <p className='p2'>Ideal para buscar serviços para sua empresa.</p>

              <div className='descricao-plano-institucional'>
                <p className='p3'><img src={Check} alt="" /> Acesso a portfolios de empresas certificadas</p>
                <p className='p3'> <img src={Check} alt="" />Filtros de busca de serviços</p>
                <p className='p3'><img src={Check} alt="" />Intermediação de contato </p>
              </div>
              <button className='botao-preenchido-planos'>Escolher Plano</button>
            </div>
          </div>



          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Analytics</p>
              <div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'>R$ <span className='preco-institucional'>29,90</span>/mês</h2>
              <p className='p1'>Plano Anual</p>

              <div className="descricao-plano-institucional">


                <p className='p2' >Ideal para buscar serviços e analisar o crescimento ESG na sua empresa.</p>
                <p className='p3'> <img src={Check} alt="" /> Benefícios do Plano Free</p>
                <p className='p3'> <img src={Check} alt="" />Acesso ao formulário ESG</p>
                <p className='p3'> <img src={Check} alt="" />Área com gráficos que mostra o crescimento ESG na sua empresa</p>
              </div>
              <button className='botao-preenchido-planos'>Escolher Plano</button>
            </div>
          </div>


          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Provider</p>
              <div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'>R$ <span className='preco-institucional'>49,90</span>/mês</h2>
              <p className='p1'>Plano Anual</p>
              <p className='p2'>Permite a criação de um portfolio da sua empresa na plataforma. </p>

              <div className="descricao-plano-institucional">

                <p className='p3'><img src={Check} alt="" />Benefícios do Plano Free</p>
                <p className='p3'><img src={Check} alt="" />Criação de Potfolio</p>
                <p className='p3'><img src={Check} alt="" />Intermediação de contato com as empresas contratantes</p>
              </div>
              <button className='botao-preenchido-planos'>Solicitar Avaliação</button>
            </div>
          </div>

        </div>
      </div>
    ) : (
      <div className='planos-container'>
        <div className='textos-container'>
          <h2 className='titulo-planos'> Escolha um Plano</h2>

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

          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Free</p><div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'> <span className='preco-institucional'>Gratuito</span></h2>
              <p className='p1'>Plano Padrão</p>
              <p className='p2'>Ideal para buscar serviços para sua empresa.</p>

              <div className='descricao-plano-institucional'>
                <p className='p3'><img src={Check} alt="" /> Acesso a portfolios de empresas certificadas</p>
                <p className='p3'> <img src={Check} alt="" />Filtros de busca de serviços</p>
                <p className='p3'><img src={Check} alt="" />Intermediação de contato </p>
              </div>
              <button className='botao-preenchido-planos' onClick={() => escolherPlano('Free')}>Escolher Plano</button>
            </div>
          </div>



          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Analytics</p>
              <div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'>R$ <span className='preco-institucional'>29,90</span>/mês</h2>
              <p className='p1'>Plano Anual</p>

              <div className="descricao-plano-institucional">


                <p className='p2' >Ideal para buscar serviços e analisar o crescimento ESG na sua empresa.</p>
                <p className='p3'> <img src={Check} alt="" /> Benefícios do Plano Free</p>
                <p className='p3'> <img src={Check} alt="" />Acesso ao formulário ESG</p>
                <p className='p3'> <img src={Check} alt="" />Área com gráficos que mostra o crescimento ESG na sua empresa</p>
              </div>
              <button className='botao-preenchido-planos' onClick={() => escolherPlano('Analytics')}>Escolher Plano</button>
            </div>
          </div>


          <div className='borda-espacada-container-plano'>

            <div className='cardPlanos'>
              <p className='plano-categoria'>Provider</p>
              <div className='linha-fina'></div>
              <h2 className='preco-plano-institucional'>R$ <span className='preco-institucional'>49,90</span>/mês</h2>
              <p className='p1'>Plano Anual</p>
              <p className='p2'>Permite a criação de um portfolio da sua empresa na plataforma. </p>

              <div className="descricao-plano-institucional">

                <p className='p3'><img src={Check} alt="" />Benefícios do Plano Free</p>
                <p className='p3'><img src={Check} alt="" />Criação de Potfolio</p>
                <p className='p3'><img src={Check} alt="" />Intermediação de contato com as empresas contratantes</p>
              </div>
              <button className='botao-preenchido-planos' onClick={() => escolherPlano('Provider')}>Solicitar Avaliação</button>
            </div>
          </div>

        </div>
      </div>
    )
  );
};

export default Planos;
