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

import { useState, useEffect } from 'react';

const HeaderPlataforma = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const username = sessionStorage?.getItem('email');

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/entrar');
    };

    const [novaNotificacao, setNovaNotificacao] = useState(false);
    const [dropdownNotificacaoAberto, setDropdownNotificacaoAberto] = useState(false);


    useEffect(() => {
        let timer;

        if (props.plano === 'Provider' && location.pathname !== '/minhas-negociacoes') {
            timer = setTimeout(() => {
                setNovaNotificacao(true);
            }, 2000);
        }

        return () => clearTimeout(timer);
    }, [props.plano, location]);

    const irParaNegociacoes = () => {
        navigate('/minhas-negociacoes');
        setNovaNotificacao(false);
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
                        <Link to={'/minhas-interacoes#contatos'} className={`link-header ${location.pathname.includes('/minhas-interacoes') ? 'opcaoHeaderAtivo' : ''}`}>Minhas Interações</Link >
                        <Link className='link-header'>Aplicativo Ethos</Link >
                    </ul>
                )
                }

                {props.plano == 'Analytics' && (
                    <ul>
                        <Link to='/solucoes-esg' className={`link-header ${location.pathname.includes('/solucoes-esg') ? 'opcaoHeaderAtivo' : ''}`}>Soluções ESG </Link>
                        <Link to='/meu-progresso' className={`link-header ${location.pathname.includes('/meu-progresso') ? 'opcaoHeaderAtivo' : ''}`}>Meu Progresso</Link>
                        <Link to={'/minhas-interacoes#contatos'} className={`link-header ${location.pathname.includes('/minhas-interacoes') ? 'opcaoHeaderAtivo' : ''}`}>Minhas Interações</Link >
                    </ul>
                )
                }

                {props.plano == 'Provider' && (
                    <ul>

                        <Link to='/solucoes-esg' className={`link-header ${location.pathname.includes('/solucoes-esg') ? 'opcaoHeaderAtivo' : ''}`}>Soluções ESG </Link>
                        <Link to='/minhas-negociacoes' className={`link-header ${location.pathname.includes('/minhas-negociacoes') ? 'opcaoHeaderAtivo' : ''}`}>Minhas Negociações</Link>
                        <Link to={'/minhas-interacoes#contatos'} className={`link-header ${location.pathname.includes('/minhas-interacoes') ? 'opcaoHeaderAtivo' : ''}`}>Minhas Interações</Link >

                    </ul>
                )
                }
                <div className='caixa-dropdown'>
                    <div className='dropDown' onMouseOver={() => props.plano === 'Provider' && setDropdownNotificacaoAberto(true)} onMouseLeave={() => setDropdownNotificacaoAberto(false)}>
                        <div className={`icone-notificacao-container ${novaNotificacao ? 'icone-notificacao-container-nova' : ''}`}>
                            <img src={Notificacao} alt="icone de notificação" className='icone-notificacao' />
                            {novaNotificacao && <div className="bolinha-notificacao"></div>}
                        </div>
                        <span className={`texto-notificacao ${novaNotificacao ? 'texto-notificacao-nova' : ''}`}>Notificações</span>
                        {dropdownNotificacaoAberto && (
                            <ul className="usuario-lista">
                                <li onClick={irParaNegociacoes}>Contato : Empresa SPTECH entrou em contato com você</li>
                            </ul>
                        )}
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
