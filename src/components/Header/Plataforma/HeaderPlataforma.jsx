import React from 'react'

//css
import './HeaderPlataforma.css'

//imagens
import Logo from '../../../assets/logoBranco.png'
import Usuario from '../../../assets/icones/perfil-de-usuario.png'
import Notificacao from '../../../assets/icones/notificacao.png'
import IconeDropdownFechado from '../../../assets/icones/icone-dropdown-fechado.png';
import IconeDropdownAberto from '../../../assets/icones/icone-dropdown-aberto.png';

//router
import { useNavigate, Link, useLocation } from 'react-router-dom';

const HeaderPlataforma = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const username = sessionStorage?.getItem('email');

    const handleLogout = () => {
        sessionStorage.clear();
        navigate('/entrar');
    };


    return (
        < div className='caixa-header'>
            <header className='header-plataforma'>

                <Link to={'/solucoes-esg'}>
                <img src={Logo} alt="LOGO" className='logo' />
                </Link>
                {props.plano == 'Free' && (
                    <ul>
                        <Link to='/solucoes-esg' className={`link-header ${location.pathname.includes('/solucoes-esg') ? 'opcaoHeaderAtivo' : ''}`}>Soluções ESG </Link>
                        <Link className='link-header'>Parceiro Ethos</Link >
                        <Link  className='link-header'>Aplicativo Ethos</Link >
                    </ul>
                )
                }

                {props.plano == 'Analytics' && (
                    <ul>
                        <Link to='/solucoes-esg' className={`link-header ${location.pathname.includes('/solucoes-esg') ? 'opcaoHeaderAtivo' : ''}`}>Soluções ESG </Link>
                        <Link to='/meu-progresso' className={`link-header ${location.pathname.includes('/meu-progresso') ? 'opcaoHeaderAtivo' : ''}`}>Meu Progresso</Link>
                        <Link  className='link-header'>Parceiro Ethos</Link >
                    </ul>
                )
                }

                {props.plano == 'Provider' && (
                    <ul>

                        <Link to='/solucoes-esg' className={`link-header ${location.pathname.includes('/solucoes-esg') ? 'opcaoHeaderAtivo' : ''}`}>Soluções ESG </Link>
                        <Link to='/minhas-negociacoes' className={`link-header ${location.pathname.includes('/minhas-negociacoes') ? 'opcaoHeaderAtivo' : ''}`}>Minhas Negociações</Link>
          
                        <Link  className='link-header'>Aplicativo Ethos</Link >
                    </ul>
                )
                }
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


                            {props.plano == 'Provider' ? (
                                <Link to={'/meu-portfolio'} className='link-dropdown'>
                                    <li>
                                        Meu Portfolio
                                    </li>
                                </Link>
                            ) : (

                                <Link to={'/minha-conta#meu-perfil'} className='link-dropdown'>
                                    <li>
                                        Meu Perfil
                                    </li>
                                </Link>
                            )
                            }

                            <Link to={"/minha-conta#minhas-interacoes#contatos"} className='link-dropdown'>
                                <li>Minhas Interações</li>
                            </Link>

                            <Link to={"/minha-conta#meu-plano"} className='link-dropdown'>
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