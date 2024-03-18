import React from 'react'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//react router dom
import { Link } from 'react-router-dom'

//hook
import { useUsuario } from '../../hooks/Usuario'

//css
import './MinhasNegociacoes.css'
import LinhaContato from './LinhaContato/LinhaContato'

const MinhasNegociacoes = () => {
    const { usuario } = useUsuario();

    return (
        <div>
            <HeaderPlataforma

                plano={usuario.plano}
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
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Pendente</label>
                        </div>

                        <div className='status'>
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Em andamento</label>
                        </div>


                        <div className='status'>
                            <input type="radio" name="" id="" className='input-status' />
                            <label htmlFor="">Finalizada</label>
                        </div>


                    </div>

                    <div className='tracinho-divisor'></div>

                    <div className='container-negociacoes'>

                        <h2 className='titulo-controle-negociacoes'>Controle de Negociações</h2>
                        <div className='tracinho-divisor'></div>


                        <div className='titulos-tabela-negociacao'>
                            <div className='titulo-nome-empresa'>
                                Nome da Empresa
                            </div>

                            <div className='titulo-nome-servico'>
                                Serviço
                            </div>

                            <div className='titulo-contato'>
                                Data de contato
                            </div>

                            <div className='titulo-status-atual'>
                                Status Atual
                            </div>


                            <div className='titulo-final'>

                            </div>

                        </div>
                        <div className='tracinho-divisor-negociacoes'></div>

                        <LinhaContato />

                        {/* <LinhaContato /> */}
                        {/* <LinhaContato /> */}

                            {/* <p className='vazio-negocios'>Não há Negociações</p> */}
                    </div>

                </div>

            </div>

            <FooterPlataforma />

        </div>
    )
}

export default MinhasNegociacoes