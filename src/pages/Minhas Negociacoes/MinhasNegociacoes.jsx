import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//react router dom
import { Link } from 'react-router-dom'

//hook
import { useUsuario } from '../../hooks/Usuario'

//css
import './MinhasNegociacoes.css'

const MinhasNegociacoes = () => {
    const { usuario } = useUsuario();

    return (
        <div>
            <HeaderPlataforma

                plano={'Provider'}
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
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Pendente</label>
                    </div>
                    
                    <div className='status'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Em andamento</label>
                    </div>                    
                    

                    <div className='status'>
                        <input type="radio" name="" id="" />
                        <label htmlFor="">Finalizada</label>
                    </div>


                </div>

                <div className='tracinho-divisor'></div>

                </div>

            </div>

            <FooterPlataforma />

        </div>
    )
}

export default MinhasNegociacoes