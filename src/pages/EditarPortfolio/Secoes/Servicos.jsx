  import React from 'react'

  import { useState, useEffect } from 'react';

  //react router dom
  import AdicionarServico from './AdicionarServico';
  import Servico from '../../../components/Serviços/Servico'

  //hook
  import { useUsuario } from '../../../hooks/Usuario';

  import axios from 'axios';
  import api from '../../../service/api';

  const Servicos = (props) => {

    const { usuario } = useUsuario();
    const [componente, setComponente] = useState(props.componente);

    const [servicos, setServicos] = useState([]);

    const adicionarServico = () => {
      setComponente('adicionarServico');
      window.location.hash = "#servicos#adicionar-servico";
    };

    useEffect(() => {
      console.log(usuario.idPrestadora);
          api.get(`/v1.0/servicos`)
            .then((response) => {
              const servicosEmpresa = response.data.filter(servico => servico.fkPrestadoraServico === usuario.idPrestadora);
              setServicos(servicosEmpresa);
            })
            .catch((error) => {
              console.log('erro ao pegar os serviços da empresa. ERRO: ', error);
            });

    }, []);

    console.log(servicos);

    return (
      <>
        {componente === 'servicos' ? (
          <div className='dados-portfolio' >
            <div className='titulo-botao-adicionar'>
              <h2 className='titulo-secao'>Serviços</h2>
              <div onClick={adicionarServico} className='botao-adicionar-servico'>
                <i className="fa-solid fa-plus icone-adicionar-servico"></i>
                <span className='acao-botao-adicionar-servico'>Adicionar</span>
              </div>
            </div>
            <div className='tracinho-divisor'></div>
            <div className='caixa-portfolio'>
              {servicos.length > 0 ? (
                servicos.map(servico => (
                  <Servico
                    key={servico.id} 
                    idServicoAtual={servico.id}
                    ocasiao={'meu-servico-editar'}
                    nomeServico={servico.nomeServico}
                    nomeEmpresa={usuario.razaoSocial}
                    descricao={servico.descricao}
                    valorMedio={servico.valor}
                    areaESG={servico.areaAtuacaoEsg.toLowerCase()}
                    fkPrestadoraServico={servico.fkPrestadoraServico}
                    setComponente={setComponente}
                  />
                ))
              ) : (
                <p>Nenhum serviço cadastrado.</p>
              )}
            </div>
          </div>
        ) : (
          <AdicionarServico setComponente={setComponente} />
        )}
      </>
    )
  }

  export default Servicos;