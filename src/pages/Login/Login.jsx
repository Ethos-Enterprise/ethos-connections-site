import React from 'react'
import './Login.css'

import api from "../../service/api";

import IconeLogo from '../../assets/iconeLogo- branco.png';
import FotoLogin from '../../assets/foto-login.png';

import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';

import { Link } from 'react-router-dom'

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';


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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, senha)

    api.post('/login', {
      email: email,
      password: senha
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

      .then(response => {
        console.log(response);
        if (response.status === 200 && response.data?.token) {
          sessionStorage.setItem('authToken', response.data.token);

          console.log('Login realizado com sucesso!');
          navigate('/pagina-inicial');
        } else {
          throw new Error('Ops! Ocorreu um erro interno.');
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className='fundo'>

      <form className='formulario' onSubmit={handleSubmit}>
        <div className='imagem'>
          <img src={IconeLogo} alt="icone logo" />
        </div>

        <h2>Faça login na Ethos</h2>

        <div className="input">
          <input
            type="text"
            id='email'
            onInput={verificar}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="seuInput"><span>Email</span></label>
        </div>

        <div className="input">
          <input
            type="password"
            id='senha'
            onInput={verificar}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}

          />
          <label htmlFor="seuInput"><span>Senha</span></label>
        </div>

        <Link to="" className='link-pagina'>Esqueceu a senha?</Link>

        <ButtonFilled acao={"Entrar"} type="submit" />

        <div className='tracinhos'>
          <div className='tracinho' />
          <span>ou</span>
          <div className='tracinho' />
        </div>

        <p>Ainda não é cadastrado? <Link to="" className='link-pagina'>Criar Conta</Link> </p>
      </form>

      <div className='imagem-lateral'>
        <img src={FotoLogin} alt="" />
      </div>

    </div>
  )
}

export default Login