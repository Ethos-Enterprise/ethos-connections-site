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
import Servico from '../../components/Serviços/Servico.jsx'

//coisas do react
import { useNavigate, Link, useLocation } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useState, useEffect } from 'react';


const Potfolio = () => {
    const [servicos, setServicos] = useState([]);

    const { usuario } = useUsuario();

    const location = useLocation();
    const dadosServicoAvaliacao = location.state ? location.state.dadosServicoAvaliacao : null;

    const [portfolioData, setPortfolioData] = useState(null);

    // useEffect(() => {
    // const fkPrestadora = '6ba7b813-9dad-11d1-80b4-00c04fd430c4'
    // api.get(`/v1.0/servicos/lista-servicos/{fkPrestadoraServico}`, {
    //     params: {
    //       fkPrestadoraServico: fkPrestadora,
    //     }
    // })
    //     .then((response) => {
    //         console.log('SERVICOS PRESTADORA ');
    //         console.log(response);
    //         // setPortfolioData(response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // },[]);


    // useEffect(() => {
    //     const fkPrestadora = 'b0108d55-fc0a-4e64-a9ef-dafb33a29631'
    //     api.get(`/v1.0/prestadoras/empresa/${fkPrestadora}`, {
    //         headers: {
    //           Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
    //         },
    //     })
    //         .then((response) => {
    //             console.log(response);
    //             setPortfolioData(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //     },[]);

    // useEffect(() => {
    //     api.get(`/v1.0/empresas/${usuario.id}`, {
    //         params: {
    //             id: usuario.id,
    //         },
    //         headers: {
    //             Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
    //         },
    //     })
    //         .then((response) => {
    //             console.log(response);
    //             setPortfolioData(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, []);

    useEffect(() => {
        api.get("v1.0/servicos")
            .then(async (response) => {
                console.log(response);
                const servicosComNomeEmpresa = await Promise.all(
                    response.data.map(async (servico) => {
                        const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
                        // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
                        return { ...servico, razaoSocial };
                    })
                );
                setServicos(servicosComNomeEmpresa);
            })
            .catch((error) => {
                console.log('erro ao pegar todos os serviços. ERRO: ', error);
            })
    }, []);

    const buscarInformacoesEmpresa = (id) => {
        return api.get(`/v1.0/empresas/${id}`)
          .then((response) => {
            return response.data.razaoSocial
          })
          .catch((error) => {
            console.log('algo deu errado ao pegar o nome ', error);
            throw error;
          });
      };


    return (

        <div>

            <HeaderPlataforma
                plano={usuario.plano}
                razaoSocial={usuario.razaoSocial}
            />

            <div className='conteudo'>

                <div className='beadcrumb'>
                    <Link to='/solucoes-esg' className='link-beadcrumb'><span>Soluções ESG {'>'}</span>  </Link>
                    <Link to='/solucoes-esg/portfolio' className='link-beadcrumb-atual'><span>Portfólio</span>  </Link>
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

                            <h2 className='nome-empresa-portfolio'>{dadosServicoAvaliacao.nomeEmpresa}</h2>
                            <Link className='link-site-empresa'>ww.empresaD.com</Link>
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
                            <p className='informacao-dado'>tecnologia</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Telefone Corporativo</h4>
                            <p className='informacao-dado'>(11) 9 8765-8754</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Email Corporativo</h4>
                            <p className='informacao-dado'>empresaD@email.com</p>
                        </div>

                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Endereço</h4>
                            <p className='informacao-dado'>Rua Haddock Lobo, 595 - São Paulo - SP </p>
                        </div>
                        <div className='informacao'>
                            <h4 className='informacao-titulo'>Tamanho da Empresa</h4>
                            <p className='informacao-dado'>100 funcionários</p>
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

                    {servicos.length > 0 ? (
                        servicos.map((servico) => (
                            <Servico
                                key={servico.id}
                                id={servico.id}
                                ocasiao={'portfolio-servico'}
                                nomeServico={servico.nomeServico}
                                nomeEmpresa={servico.razaoSocial}
                                descricao={servico.descricao}
                                valorMedio={(servico.valor).toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                                areaESG={servico.areaAtuacaoEsg}
                                fkPrestadoraServico={servico.fkPrestadoraServico}
                            />
                        ))
                    ) : (
                        <p>Nenhum resultado encontrado.</p>
                    )}


                </div>

            </div>

            <FooterPlataforma />
        </div>
    )
}

export default Potfolio