import React from 'react'

//api
import api from '../../service/api.js'

//css
import './Portfolio.css'

//imagens
import FotoDeCapa from '../../assets/imagens/foto-de-capa.jpg'
import FotoPerfil from '../../assets/imagens/perfil.jpg'
import iconeCertificado from '../../assets/icones/certificado.png'
//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Sevico.jsx'
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

                    <div className='container-foto'>
                        <img src={FotoDeCapa} alt="" className='foto-de-capa' />
                    </div>

                    <div className='container-informacoes-principais-empresa'>

                        <div className='foto-de-perfil'>
                            <img src={FotoPerfil} alt="foto de perfil da empresa" className='foto-de-perfil-empresa' />
                        </div>

                        <div className='informacoes-principais'>

                            <h2 className='nome-empresa-portfolio'>Delloite</h2>
                            <Link className='link-site-empresa'>ww.delloitte.com</Link>
                            <p className='descricao-breve-empresa'>Somos inovadores em tecnologia oferecendo soluções eficientes e escaláveis para nossos clientes.</p>
                            <p className='ano-certificacao-empresa'>Empresa certificada desde <span>2018</span></p>
                        </div>

                    </div>
                </div>

                <div className='informacoes-gerais-empresa'>
                    <div className='dados-gerais-empresa'>
                        <h3 className='titulo-informacao-empresa'>Dados Gerais</h3>
                        <div className='tracinho-divisor'></div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Área de Atuação</h4>
                            <p className='informacao-dado'>Tecnologia da Informação</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Telefone Corporativo</h4>
                            <p className='informacao-dado'>(11) 2345-6789</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Email Corporativo</h4>
                            <p className='informacao-dado'>email@email.com</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Endereço</h4>
                            <p className='informacao-dado'>Rua Haddock Lobo, 595 - São Paulo - SP </p>
                        </div>
                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Tamanho da Empresa</h4>
                            <p className='informacao-dado'>60 -80 funcionários</p>
                        </div>
                    </div>

                    <div className='mais-informacoes-empresa'>
                        <div className='sobre-a-empresa'>
                            <h3 className='titulo-informacao-empresa'>Sobre a empresa</h3>
                            <div className='tracinho-divisor'></div>
                            <p className='descricao-sobre-empresa'>Líder global na prestação de serviços de audit & assurance, consulting, financial advisory, risk advisory, tax e serviços relacionados. A nossa rede de firmas membro compreende mais de 150 países e territórios e presta serviços a quatro em cada cinco entidades listadas na Fortune Global 500®.</p>


                        </div>

                        <div className='certificados-empresa'>
                            <h3 className='titulo-informacao-empresa'>Certificados</h3>
                            <div className='tracinho-divisor'></div>

                            <div className='certificados'>

                            <div className='certificado'>
                                <img src={iconeCertificado} alt="icone-certificado" className='icone-certificado' />
                                <p className='nome-certificado'>nomeCertificado</p>
                            </div>

                            
                            <div className='certificado'>
                                <img src={iconeCertificado} alt="icone-certificado" className='icone-certificado' />
                                <p className='nome-certificado'>nomeCertificado</p>
                            </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div className='servicos-da-empresa'>
                    <h3 className='titulo-informacao-empresa'>Todos os Serviços</h3>
                    <div className='tracinho-divisor'></div>
                    <Servico
                        key={1}
                        nomeServico={'Treinamento de Responsabilidade Social Corporativa (RSC)'}
                        nomeEmpresa={'Deloitte'}
                        descricao={'O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC'}
                        valorMedio={'2.000'}
                        areaESG={'Environmental, Social'}
                    />

                    <Servico
                        key={1}
                        nomeServico={'Treinamento de Responsabilidade Social Corporativa (RSC)'}
                        nomeEmpresa={'Deloitte'}
                        descricao={'O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC'}
                        valorMedio={'2.000'}
                        areaESG={'Environmental, Social'}
                    />

                </div>

            </div>

            <FooterPlataforma />
        </div>
    )
}

export default Potfolio