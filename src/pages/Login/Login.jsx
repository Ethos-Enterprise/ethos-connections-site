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
      const responseLogin = await api.get(`/v1.0/empresas/login/${email}/${senha}`);
      // console.log('Login realizado com sucesso!');
      // console.log(responseLogin.data);

      // Atualiza o estado do usuário imediatamente com os dados de login.
      atualizarUsuario(responseLogin.data);

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
      const responsePrestadoras = await api.get('/v1.0/prestadoras');
      // console.log(' PRESTADORA  ');
      // console.log(responsePrestadoras.data);

      const prestadoraCorrespondente = responsePrestadoras.data.find(prest => prest.fkEmpresa === responseLogin.data.id);

      if (prestadoraCorrespondente) {
        console.log('Usuário é uma prestadora:', prestadoraCorrespondente);

        atualizarUsuario(prevState => ({ ...prevState, idPrestadora: prestadoraCorrespondente.idPrestadora }));
        atualizarUsuario(prevState => ({ ...prevState, plano: "Provider" }));

        // const timer = setTimeout(() => {
        //     console.log('TEMPO PARA COISAR NOTIFCAOAA');
        //     const novaInteracao = {
        //         nomeEmpresa: "SPTECH",
        //         nomeServico: "Serviço POC",
        //         data: new Date().toISOString().split('T')[0],
        //         status: "PENDENTE"
        //     };

        //     setInteracoes((interacoes) => [...interacoes, novaInteracao]);
        //     sessionStorage.setItem('novaNotificacao', 'true'); 
        // }, 500);

        // return () => clearTimeout(timer);


        navigate('/solucoes-esg');
      } else {
        console.log('Usuário não é uma prestadora.');
        atualizarUsuario(prevState => ({ ...prevState, plano: "Free" }));

        navigate('/escolha-plano');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      if (error.response && error.response.data.status === 404) {
        setErro(true);
        setMensagemErro('Email ou senha incorretas!');
      }
    }
  };


  // const handleSubmit = (e) => {

  //   e.preventDefault();
  //   if (email != '' && senha != '') {

  // axios.post('http://54.147.32.243:3000/realms/ethos/protocol/openid-connect/token', {
  //   client_id: 'admin_ethos',
  //   client_secret: '6YKUFiGxXBiYyRod2CqgMMEQ3bkV91mr',
  //   grant_type: 'client_credentials',
  //   authorization_code: 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqWlRjenNjSHJsSUFDYV9VWW00SXMySTZyWHM4Wml5cE5vVnBGR3lMVDJBIn0.eyJleHAiOjE3MDgwNDY5NjcsImlhdCI6MTcwODA0MzM2NywianRpIjoiMTQxMjJlMGYtNThmNS00NDIzLWFmMzItMjVlNjZmMmMzOWY3IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL3JlYWxtcy9ldGhvcyIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3MTllZTQ0MS03ZWU3LTQ0N2QtODgxMS01MDc3MDI2NGRiNDUiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbl9ldGhvcyIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiLyoiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtZXRob3MiLCJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWRtaW5fZXRob3MiOnsicm9sZXMiOlsidW1hX3Byb3RlY3Rpb24iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE3Mi4yMy4wLjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtYWRtaW5fZXRob3MiLCJjbGllbnRBZGRyZXNzIjoiMTcyLjIzLjAuMSIsImNsaWVudF9pZCI6ImFkbWluX2V0aG9zIn0.y9-eyAtAE0GZgArhg-E5DVfKYAUti1PcJ7Rh8iXKHuoUVFvXfo3SjOWfyrbIT6oHULz1K1PEvGMGgW1NXqvsBTqdQhdL8G6418HbuYSDxTqdmQa8odPHwLTH1hgVREGWS4ad-PFqQTllgGDMNqpaTt5NjR8xiPhb1IOflgRkMnVIK95T5GE_Qv725m5KVJBDOPrt_yF7oogYRxkOiBVFeQTQb-jy1vT08kWgTfMb8LoEpTDKE5HBUpsCLJ04XGDwfeKRmGQZP0JYeuknxATGShwAZ9XCgVFRFzzvKo0QJB4CV9UiiCgl6KsahhD5nga19G0ISD0tWNwPh61Hm-t2lA'
  // }, {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   }
  // })
  //   .then(response => {
  // console.log('DEU CERTO');

  // console.log(response);
  // if (response.status === 200 && response.data?.access_token) {
  // sessionStorage.setItem('authToken', response.data.access_token);

  // const authToken = sessionStorage.getItem('authToken');

  // console.log(authToken);

  //requisição login pegar dados do input e passar o token tb
  // api.get(`/v1.0/empresas/login/${email}/${senha}`)
  //   .then(response => {
  //     console.log('Login realizado com sucesso!');
  //     atualizarUsuario(response.data);

  //     Swal.fire({
  //       icon: "success",
  //       text: "Login feito com sucesso!",
  //       showConfirmButton: false,
  //       timer: 2000,
  //       timerProgressBar: true,
  //       showClass: {
  //         popup: 'animated fadeInDown faster'
  //       }
  //     });

  //     const responsePrestadoras = await api.get('/v1.0/prestadoras');
  //     console.log(' PRESTADORA  ');
  //     console.log(responsePrestadoras.data);

  //     const prestadoraCorrespondente = responsePrestadoras.data.find(prest => prest.fkEmpresa === responseLogin.data.id);

  //     if (prestadoraCorrespondente) {
  //       console.log('Usuário é uma prestadora:', prestadoraCorrespondente);

  //       atualizarUsuario(prevState => ({ ...prevState, idPrestadora: prestadoraCorrespondente.idPrestadora }));
  //       atualizarUsuario(prevState => ({ ...prevState, plano: "Provider" }));

  //       navigate('/solucoes-esg');
  //     } else {
  //       console.log('Usuário não é uma prestadora.');
  //       atualizarUsuario(prevState => ({ ...prevState, plano: "Free" }));

  //       navigate('/escolha-plano');
  //     }

  //   })
  //   .catch(error => {
  //     if (error.response.data.status == 404) {
  //       setErro(true);
  //       setMensagemErro('Email ou senha incorretas!')
  //     }
  //     console.error('Erro no login : ', error.response);
  //   });

  // } else {
  //   throw new Error('Ops! Ocorreu um erro interno.');
  // }
  // }).catch(error => {

  //   console.log('erro na autenticação');
  //   console.log(error);
  // });
  // } else {
  //   setErro(true);
  //   setMensagemErro('Preencha todos os campos!');
  // };



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
