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
    mediaFuncionarios: "",
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
    return dado.replace(/[^\w]/g, '');
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

            if (numeroFuncionarios.length >= 1) {
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

          api.post('/v1.0/empresas', empresaData)

            .then(response => {
              console.log(response.data)

              console.log('Cadastro realizado com sucesso!');
              mudarEtapa(etapaAtual + 1, e);
            })
            .catch(error => {
              // Lide com erros da solicitação aqui
              console.error(error);

              setErro(true)
              console.log('erro', error.response.data.detail)

              
              if(error.response.data.detail == 'Cnpj inválido') {
                setMensagemErro('Insira um CNPJ válido')   
              }else{
                setMensagemErro('CNPJ já cadastrado')          
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


  const verificarCampos = (e) => {

    if (etapaAtual == 0) {
      let campoCNPJ = removerCaracteresEspeciais(data.cnpj).length < 14;
      let campoAreaAtuacao = data.areaAtuacao == '';
      let campoQuantidadeFuncionarios = data.mediaFuncionarios == '';

      if (campoCNPJ || campoAreaAtuacao || campoQuantidadeFuncionarios) {
        setErro(true);
        let mensagensErro = '';

        if (campoCNPJ) mensagensErro += 'Número de caracteres do CNPJ é inválido\n';
        if (campoAreaAtuacao) mensagensErro += 'Selecione uma Área de Atuação\n';
        if (campoQuantidadeFuncionarios) mensagensErro += 'Selecione um Nº de Funcionários';

        mensagensErro = mensagensErro.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);

        setMensagemErro(mensagensErro);

      } else {
        setMensagemErro('')
        mudarEtapa(etapaAtual + 1);
      }
    }

    if (etapaAtual == 1) {
      let campoTelefone = removerCaracteresEspeciais(data.telefone).length < 11;
      let email = !data.email.includes('@') || !data.email.includes('.com')


      if (campoTelefone || email) {
        setErro(true)
        let mensagensErro = '';

        if (campoTelefone) mensagensErro += 'Digite um número de telefone válido!\n'
        if (email) mensagensErro += 'Digite um email válido!\n'
        mensagensErro = mensagensErro.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);

        setMensagemErro(mensagensErro);
      } else {
        setMensagemErro('')
        mudarEtapa(etapaAtual + 1);
      }
    }

    if (etapaAtual == 2) {
      let senha = data.senha == ''
      let confirmacaoSenha = data.confirmacaoSenha != data.senha

      console.log(senha);
      console.log(confirmacaoSenha);

      if (senha || confirmacaoSenha) {
        setErro(true)
        let mensagensErro = ''

        if (senha) mensagensErro += 'Digite uma senha!\n'
        if (confirmacaoSenha) mensagensErro += 'As senhas não coincidem!\n'
        mensagensErro = mensagensErro.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br /></React.Fragment>);

        setMensagemErro(mensagensErro);
      } else {
        setMensagemErro('')

        cadastrar(e);
      }

    }
  }
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

        verificarCampos(e);

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
    </div >
  )
}

export default Cadastro