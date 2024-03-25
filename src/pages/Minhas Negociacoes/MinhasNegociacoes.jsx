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
        const fetchData = async () => {
            try {
                const responseServicos = await api.get(`/v1.0/servicos`);
                const servicosEmpresa = responseServicos.data.filter(servico => servico.fkPrestadoraServico === usuario.idPrestadora);

                let todasInteracoes = [];

                for (const servico of servicosEmpresa) {
                    const interacoesResponse = await api.get(`/v1.0/interacoes/servico/${servico.id}`);
                    for (const interacao of interacoesResponse.data) {
                        const empresaResponse = await api.get(`/v1.0/empresas/${interacao.fkEmpresa}`);
                        todasInteracoes.push({
                            ...interacao,
                            nomeEmpresa: empresaResponse.data.razaoSocial,
                            nomeServico: servico.nomeServico,
                            dataContato: interacao.createdAt
                        });
                    }
                }

                setInteracoes(todasInteracoes);
            } catch (error) {
                console.error("Erro ao buscar dados das interações e empresas:", error);
            }
        };
        fetchData();

        const timer = setTimeout(() => {
            console.log('TEMPO PARA COISAR NOTIFCAOAA');
            const novaInteracao = {
                nomeEmpresa: "SPTECH",
                nomeServico: "Serviço POC",
                data: new Date().toISOString().split('T')[0],
                status: "PENDENTE"
            };
    
            setInteracoes((interacoes) => [...interacoes, novaInteracao]);
            sessionStorage.setItem('novaNotificacao', 'true'); 
        }, 500);
    
        return () => clearTimeout(timer);

    }, [usuario.idPrestadora]);


    console.log(interacoes);

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