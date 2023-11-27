import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//hooks
import { useUsuario } from '../../hooks/Usuario';

//css
import './Formulario.css'

const Formulario = () => {
    const { usuario } = useUsuario();

    return (
        <div>

            <HeaderPlataforma
                plano={'Analytics'}
                razaoSocial={usuario.razaoSocial}
            />


            <div className='conteudo'>
                <button className='botao-preenchido'>Continuar depois</button>

                <div className='container-formulario'>

                    <img src="" alt="Imagem representando a pergunta" />

                    <div>
                        <h2>Questionário Ambiental</h2>
                        <div>
                            1/10
                        </div>
                    </div>

                    <div>
                        <h4>1. Em relação à gestão de resíduos sólidos</h4>
                        <div>
                            <input type="radio" />
                            <label htmlFor=""></label>
                        </div>
                    </div>
                </div>
            </div>

            <FooterPlataforma />
        </div >

    )
}

export default Formulario