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

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/escolha-plano');

    
    console.log(email, senha)

    if (email != '' && senha != '') {

      api.post('/auth/login', {
        email: 'admin@ethos',
        password: '123'
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response.data);
          if (response.status === 200 && response.data?.token) {
            sessionStorage.setItem('authToken', response.data.token);

            const authToken = sessionStorage.getItem('authToken');

            //requisição login pegar dados do input e passar o token tb
            api.get(`/v1.0/empresas/login/${email}/${senha}`, {
              headers: {
                Authorization: `Bearer ${authToken}`,
              }
            })
              .then(response => {
                console.log('Login realizado com sucesso!');
                atualizarUsuario(response.data);

                Swal.fire({
                  icon: "success",
                  text: "Login feito com sucesso!",
                  showConfirmButton: false,
                  timer:2000,
                  timerProgressBar: true,  
                  showClass: {
                    popup: 'animated fadeInDown faster' 
                  },
                  didClose: () => {
                    navigate('/escolha-plano');
                }
                });

              })
              .catch(error => {
                if (error.response.data.status == 404) {
                  setErro(true);
                  setMensagemErro('Email ou senha incorretas!')
                }
                console.error('Erro no login : ', error.response.data.detail);
              });

          } else {
            throw new Error('Ops! Ocorreu um erro interno.');
          }
        })
        .catch(error => {

          console.log('erro na autenticação');
          console.log(error);
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
