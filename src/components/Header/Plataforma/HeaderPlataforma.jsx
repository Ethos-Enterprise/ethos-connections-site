import React from 'react'

//css
import './HeaderPlataforma.css'

//imagens
import Logo from '../../../assets/logoBranco.png'
import Usuario from '../../../assets/icones/perfil-de-usuario.png'
import Notificacao from '../../../assets/icones/notificacao.png'
import IconeDropdownFechado from'../../../assets/icones/icone-dropdown-fechado.png';
import IconeDropdownAberto from'../../../assets/icones/icone-dropdown-aberto.png';

//router
import { useNavigate, Link } from 'react-router-dom';

const HeaderPlataforma = (props) => {
    const navigate = useNavigate();
    const username = sessionStorage?.getItem('email');

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/entrar');
    };


    return (
        < div className='caixa-header'>
            <header className='header-plataforma'>
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
                        <span>{props.razaoSocial}</span>
                        <img src={IconeDropdownFechado} alt="icone dropdown" className='icone-dropdown' />

                        <ul className="usuario-lista">

                            <Link to={'/meu-perfil'} className='link-dropdown'>
                                <li>
                                    Meu Perfil
                                </li>
                            </Link>

                            <Link to={"/minhas-interacoes"} className='link-dropdown'>
                            <li>Minhas Interações</li>
                            </Link>
                            
                            <Link to={"/meu-plano"} className='link-dropdown'>
                            <li>Meu Plano</li>
                            </Link>
                            
                            <li onClick={handleLogout}>Sair</li>

                        </ul>
                    </div>

                </div>


            </header>

        </div>
    )
}

export default HeaderPlataforma