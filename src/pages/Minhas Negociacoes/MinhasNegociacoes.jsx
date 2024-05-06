import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//react router dom
import { Link } from 'react-router-dom'

//hook
import { useUsuario } from '../../hooks/Usuario'

//css
import './MinhasNegociacoes.css'
import LinhaContato from './LinhaContato/LinhaContato'

//api
import api from "../../service/api";

import { useState, useEffect } from 'react';

const MinhasNegociacoes = () => {
    const { usuario } = useUsuario();

    const [interacoes, setInteracoes] = useState([]);


    useEffect(() => {
        const interacoesJSON = JSON.parse(sessionStorage.getItem('interacoesPrestadora') || '[]');
        setInteracoes(interacoesJSON);
    }, []);

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'interacoesPrestadora') {
                const interacoesJSON = JSON.parse(event.newValue);
                setInteracoes(interacoesJSON);
            }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [setInteracoes]);
  
    return (
        <div>
            <HeaderPlataforma
                plano={usuario.plano}
                razaoSocial={usuario.razaoSocial}
            />

            <div className="conteudo">
                <div className='beadcrumb'>
                    <Link className='link-beadcrumb-atual'>
                        <span>Minhas Negociações </span>
                    </Link>
                </div>

                <div className="container-minhas-negociacoes">
                    <h2 className='titulo-pagina'>Status das Negociações</h2>
                    <div className='tracinho-divisor'></div>

                    <div className='container-status-negociacoes'>
                        <div className='status'>
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Pendente</label>
                        </div>

                        <div className='status'>
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Em andamento</label>
                        </div>


                        <div className='status'>
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Finalizada</label>
                        </div>


                    </div>

                    <div className='tracinho-divisor'></div>

                    <div className='container-negociacoes'>

                        <h2 className='titulo-controle-negociacoes'>Controle de Negociações</h2>
                        <div className='tracinho-divisor'></div>


                        <div className='titulos-tabela-negociacao'>
                            <div className='titulo-nome-empresa'>
                                Nome da Empresa
                            </div>

                            <div className='titulo-nome-servico'>
                                Serviço
                            </div>

                            <div className='titulo-contato'>
                                Data de contato
                            </div>

                            <div className='titulo-status-atual'>
                                Status Atual
                            </div>


                            <div className='titulo-final'>

                            </div>

                        </div>
                        <div className='tracinho-divisor-negociacoes'></div>

                        {interacoes.length > 0 ? (
                            interacoes.map((interacao, index) => (
                                <LinhaContato
                                    key={index}
                                    nomeEmpresa={interacao.nomeEmpresa}
                                    nomeServico={interacao.nomeServico}
                                    dataContato={interacao.data}
                                    statusAtual={interacao.status}
                                />
                            ))
                        ) : (
                            <p className='vazio-negocios'>Não há Negociações</p>
                        )}


                    </div>

                </div>

            </div>

            <FooterPlataforma />

        </div>
    )
}

export default MinhasNegociacoes