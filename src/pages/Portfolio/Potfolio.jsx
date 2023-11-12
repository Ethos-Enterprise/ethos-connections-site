import React from 'react'

//api
import api from '../../service/api.js'

//css
import './Portfolio.css'


//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';

//coisas do react
import { useNavigate, Link } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';


const Potfolio = () => {
    const { usuario } = useUsuario();

    const navigate = useNavigate();

    return (

        <div>

            <HeaderPlataforma
                link1={'/pagina-inicial'}
                titulo1={'Soluções ESG'}

                link2={'dont2'}
                titulo2={'Parceiros Ethos'}

                link3={'dont3'}
                titulo3={'Aplicativo Ethos'}

                razaoSocial={usuario.razaoSocial}
            />

            <div className='conteudo'>

                <div className='beadcrumb'>
                    <Link to='/pagina-inicial' className='link-beadcrumb'><span>Soluções ESG {'>'}</span>  </Link>
                    <Link to='/pagina-inicial/portfolio' className='link-beadcrumb-atual'><span>Portfólio</span>  </Link>
                </div>

                <div className='informacoes-principais-empresa'>
                    <p>foto de perfil e afins</p>
                </div>

                <div className='informacoes-gerais-empresa'>
                    <div className='dados-gerais-empresa'>
                        <p>DADOS GERAIS</p>
                    </div>

                    <div className='mais-informacoes-empresa'>
                        <div className='sobre-a-empresa'>
                            <p> sobre</p>

                        </div>

                        <div className='certificados-empresa'>
                            <p>certificados</p>
                        </div>
                    </div>

                </div>

                <div className='servicos-da-empresa'>
                <p>SERVICOS</p>

                </div>

            </div>

            <FooterPlataforma />
        </div>
    )
}

export default Potfolio