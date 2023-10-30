import React from 'react'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//css
import './Cadastro.css';

//assets
import FotoCadastro from '../../assets/foto-cadastro.png';
import IconeLogo from '../../assets/iconeLogo- branco.png';

//api
import api from "../../service/api";

//components só do cadastro
import Progresso from './Etapas/Progresso/Progresso';
import DadosGerais from './Etapas/DadosGerais/DadosGerais';
import EnderecoEContato from './Etapas/EnderecoEContato/EnderecoEContato';
import Senha from './Etapas/Senha/Senha';
import Agradecimento from './Etapas/Agradecimento/Agradecimento';

//hooks
import { formEtapas } from '../../hooks/FormEtapas';
import { useState } from 'react';

const Cadastro = () => {

  const formTemplate = {
    nomeEmpresa: "",
    cnpj: "",
    areaAtuacao: "Área de Atuação",
    mediaFuncionarios: "Nº de Funcionários",
    cep: "",
    telefone: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
    newsletter: ""
  }
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {

    setData((prev) => {
      return { ...prev, [key]: value }
    })
  }

  const etapas = [
    <DadosGerais data={data} updateFieldHandler={updateFieldHandler} />,
    <EnderecoEContato data={data} updateFieldHandler={updateFieldHandler} />,
    <Senha data={data} updateFieldHandler={updateFieldHandler} />,
    <Agradecimento />
  ];

  const { etapaAtual, etapaComponents, mudarEtapa, primeiraEtapa, ultimoPasso, esconderBotoes } = formEtapas(etapas);


  return (
    <div className='fundo-cadastro'>

      <div className='imagem-lateral-cadastro'>
        <img src={FotoCadastro} alt="" />
        <p>Já tem uma conta? <Link to="/entrar" className='link-pagina'>Faça login</Link> </p>
      </div>

      <form className='formulario-cadastro' onSubmit={(e) => mudarEtapa(etapaAtual + 1, e)}>
        {/* <p>{data.nomeEmpresa}</p>
        <p>{data.cnpj}</p>
        <p>{data.areaAtuacao}</p>
        <p>{data.mediaFuncionarios}</p>
        <p>{data.cep}</p>
        <p>{data.telefone}</p>
        <p>{data.email}</p>
        <p>{data.senha}</p>
        <p>{data.confirmacaoSenha}</p>
        <p>{data.newsletter}</p> */}


        {!esconderBotoes ? (
          <>
            <div className='imagem'>
              <img src={IconeLogo} alt="icone logo" />
            </div>


            <h2>Cadastro de Empresa</h2>
            <Progresso etapaAtual={etapaAtual} />
          </>
        ) : null}

        <div className='container-inputs'>
          {etapaComponents}
        </div>

        <div className='botoes-cadastro'>
          {!esconderBotoes ? (
            <>
              {etapaAtual > 0 ? (

                <button className='botao-borda' type="button" onClick={() => mudarEtapa(etapaAtual - 1)}>
                  Voltar
                </button>
              ) : (
                <button className='botao-desativado' type="button">
                  Voltar
                </button>
              )}

              {!ultimoPasso ? (
                <button className='botao-preenchido' type="submit">
                  Avançar
                </button>
              ) : (

                <button className='botao-preenchido' type="submit">
                  Cadastrar
                </button>
              )}
            </>
          ) : null}
        </div>
      </form>

    </div>
  )
}

export default Cadastro