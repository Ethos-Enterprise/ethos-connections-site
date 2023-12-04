import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'

//hook
import { useUsuario } from '../../hooks/Usuario'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';

import { Link , useNavigate} from 'react-router-dom';

import FotoMeta from '../../assets/imagens/foto-meta.png'

import './Meta.css'

export const Meta = () => {

    const { usuario } = useUsuario();

    const navigate = useNavigate();
    const cancelarCriacaoMeta = () => {
        navigate('/meu-progresso')
    }

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
                            <h2 className='titulo-criacao-meta'>Qual dos 3 pilares ESG sua empresa busca melhorar até o próximo ano?</h2>
                            <p className='opcao-meta-definir'>Pilar Ambiental</p>
                            <p className='opcao-meta-definir'>Pilar Social</p>
                            <p className='opcao-meta-definir'>Pilar Governamental</p>

                            <div className='container-botoes-meta'>
                                <button className='botao-borda' onClick={() => cancelarCriacaoMeta()}> Cancelar</button>
                                <button className='botao-preenchido'>Salvar</button>

                            </div>
                        </div>



                    </div>

                </div>

            </div>

            <FooterPlataforma />
        </>


    )
}
