import React from 'react'

import { useState , useEffect } from 'react';

//react router dom
import AdicionarServico from './AdicionarServico';

const Servicos = (props) => {
  const [adicionarServicoTela, setAdicionarServicoTela] = useState(props.voltar);

  const adicionarServico = () => {
    setAdicionarServicoTela(true);
  };


console.log(adicionarServicoTela);
  return (
    <>
      {
        !adicionarServicoTela ?
          (
            <div className='dados-portfolio' >
              <div className='titulo-botao-adicionar'>

                <h2 className='titulo-secao'>
                  Serviços
                </h2>

                <div onClick={adicionarServico} className='botao-adicionar-servico'>
                  <i className="fa-solid fa-plus icone-adicionar-servico"></i>

                  <span className='acao-botao-adicionar-servico'>
                    Adicionar
                  </span>
                </div>
              </div>
              <div className='tracinho-divisor'></div>

              <div className='inputs-portfolio'>

              </div>
            </div >

          ) : (
            <AdicionarServico />
          )
      }
    </>

  )
}

export default Servicos