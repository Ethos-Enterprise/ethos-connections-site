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
import { Link } from 'react-router-dom'

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import CardFormulario from './CardFormulario/CardFormulario.jsx';
import GraficoCircular from './GraficoCircular/GraficoCircular.jsx';
import BarraProgresso from './GraficoBarra/GraficoBarra.jsx';


const AnaliseCrescimento = () => {
    const { usuario } = useUsuario();

    return (
        <div>
            <HeaderPlataforma

                plano={'Analytics'}
                razaoSocial={usuario.razaoSocial}
            />

            <div className='conteudo'>

                <div className='beadcrumb'>
                    <Link to='/analise-crescimento' className='link-beadcrumb-atual'><span>Meu Progresso</span>  </Link>
                </div>

                <div className='nivel-meta-esg'>

                    <div className='container-nivel-esg'>
                        <h2 className='titulo-campo'>Meu nível de ESG</h2>
                        <div className='tracinho-divisor'></div>

                        <div className='campo-graficos'>
                            <h3 className='titulo-grafico'>Total de Aderência ESG - em % <span><i class="fa-solid fa-question icone-duvida"></i> <div className='texto-info'>Dados com base sua pontuação nos formulários avaliativos. </div></span> </h3>
                            <BarraProgresso porcentagem={10} />

                            <h3 className='titulo-grafico'>Aderência ESG por Área de Impacto - em % <span><i class="fa-solid fa-question icone-duvida"></i> <div className='texto-info'>Dados com base sua pontuação nos formulários avaliativos. </div></span></h3>
                            <div className='graficos-circulares'>
                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={10} />
                                    <p className='titulo-grafico-circular'>Ambiental</p>
                                </div>

                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={0} />
                                    <p className='titulo-grafico-circular'>Social</p>

                                </div>

                                <div className='container-grafico-circular'>
                                    <GraficoCircular porcentagem={0} />
                                    <p className='titulo-grafico-circular'>Governamental</p>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='container-meta'>
                        <div className='titulo-container'>

                            <h2 className='titulo-campo'>Minha Meta</h2>
                            <ButtonFilled acao={'Criar Meta'} />

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