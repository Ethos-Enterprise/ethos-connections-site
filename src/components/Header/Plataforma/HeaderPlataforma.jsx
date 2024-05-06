import React from 'react'

//css
import './HeaderPlataforma.css'

//imagens
import Logo from '../../../assets/logoBranco.png'
import Usuario from '../../../assets/icones/perfil-de-usuario.png'
import Notificacao from '../../../assets/icones/notificacao.png'
import IconeDropdownFechado from '../../../assets/icones/icone-dropdown-fechado.png';
import IconeDropdownAberto from '../../../assets/icones/icone-dropdown-aberto.png';
import { useUsuario } from '../../../hooks/Usuario'

//router
import { useNavigate, Link, useLocation } from 'react-router-dom';

import { useState, useEffect } from 'react';

import api from "../../../service/api";

const HeaderPlataforma = (props) => {
    const navigate = useNavigate();

    const location = useLocation();

    const username = sessionStorage?.getItem('email');

    const { usuario } = useUsuario();

    const handleLogout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/entrar');
    };

    const [novaNotificacao, setNovaNotificacao] = useState(false);
    const [dropdownNotificacaoAberto, setDropdownNotificacaoAberto] = useState(false);


    // useEffect(() => {
    //     let timer;

    //     if (props.plano === 'Provider' && location.pathname !== '/minhas-negociacoes') {
    //         timer = setTimeout(() => {
    //             setNovaNotificacao(true);
    //         }, 5000);
    //     }

    //     return () => clearTimeout(timer);
    // }, [props.plano, location]);

    const irParaNegociacoes = () => {
        navigate('/minhas-negociacoes');
        setNovaNotificacao(false);
    };

    if (props.plano == "Provider" && location.pathname !== "/minhas-negociacoes") {
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const responseServicos = await api.get(`/v1.0/servicos`);
                    const servicosPrestadora = responseServicos.data.filter(servico => servico.fkPrestadoraServico === usuario.idPrestadora);

                    let todasInteracoes = [];

                    for (const servicoPrestadora of servicosPrestadora) {
                        const interacoesResponse = await api.get(`/v1.0/interacoes/servico/${servicoPrestadora.id}`);
                        for (const interacao of interacoesResponse.data) {
                            const empresaResponse = await api.get(`/v1.0/empresas/${interacao.fkEmpresa}`);
                            todasInteracoes.push({
                                ...interacao,
                                nomeEmpresa: empresaResponse.data.razaoSocial,
                                nomeServico: servicoPrestadora.nomeServico,
                                dataContato: interacao.createdAt
                            });
                        }
                    }

                    if (todasInteracoes.length === 0) {
                        todasInteracoes.push({
                            id: 0,
                            fkServico: 0,
                            fkEmpresa: 0,
                            status: "PENDENTE",
                            nomeEmpresa: "Empresa Fictícia",
                            nomeServico: "Serviço Fictício",
                            data: '06-05-2024' // Use a data atual como exemplo
                        });

                        sessionStorage.setItem('interacoesPrestadora', JSON.stringify(todasInteracoes));
                        setTimeout(() => {
                            setNovaNotificacao(true);
                        }, 3000)
                    } else {
                        sessionStorage.setItem('interacoesPrestadora', JSON.stringify(todasInteracoes));
                    }
                } catch (error) {
                    console.error("Erro ao buscar dados das interações e empresas:", error);
                }
            };

            fetchData();
        }, []);
    }


  

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
                        <div className={`icone-notificacao-container 
                        ${novaNotificacao ? 'icone-notificacao-container-nova' : ''}`}>
                            <img src={Notificacao} alt="icone de notificação" className='icone-notificacao' />
                            {novaNotificacao && <div className="bolinha-notificacao"></div>}
                        </div>
                        <span className={`texto-notificacao ${novaNotificacao ? 'texto-notificacao-nova' : ''}`}>Notificações</span>
                        {dropdownNotificacaoAberto && (
                            <ul className="usuario-lista">

                                {JSON.parse(sessionStorage.getItem('interacoesPrestadora') || '[]').map((interacao, index) => (
                                    <li key={index} onClick={irParaNegociacoes}>
                                        Contato: {interacao.nomeEmpresa} entrou em contato com você
                                    </li>
                                ))}
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
