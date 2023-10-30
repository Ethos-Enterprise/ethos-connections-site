import React from 'react'

import Confianca from '../../../../assets/icones/confianca.png'
import Agilidade from '../../../../assets/icones/rapidez.png'
import Crescimento from '../../../../assets/icones/crescimento.png'
import Conexao from '../../../../assets/icones/usuario-conectado.png'

//importando css
import './Oferecemos.css';

//importando components
import Beneficio from './Beneficio/Beneficio.jsx';

const Oferecemos = () => {
  return (
    <section id='nossa-solucao'>
      <h2 className='titulo-oferecemos'>O <span>que</span> oferecemos<span>?</span></h2>

      <div className='caixa-beneficios'>
        <div className='linha-beneficios'>
          <Beneficio img={Conexao} beneficio={"Conexão"} descricao={"Conectamos empresas com os mesmos objetivos, em prol das práticas ESG, proporcionando conexões relevantes que têm o poder de transformar o mundo."}/>
          <Beneficio img={Confianca} beneficio={"Confiança"} descricao={"Garantimos que as empresas que oferecem serviços através da Ethos são referências no mercado e são certificadas pelas suas soluções nos pilares ESG."}/>

        </div>

        <div className='linha-beneficios'>
        <Beneficio img={Agilidade} beneficio={"Agilidade"} descricao={"Por meio de filtros categorizados, conectamos empresas com propósitos parecidos com o que você está buscando tudo isso de maneira assertiva e fácil."}/>
          <Beneficio img={Crescimento} beneficio={"Análise de Crescimento"} descricao={"Através um formulário, realizamos uma análise aprofundada do atual nível ESG da sua empresa, proporcionando insights valiosos para o seu crescimento sustentável."}/>

        </div>

      </div>
    </section>
  )
}

export default Oferecemos