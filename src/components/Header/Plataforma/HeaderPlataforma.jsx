import React from 'react'
import './HeaderPlataforma.css'
import Logo from '../../../assets/logoBranco.png'
import Usuario from '../../../assets/icones/perfil-de-usuario.png'
import Notificacao from '../../../assets/icones/notificacao.png'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'

const HeaderPlataforma = (props) => {
    const navigate = useNavigate();
    const username = sessionStorage?.getItem('email');

    const handleLogout = () => {
      sessionStorage.removeItem('authToken');
      sessionStorage.removeItem('email');
      navigate('/entrar');
  };


    return (
        <>
            <header>
                <img src={Logo} alt="LOGO" className='logo' />

                <ul>
                    <Link to={props.link1} className='link-header'>{props.titulo1}</Link >
                    <Link to={props.link2} className='link-header'>{props.titulo2}</Link >
                    <Link to={props.link3} className='link-header'>{props.titulo3}</Link >
                </ul>

                <div className='caixa-dropdown'>
                    <div className='dropDown'>
                        <img src={Notificacao} alt="icone de notificação" />
                        <span>Notificações</span>
                    </div>

                    <div className="dropDown" >
                        <img src={Usuario} alt="icone de usuario" />
                        <span>NomeUsuario</span>

                        <ul className="usuario-lista">
                            <li>Meu Perfil</li>
                            <li>Minhas Interações</li>
                            <li>Meu Plano</li>
                            <li onClick={handleLogout}>Sair</li>

                        </ul>
                    </div>

                </div>


            </header>

        </>
    )
}

export default HeaderPlataforma