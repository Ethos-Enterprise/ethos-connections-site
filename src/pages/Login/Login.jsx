import React from 'react'

//css
import './Login.css'

//api
import api from "../../service/api";

//imagens
import IconeLogo from '../../assets/iconeLogo- branco.png';
import FotoLogin from '../../assets/foto-login.png';

//componentes
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';

//coisas do react
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

//hook 
import { useUsuario } from '../../hooks/Usuario';
import axios from 'axios';

function verificar(event) {
  const input = event.target;
  const label = input.parentElement.querySelector("label");

  if (input.value.trim() !== "") {
    label.classList.add("caractere-digitado-label");
  } else {
    label.classList.remove("caractere-digitado-label");
  }
}

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  // caso esteja errado email ou senha isto mudará de cor
  const [erro, setErro] = useState(false);
  const [mensagemErro, setMensagemErro] = useState('');

  //colocar função do hook Usuario
  const { atualizarUsuario } = useUsuario();

  const { usuario } = useUsuario();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Verifica se o email e senha foram preenchidos
      if (email !== '' && senha !== '') {
        // Autentica o usuário
        const responseLogin = await api.post('v1.0/auth/login', {
          email: 'admin@ethos',
          password: '123'
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        // Se a autenticação for bem-sucedida
        if (responseLogin.status === 200 && responseLogin.data?.token) {
          sessionStorage.setItem('authToken', responseLogin.data.token);
          const authToken = sessionStorage.getItem('authToken');
  
          // Faz a requisição para buscar os dados do usuário logado
          const responseEmpresas = await api.get(`/v1.0/empresas/login/${email}/${senha}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            }
          });
  
          console.log('Login realizado com sucesso!');
          console.log(responseEmpresas.data);
  
          // Atualiza o estado do usuário com os dados retornados pela API de empresas
          atualizarUsuario(responseEmpresas.data);
  
          // Mostra o alerta de sucesso de login
          await Swal.fire({
            icon: "success",
            text: "Login feito com sucesso!",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            showClass: {
              popup: 'animated fadeInDown faster'
            }
          });
  
          // Após o sucesso do login, faz a requisição para buscar as prestadoras
          const responsePrestadoras = await api.get('/v1.0/prestadoras', {
            headers: {
              Authorization: `Bearer ${authToken}`,
            }
          });
          console.log(' PRESTADORA  ');
          console.log(responsePrestadoras.data);
  
          // Verifica se o usuário é uma prestadora
          const prestadoraCorrespondente = responsePrestadoras.data.find(prest => prest.fkEmpresa === responseEmpresas.data.id);
  
          if (prestadoraCorrespondente) {
            console.log('Usuário é uma prestadora:', prestadoraCorrespondente);
  
            // Atualiza o estado do usuário com o id da prestadora e o plano
            atualizarUsuario(prevState => ({ ...prevState, idPrestadora: prestadoraCorrespondente.idPrestadora }));
            atualizarUsuario(prevState => ({ ...prevState, plano: "Provider" }));
  
            // Redireciona para a página de soluções ESG
            navigate('/solucoes-esg');
          } else {
            console.log('Usuário não é uma prestadora.');
  
            // Atualiza o estado do usuário com o plano Free
            atualizarUsuario(prevState => ({ ...prevState, plano: "Free" }));
  
            // Redireciona para a página de escolha de plano
            navigate('/escolha-plano');
          }
        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      } else {
        setErro(true);
        setMensagemErro('Preencha todos os campos!');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      if (error.response && error.response.data.status === 404) {
        setErro(true);
        setMensagemErro('Email ou senha incorretas!');
      }
    }
  };
  

  return (
    <div className={`fundo ${erro ? 'erro' : ''}`}>
      <Link to="/" className='link-voltar'>
        <ButtonFilled acao={" < "} />
      </Link>



      <form className='formulario' onSubmit={handleSubmit}>
        <div className='imagem'>
          <img src={IconeLogo} alt="icone logo" />
        </div>

        <h2>Faça login na Ethos</h2>

        {erro ? (
          <h4 className='erro-login'>{mensagemErro}</h4>
        ) : (null)}

        <div className="input">
          <input
            type="text"
            id='email'
            onInput={verificar}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email"><span>Email</span></label>
        </div>

        <div className="input">
          <input
            type="password"
            id='senha'
            onInput={verificar}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}

          />
          <label htmlFor="senha"><span>Senha</span></label>
        </div>

        <Link to="" className='link-pagina'>Esqueceu a senha?</Link>

        <ButtonFilled acao={"Entrar"} type="submit" />

        <div className='tracinhos'>
          <div className='tracinho' />
          <span>ou</span>
          <div className='tracinho' />
        </div>

        <p>Ainda não é cadastrado? <Link to="/cadastrar" className='link-pagina'>Criar Conta</Link> </p>
      </form>

      <div className='imagem-lateral'>
        <img src={FotoLogin} alt="" />
      </div>

    </div>
  )
}

export default Login
