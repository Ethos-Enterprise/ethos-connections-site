import React from 'react'

//componentes
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';
import ButtonFilled from '../../components/ButtonFilled/ButtonFilled';

//css
import './AnaliseCrescimento.css'

//imagens
import IconeMeta from '../../assets/icones/meta.png'
//react/router
import { Link , useNavigate} from 'react-router-dom'

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import CardFormulario from './CardFormulario/CardFormulario.jsx';
import GraficoCircular from './GraficoCircular/GraficoCircular.jsx';
import BarraProgresso from './GraficoBarra/GraficoBarra.jsx';

const AnaliseCrescimento = () => {
    const { usuario } = useUsuario();

    const navigate = useNavigate();

    const criarMeta = () => {
        navigate('/meu-progresso/metas')
    }

    if (!sessionStorage.getItem('ambiental')) {
        sessionStorage.setItem('ambiental', 0);
    }

    if (!sessionStorage.getItem('social')) {
        sessionStorage.setItem('social', 0);
    }

    if (!sessionStorage.getItem('governamental')) {
        sessionStorage.setItem('governamental', 0);
    }

    let soma = (parseInt(sessionStorage.getItem('ambiental')) + parseInt(sessionStorage.getItem('social')) + parseInt(sessionStorage.getItem('governamental')));

    let porcentagem = Math.round(soma / 3);

    return (
        <div>
            <HeaderPlataforma

                plano={usuario.plano}
                razaoSocial={usuario.razaoSocial}
            />

            <div className='conteudo'>

                <div className='beadcrumb'>
                    <Link to='/meu-progresso' className='link-beadcrumb-atual'><span>Meu Progresso</span>  </Link>
                </div>

                <div className='nivel-meta-esg'>

                    <div className='container-nivel-esg'>
                        <h2 className='titulo-campo'>Meu nível de ESG</h2>
                        <div className='tracinho-divisor'></div>

                        <div className='campo-graficos'>
                            <h3 className='titulo-grafico'>Total de Aderência ESG - em % <span><i className="fa-solid fa-question icone-duvida"></i> <div className='texto-info'>Dados com base sua pontuação nos formulários avaliativos. </div></span> </h3>
                            <BarraProgresso porcentagem={porcentagem} />

                            <h3 className='titulo-grafico'>Aderência ESG por Área de Impacto - em % <span><i className="fa-solid fa-question icone-duvida"></i> <div className='texto-info'>Dados com base sua pontuação nos formulários avaliativos. </div></span></h3>
                            <div className='graficos-circulares'>
                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={sessionStorage.getItem('ambiental')} />
                                    <p className='titulo-grafico-circular'>Ambiental</p>
                                </div>

                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={sessionStorage.getItem('social')} />
                                    <p className='titulo-grafico-circular'>Social</p>

                                </div>

                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={sessionStorage.getItem('governamental')} />
                                    <p className='titulo-grafico-circular'>Governamental</p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='container-meta'>
                        <div className='titulo-container'>

                            <h2 className='titulo-campo'>Minha Meta</h2>

                            <button className='botao-preenchido' onClick={() => criarMeta()}>Criar Meta</button>
                        </div>
                        <div className='tracinho-divisor'></div>

                        <div className='meta-nao-definida'>
                            <img src={IconeMeta} alt="icone de meta" />
                            <p>nenhuma meta definida</p>
                        </div>
                    </div>
                </div>

                <div className='formularios-esg'>
                    <h2 className='titulo-campo'>Formulários Avaliativos <span> 1/3</span></h2>
                    <div className='tracinho-divisor'></div>

                    <div className='container-formularios'>

                        <CardFormulario formulario={'Ambiental'} />
                        <CardFormulario formulario={'Social'} />
                        <CardFormulario formulario={'Governamental'} />

                    </div>
                </div>
            </div>

            <FooterPlataforma />

        </div>
    )
}

export default AnaliseCrescimento