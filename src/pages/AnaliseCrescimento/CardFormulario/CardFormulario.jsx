import React from 'react'

//css
import './CardFormulario.css'
import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'

//imagens
import FotoFormularioAmbiental from '../../../assets/imagens/ambiental.jpg'
import FotoFormularioSocial from '../../../assets/imagens/social.png'
import FotoFormularioGovernamental from '../../../assets/imagens/GOVERNAMENTAL.png'

//coisas do react
import { useNavigate, Link } from 'react-router-dom';

const CardFormulario = (props) => {
    let imagemSrc;

    if (props.formulario === 'Ambiental') {
        imagemSrc = FotoFormularioAmbiental;
    } else if (props.formulario === 'Social') {
        imagemSrc = FotoFormularioSocial;
    } else {
        imagemSrc = FotoFormularioGovernamental;
    } 


    const navigate = useNavigate();

    const irParaFormulario = () => {
        navigate('/meu-progresso/formulario');
    }

    return (
        <div className='card-formulario' onClick={() => irParaFormulario()}>

            <div className='foto-status-formulario'>
                <img src={imagemSrc} alt="" className='foto-formulario' />
                <p className='status-atual'>Não Iniciado</p>
            </div>

            <div className='metade-card-formulario'>

                <div className='informacoes-gerais-formulario'>
                    <div className='titulo-formulario'>
                        <h4 className='subtitulo-card'>Área de Impacto</h4>
                        <p className='dado-subtitulo'>{props.formulario}</p>
                    </div>

                    <div className='pontuacao-formulario'>
                        <h4 className='subtitulo-card'>Pontuação</h4>
                        <p className='dado-subtitulo'>00/10</p>
                    </div>
                </div>

                <p className='descricao-card-formulario'>Explicação do formulário breve, talvez sobre o pilar não sei mas deve ser sucinto please amigos e amigas.</p>

                <div className='pontuacao-link-formulario'>
                    <div className='respostas-formulario'>
                        <h4 className='subtitulo-card'>Número de Respostas</h4>
                        <p className='dado-subtitulo'>00/10</p>
                    </div>

                    <ButtonFilled acao={'Responder'} />
                </div>
            </div>

        </div>
    )
}

export default CardFormulario