import React from 'react'

import { useState, useEffect } from 'react';

//react router dom
import AdicionarServico from './AdicionarServico';
import Servico from '../../../components/Serviços/Servico'

//hook
import { useUsuario } from '../../../hooks/Usuario';

const Servicos = (props) => {

  const { usuario } = useUsuario();
  const [componente, setComponente] = useState(props.componente);

  const [editandoServico, setEditandoServico] = useState(null); 

  const adicionarServico = () => {
    setComponente('adicionarServico');

      window.location.hash = "#servicos#adicionar-servico";
  };

  // useEffect(() => {

  //   api.get(`v1.0/servicos/${usuario.idEmpresa}`, {
  //     headers: {
  //       Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //     }
  //   })
  //     .then( (response) => {

  //       console.log(response);

  //       //criar state que pega todos os servicos da empresa
  //     })
  //     .catch((error) => {
  //       console.log('erro ao pegar os serviços da empresa. ERRO: ', error);
  //     })
  // }, []);

  
  return (
    <>
      {componente ==='servicos' ?
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

              <div className='caixa-portfolio'>

                {/* LISTAR SERVICOS QUE VEM ATRAVAES A REQUISICAO */}
                {/* {servicos.length > 0 ? (
                  servicos.map((servico) => ( */}
                    <Servico
                      // key={servico.id}
                      id={'2'}
                      ocasiao={'meu-servico-editar'}
                      nomeServico={'TESTE'}
                      nomeEmpresa={'servico.razaoSocial'}
                      descricao={'servico.descricao'}
                      valorMedio={('11').toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      areaESG={'environmental'}
                      fkPrestadoraServico={'servico.fkPrestadoraServico'}
                      
                      setComponente={setComponente}
                    />

                  {/* ))
                ) : (
                  <p>Nenhum serviço cadastrado.</p>
                )} */}
              </div>
            </div >

          ) : (
            <AdicionarServico setComponente={setComponente}/> 
          )
      }
    </>

  )
}

export default Servicos