import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'
import Questionario from './Questionario'

//hooks
import { useUsuario } from '../../hooks/Usuario';
import { useState } from 'react';

//css
import './Formulario.css'

//router dom
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//imagens

import CapaSocial from '../../assets/imagens/capa-formulario-social.jpg';
import CapaGovernance from '../../assets/imagens/capa-formulario-governance.jpg';
import CapaAmbiental from '../../assets/imagens/capa-formulario-ambiental.png';

const Formulario = () => {
    const { categoria } = useParams();

    let imagemSrc;
    
    if (categoria === 'Ambiental') {
        imagemSrc = CapaAmbiental;
    } else if (categoria === 'Social') {
        imagemSrc = CapaSocial;
    } else {
        imagemSrc = CapaGovernance;
    } 



    console.log(categoria);

    const { usuario } = useUsuario();

    const navigate = useNavigate()

    const cancelarQuestionario = () => {
        navigate('/meu-progresso')
    }

    const [questionarioIniciado, setQuestionarioIniciado] = useState(false);

    const iniciarQuestionario = (categoria) => {
        setQuestionarioIniciado(true)
    }

    return (
        <div>

            <HeaderPlataforma
                plano={usuario.plano}
                razaoSocial={usuario.razaoSocial}
            />

            <div className='conteudo conteudo-formulario-pagina'>


                <div className='beadcrumb formulario-beadcrumbs'>
                    <div>
                        <Link to='/meu-progresso' className='link-beadcrumb'><span>Meu Progresso {'>'}</span>  </Link>
                        <Link to='/meu-progresso/formulario' className='link-beadcrumb-atual'><span>Formulário ESG</span>  </Link>
                    </div>

                    <button className='botao-preenchido' onClick={() => cancelarQuestionario()}>Continuar depois</button>
                </div>


                <div className='container-formulario'>


                    <img src={imagemSrc} alt="Imagem representando a pergunta" className='capa-formulario' />

                    {questionarioIniciado ? (
                        <Questionario categoriaQuestionario = {categoria} />
                    ) : (
                        <>
                            <div className='container-titulo-questionario'>
                                <h2 className='titulo-questionario'>Questionário {categoria}</h2>
                                <span>
                                    10 Perguntas
                                </span>
                            </div>

                            <div className='container-informacao-pergunta'>
                                <p className='informacao-questionario'>
                                    Sabemos que a sustentabilidade ambiental é uma preocupação cada vez mais relevante para empresas comprometidas com práticas responsáveis. Este formulário tem como objetivo ajudá-lo a avaliar e melhorar suas iniciativas ambientais.</p>

                                <p className="informacao-questionario">

                                    Sua participação é fundamental para entendermos sua pegada ambiental e recomendar as soluções ESG mais adequadas às suas necessidades. Ao responder a estas perguntas, você estará dando um passo importante em direção a um mundo mais sustentável e ético.
                                </p>
                                <p className="informacao-questionario">

                                    Juntos, podemos criar um impacto positivo na saúde do planeta e no sucesso do seu negócio. Vamos começar a avaliar suas práticas e a definir metas para um futuro mais verde!"
                                </p>

                            </div>

                            <div className='container-porcentagem-botao-iniciar'>

                                <h2 className="porcentagem-questionario">
                                    Pontuação: 0/100%
                                </h2>

                                <button className='botao-preenchido' onClick={() => iniciarQuestionario(categoria)}>Iniciar Questionário</button>
                            </div>
                        </>
                    )}

                </div>
            </div>

            <FooterPlataforma />
        </div >

    )
}

export default Formulario