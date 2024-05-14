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

  const handleSubmit = (e) => {

    e.preventDefault();
    if (email != '' && senha != '') {

      api.post('/v1.0/auth/login', {
        email: 'admin@ethos',
        password: '123'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log('DEU CERTO');

          console.log(response);
          if (response.status === 200 && response.data?.token) {
            sessionStorage.setItem('authToken', response.data.token);

            const authToken = sessionStorage.getItem('authToken');

            console.log(authToken);

            api.get(`/v1.0/empresas/login/${email}/${senha}`, {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
              }
            })
              .then(response => {
                console.log('Login realizado com sucesso!');
                atualizarUsuario(response.data.token);

                Swal.fire({
                  icon: "success",
                  text: "Login feito com sucesso!",
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  showClass: {
                    popup: 'animated fadeInDown faster'
                  }
                });

                const responsePrestadoras = api.get('/v1.0/prestadoras', {
                  headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                  }
                });
                console.log(' PRESTADORA  ');
                console.log(responsePrestadoras.data);

                const prestadoraCorrespondente = responsePrestadoras.data.find(prest => prest.fkEmpresa === responseLogin.data.id);

                if (prestadoraCorrespondente) {
                  console.log('Usuário é uma prestadora:', prestadoraCorrespondente);

                  atualizarUsuario(prevState => ({ ...prevState, idPrestadora: prestadoraCorrespondente.idPrestadora }));
                  atualizarUsuario(prevState => ({ ...prevState, plano: "Provider" }));

                  navigate('/solucoes-esg');
                } else {
                  console.log('Usuário não é uma prestadora.');
                  atualizarUsuario(prevState => ({ ...prevState, plano: "Free" }));

                  navigate('/escolha-plano');
                }

              })
              .catch(error => {
                // if (error.response.data.status == 404) {
                //   setErro(true);
                //   setMensagemErro('Email ou senha incorretas!')
                // }
                console.error('Erro no login : ', error.response);
              });

          } else {
            throw new Error('Ops! Ocorreu um erro interno.');
          }
        })
        .catch(error => {
          if (error.response) {
            console.error('Erro na chamada da API:', error.response);
        
            if (error.response.status === 401) {
              console.error('Token JWT inválido ou expirado');
            } else if (error.response.status === 404) {
              console.error('Recurso não encontrado');
            } else {
              console.error('Erro HTTP:', error.response.status);
            }
          } else if (error.request) {
            console.error('Erro na requisição:', error.request);
          } else {
            console.error('Erro ao configurar a requisição:', error.message);
          }
        });
    } else {
      setErro(true);
      setMensagemErro('Preencha todos os campos!');
    };

  }

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
