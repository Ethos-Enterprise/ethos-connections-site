import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'

//hook
import { useUsuario } from '../../hooks/Usuario'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';

import { Link } from 'react-router-dom';


import './Meta.css'

export const Meta = () => {

    const { usuario } = useUsuario();

    return (
        <>
            <HeaderPlataforma
                plano={'Analytics'}
                razaoSocial={usuario.razaoSocial}
            />

            <div className="conteudo">

                <div className='beadcrumb'>
                    <Link to='/solucoes-esg' className='link-beadcrumb'><span>Soluções ESG {'>'}</span>  </Link>
                    <Link to='/solucoes-esg/portfolio' className='link-beadcrumb-atual'><span>Portfólio</span>  </Link>
                </div>

                <div className='container-criar-meta'>
                    <h2 className='titulo-campo'>Defina sua meta!</h2>
                    <div className='tracinho-divisor'></div>

                    <img src="" alt="foto do metas" />

                    <div className='container-informacoes-meta'>
                        <h2 className='titulo-criacao-meta'>Qual dos 3 pilares ESG sua empresa busca melhorar até o próximo ano?</h2>
                        <p className='opcao-meta-definir'>Pilatr Ambiental</p>
                        <p className='opcao-meta-definir'>Pilar Social</p>
                        <p className='opcao-meta-definir'>Pilar Governamental</p>


                    </div>
                </div>

            </div>

            <FooterPlataforma />
        </>


    )
}
