import React from 'react'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//css
import './Cadastro.css';

//assets
import FotoCadastro from '../../assets/foto-cadastro.png';
import IconeLogo from '../../assets/iconeLogo- branco.png';

//api
import api from "../../service/api";

//components só do cadastro
import Progresso from './Etapas/Progresso/progresso';
import DadosGerais from './Etapas/DadosGerais/DadosGerais';
import EnderecoEContato from './Etapas/EnderecoEContato/EnderecoEContato';
import Senha from './Etapas/Senha/Senha';
import Agradecimento from './Etapas/Agradecimento/Agradecimento';

//hooks
import { formEtapas } from '../../hooks/FormEtapas';

const Cadastro = () => {

  const etapas = [
    <DadosGerais />,
    <EnderecoEContato />,
    <Senha />,
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

        {!esconderBotoes ? (
          <>
            <div className='imagem'>
              <img src={IconeLogo} alt="icone logo" />
            </div>

            <h2>Cadastro de Empresa</h2>
            <Progresso />
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