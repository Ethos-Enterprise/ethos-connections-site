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
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';

const Cadastro = () => {

    // caso algo esteja errado aparecerá uma mensagem
    const [erro, setErro] = useState(false);
    const [mensagemErro, setMensagemErro] = useState('');

  const formTemplate = {
    nomeEmpresa: "",
    cnpj: "",
    areaAtuacao: "",
    mediaFuncionarios: "" ,
    cep: "",
    telefone: "",
    email: "",
    senha: "",
    confirmacaoSenha: "",
    newsletter: false,
    termosDeUso: false,
  }
  const [data, setData] = useState(formTemplate);

  // console.log(data);


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
  
  function removerCaracteresEspeciais(dado) {
    return dado.replace(/[^\w\s]/g, '');
}


  const cadastrar = (e) => {
    e.preventDefault();


    api.post('/auth/login', {
      email: 'admin@ethos',
      password: '123'
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(response => {
        console.log('autenticacao jwt STATUS: ', response.status);
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem('authToken', response.data.token);

          const authToken = sessionStorage.getItem('authToken');

          // VOU FORMATAR O NUMERO DE FUNCIONARIOOOOS
          let numeroFuncionarios = '';
  
          if (data.mediaFuncionarios != null) {
              numeroFuncionarios = data.mediaFuncionarios.match(/(\d+)/g);
            console.log('Peguei este numero ' + numeroFuncionarios);
        
            if(numeroFuncionarios.length >= 1) {
              numeroFuncionarios = numeroFuncionarios[1];
            console.log('atualizei para ' + numeroFuncionarios);
            }
            
          }

          // Agora, faz uma solicitação para cadastrar a empresa
          const empresaData = {
            razaoSocial: data.nomeEmpresa,
            cnpj: removerCaracteresEspeciais(data.cnpj),
            telefone: removerCaracteresEspeciais(data.telefone),
            email: data.email,
            senha: data.senha,
            setor: data.areaAtuacao,
            qtdFuncionarios: numeroFuncionarios,
            assinanteNewsletter: data.newsletter
          };

          console.log(empresaData);

          api.post('/v1.0/empresas', empresaData, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })

            .then(response => {
              // Lide com a resposta da API aqui

              console.log(response.data)

              console.log('Cadastro realizado com sucesso!');
              mudarEtapa(etapaAtual + 1, e); 
            })
            .catch(error => {
              // Lide com erros da solicitação aqui
              console.error(error);

              if(error.response.data.status) {

              }


            });

        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      })
      .catch(error => {
        console.log('erro ao acessar api' + error.message);
      });
  };

  return (
    <div className='fundo-cadastro'>
      <Link to="/" className='link-voltar'>
        <ButtonFilled acao={" < "} />
      </Link>

      <div className='imagem-lateral-cadastro'>
        <img src={FotoCadastro} alt="" />

        <p>Já tem uma conta? <Link to="/entrar" className='link-pagina'>Faça login</Link> </p>
      </div>

      <form className='formulario-cadastro' onSubmit={(e) => {
        e.preventDefault();
        if (ultimoPasso) {
          cadastrar(e); 
        } else {
          mudarEtapa(etapaAtual + 1, e);  
        }
      }}>

        {!esconderBotoes ? (
          <>
            <div className='imagem'>
              <img src={IconeLogo} alt="icone logo" />
            </div>


            <h2>Cadastro de Empresa</h2>
            <Progresso etapaAtual={etapaAtual} />
          </>
        ) : null}

        {erro ? (
          <h4 className='erro-cadastro'>{mensagemErro}</h4>
        ) : (null)}

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
      <p className='link-pagina-mobile'>Já tem uma conta? <Link to="/entrar" className='link-pagina'>Faça login</Link> </p>
      </form>
    </div>
  )
}

export default Cadastro