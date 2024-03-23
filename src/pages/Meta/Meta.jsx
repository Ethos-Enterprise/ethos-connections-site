import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'

import { useState, useEffect } from 'react';

//hook
import { useUsuario } from '../../hooks/Usuario'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';

import { Link, useNavigate } from 'react-router-dom';

import FotoMeta from '../../assets/metaFoto.jpg'
import api from '../../service/api';

import './Meta.css'

export const Meta = () => {

    const { usuario } = useUsuario();

    const navigate = useNavigate();
    const cancelarCriacaoMeta = () => {
        navigate('/meu-progresso')
    }

    const [escolhaPilar, setEscolhaPilar] = useState('');
    const [descricao, setDescricao] = useState('');
    const [dataInicio, setDataInicio] = useState(new Date().toISOString().split('T')[0]);
    const [dataLimite, setDataLimite] = useState('');

    console.log(escolhaPilar);

    const salvarMeta = () => {
        console.log({
            escolhaPilar,
            descricao,
            dataInicio,
            dataLimite,
        });

        const dados = {
            pilarEsg: escolhaPilar,
            descricao: descricao,
            dataInicio: dataInicio,
            dataFim: dataLimite,
        };

        api.post('/v1.0/metas', dados)
            .then((response) => {
                console.log(response);
                console.log('meta');
                Swal.fire({
                    title: "Meta salva com sucesso!",
                    icon: "success",
                    timer: 1500
                }).then((result) => {
                    if (result.dismiss === Swal.DismissReason.timer) {
                      navigate('/meu-progresso');
                    }
                  });
            })
            .catch((error) => {
                console.log(error);
            })


    };

    return (
        <>
            <HeaderPlataforma
                plano={'Analytics'}
                razaoSocial={usuario.razaoSocial}
            />

            <div className="conteudo">

                <div className='beadcrumb'>
                    <Link to='/meu-progresso' className='link-beadcrumb'><span>Meu Progresso {'>'}</span>  </Link>
                    <Link to='/solucoes-esg/portfolio' className='link-beadcrumb-atual'><span>Portfólio</span>  </Link>
                </div>

                <div className='container-criar-meta'>
                    <h2 className='titulo-campo'>Defina sua meta!</h2>
                    <div className='tracinho-divisor'></div>

                    <div className='container-informacoes-pagina-meta'>


                        <img src={FotoMeta} alt="foto do metas" className='foto-pagina-meta' />

                        <div className='container-informacoes-meta'>

                            <h2 className='titulo-meta-pag'>Qual será a meta da sua empresa?</h2>
                            <div className='tracinho-divisor'></div>

                            <h2 className='titulo-criacao-meta'>Qual dos 3 pilares ESG sua empresa busca melhorar até o próximo ano?</h2>

                            <div className='opcoes-meta'>

                                <label htmlFor="ambiental" className='opcao-meta-definir'>
                                    <input
                                        className='opcao-meta'
                                        type="radio"
                                        name="pilarESG"
                                        id="ambiental"
                                        value="Ambiental"
                                        checked={escolhaPilar === "Ambiental"}
                                        onChange={(e) => setEscolhaPilar(e.target.value)}
                                    />
                                    Pilar Ambiental
                                </label>

                                <label htmlFor="social" className='opcao-meta-definir'>
                                    <input
                                        className='opcao-meta'
                                        type="radio"
                                        name="pilarESG"
                                        id="social"
                                        value="Social"
                                        checked={escolhaPilar === "Social"}
                                        onChange={(e) => setEscolhaPilar(e.target.value)}
                                    />
                                    Pilar Social
                                </label>

                                <label htmlFor="governamental" className='opcao-meta-definir'>
                                    <input
                                        className='opcao-meta'
                                        type="radio"
                                        name="pilarESG"
                                        id="governamental"
                                        value="Governamental"
                                        checked={escolhaPilar === "Governamental"}
                                        onChange={(e) => setEscolhaPilar(e.target.value)}
                                    />
                                    Pilar Governamental
                                </label>

                            </div>

                            <div className='campo-texto-portfolio'>
                                <label htmlFor="">Descreva a sua meta ou deixe uma observação</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className='text-area-sobre-empresa'
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}

                                ></textarea>
                            </div>

                            <div className='campo-portfolio'>
                                <label htmlFor="" className='label-portfolio'>Data Limite</label>
                                <input
                                    type="date"
                                    className='input-portfolio'
                                    value={dataLimite}
                                    onChange={(e) => setDataLimite(e.target.value)}
                                />
                            </div>

                            <div className='container-botoes-meta'>
                                <button className='botao-borda' onClick={() => cancelarCriacaoMeta()}> Cancelar</button>
                                <button className='botao-preenchido' onClick={salvarMeta}>Salvar</button>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <FooterPlataforma />
        </>


    )
}
