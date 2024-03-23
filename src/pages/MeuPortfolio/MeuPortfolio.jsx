import React from 'react'
import { useEffect, useState } from 'react';

//componentes
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import Servico from '../../components/Serviços/Servico.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
//hooks
import { useUsuario } from '../../hooks/Usuario';

//imagens
import FotoDeCapa from '../../assets/imagens/foto-inexistente.jpg'
import FotoPerfil from '../../assets/imagens/foto-perfil-off.jpg'
import iconeCertificado from '../../assets/icones/certificado.png'

import axios from "axios";

//css
import './MeuPortfolio.css'

//react router dom
import { Link, useNavigate } from 'react-router-dom';

import api from '../../service/api.js'

const MeuPortfolio = () => {
  const { usuario } = useUsuario();
  const { atualizarUsuario } = useUsuario();

  const navigate = useNavigate();

  // const dadosArmazenados = JSON.parse(sessionStorage.getItem('dadosComplementares'));

  // const servicoArmazenado = JSON.parse(sessionStorage.getItem('dadoServicoArmazenado')) || {};

  // console.log(dadosArmazenados);

  const [portfolioData, setPortfolioData] = useState({
    idPortfolio: '',
    descricaoBreve: '',
    sobreEmpresa: '',
    linkSite: '',
    dataCertificada: '',
  });

  const editarDados = () => {
    navigate('/meu-portfolio/editar-portfolio#dados-gerais')
  }


  useEffect(() => {
    api.get(`v1.0/portfolios/prestadora/${usuario.idPrestadora}`)
      .then(response => {
        const dados = response.data;


        atualizarUsuario(prevState => ({ ...prevState, idPortfolio: response.data.id }));

        setPortfolioData({
          descricaoBreve: dados.descricaoEmpresa || '',
          sobreEmpresa: dados.sobreEmpresa || '',
          linkSite: dados.linkWebsiteEmpresa || '',
          dataCertificada: dados.dataEmpresaCertificada || '',
        });

        // console.log('DADOS ');
        // console.log(portfolioData);
      })
      .catch(error => {

        console.error("Busquei portfolio da prestadora");

        if (error.response) {
          console.log('empresa nao cadastrou portfolio:', error.response.data);
        } else if (error.request) {
          console.log('Erro de rede:', error.request);
        } else {
          console.log('Erro ao enviar solicitação:', error.message);
        }

      });
  }, []);


  // useEffect(() => {
  //   const fkPrestadora = '6ba7b813-9dad-11d1-80b4-00c04fd430c4'
  //   api.get(`/v1.0/servicos/lista-servicos/${fkPrestadora}`, {
  //       params: {
  //         fkPrestadoraServico: fkPrestadora,
  //       }
  //   })
  //       .then((response) => {
  //           console.log('SERVICOS PRESTADORA ');
  //           console.log(response);
  //           // setPortfolioData(response.data)
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       })
  //   },[]);

  const mudarFotoPerfil = async () => {
    try {
      const { value: file, dismiss: dismissReason } = await Swal.fire({
        title: "Escolha uma foto de perfil",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Adicione sua foto de perfil"
        },
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      });
  
      if (dismissReason === Swal.DismissReason.cancel) {
        console.log("Upload cancelado pelo usuário.");
      } else if (file) {
        console.log('vamos mudar a fotoo');

        const formData = new FormData();
        formData.append('arquivo', file);
  
        await api.patch(`/v1.0/portfolios/upload/perfil/${usuario.idPortfolio}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log('DEU CERTO MUDAR A FOTO DE PERFIL');
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
  
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Foto de Perfil Alterada!",
            imageUrl: e.target.result,
            imageAlt: "A imagem enviada"
          });
        };
        reader.readAsDataURL(file); 
      }
    } catch (error) {
      console.error("Ocorreu um erro:", error);
      Swal.fire("Erro", "Não foi possível mudar a foto de perfil.", error);
    }
  };
  


  const mudarFotoCapa = async () => {
    try {
      const { value: file, dismiss: dismissReason } = await Swal.fire({
        title: "Escolha uma foto de capa",
        input: "file",
        inputAttributes: {
          "accept": "image/*",
          "aria-label": "Adicione sua foto de perfil"
        },
        showCancelButton: true,
        cancelButtonText: 'Cancelar'
      });

      if (dismissReason === Swal.DismissReason.cancel) {
        // CHAMAR REVERTER
      } else if (file) {
        // chamar api de salvar foto
        const reader = new FileReader();
        reader.onload = (e) => {
          Swal.fire({
            title: "Foto de Perfil Alterada!",
            imageUrl: e.target.result,
            imageAlt: "The uploaded picture"
          });
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };



  return (

    <div>

      <HeaderPlataforma
        plano={usuario.plano}
        razaoSocial={usuario.razaoSocial}
      />

      <div className='conteudo'>

        <div className='beadcrumb'>
          <Link to='/solucoes-esg/portfolio' className='link-beadcrumb-atual'><span>Meu Portfólio</span>  </Link>
        </div>

        <div className='informacoes-principais-minha-empresa'>

          <div className='container-foto'>
            <img src={FotoDeCapa} alt="" className='foto-de-capa' />
            <div className='descricao-hover-capa' onClick={mudarFotoCapa}> <i className="fa-solid fa-camera icone-camera"></i>  <span>Editar Foto de Capa</span></div>

          </div>

          <div className='container-informacoes-principais-empresa'>

            <div className='foto-de-perfil'>
              <img src={FotoPerfil} alt="foto de perfil da empresa" className='foto-de-perfil-empresa' />
              <div className='descricao-hover-perfil' onClick={mudarFotoPerfil}> <i className="fa-solid fa-camera icone-camera"></i>  <span>Editar Foto de Perfil</span></div>

            </div>

            <div className='informacoes-principais'>

              <div className='linha-botao-nome-empresa'>
                <h2 className='nome-empresa-portfolio'>{usuario.razaoSocial}</h2>
                <button className='botao-preenchido' onClick={() => editarDados()}>Editar Dados</button>
              </div>

              <Link className='link-site-empresa'>

                {portfolioData.linkSite ? portfolioData.linkSite : 'Adicione seu site'}

              </Link>
              <p className='descricao-breve-empresa'>
                {portfolioData.descricaoBreve ? portfolioData.descricaoBreve : 'Adicione uma descrição da empresa'}

              </p>
              <p className='ano-certificacao-empresa'>
            

                {portfolioData.dataCertificada ?
                  `Empresa certificada desde ${new Date(portfolioData.dataCertificada).getFullYear()}`
                  : 'Adicione a data de certificação'}

                <span></span></p>
            </div>

          </div>
        </div>

        <div className='informacoes-gerais-empresa'>
          <div className='dados-gerais-empresa'>
            <h3 className='titulo-informacao-empresa'>Dados Gerais</h3>
            <div className='tracinho-divisor'></div>

            <div className='informacao'>
              <h4 className='informacao-titulo'>Área de Atuação</h4>
              <p className='informacao-dado'>{usuario.setor}</p>
            </div>

            <div className='informacao'>
              <h4 className='informacao-titulo'>Telefone Corporativo</h4>
              <p className='informacao-dado'>{usuario.telefone}</p>
            </div>

            <div className='informacao'>
              <h4 className='informacao-titulo'>Email Corporativo</h4>
              <p className='informacao-dado'>{usuario.email}</p>
            </div>

            <div className='informacao'>
              <h4 className='informacao-titulo'>Endereço</h4>
              <p className='informacao-dado'>Rua Haddock Lobo, 595 - São Paulo - SP </p>
            </div>
            <div className='informacao'>
              <h4 className='informacao-titulo'>Tamanho da Empresa</h4>
              <p className='informacao-dado'>{usuario.qtdFuncionarios} funcionários</p>
            </div>
          </div>

          <div className='mais-informacoes-empresa'>
            <div className='sobre-a-empresa'>
              <h3 className='titulo-informacao-empresa'>Sobre a empresa</h3>
              <div className='tracinho-divisor'></div>
              <p className='descricao-sobre-empresa'>
                {portfolioData.sobreEmpresa ? portfolioData.sobreEmpresa : ' Adicione uma descrição sobre a sua empresa'}

              </p>


            </div>

            <div className='certificados-empresa'>
              <h3 className='titulo-informacao-empresa'>Certificados</h3>
              <div className='tracinho-divisor'></div>

              <p className='certificados-anexados-empresa'>Adicione um certificado</p>

              <div className='certificados'>
                {/* <div className='certificado'>
                  <img src={iconeCertificado} alt="icone-certificado" className='icone-certificado' />
                  <p className='nome-certificado'>nomeCertificado</p>
                </div> */}


              </div>

            </div>
          </div>

        </div>

        <div className='servicos-da-empresa'>
          <h3 className='titulo-informacao-empresa'>Todos os Serviços</h3>
          <div className='tracinho-divisor'></div>

          {/* <Servico
                        key={1}
                        ocasiao={'portfolio-servico'}
                        nomeServico={'Treinamento de Responsabilidade Social Corporativa (RSC)'}
                        nomeEmpresa={'Deloitte'}
                        descricao={'O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC'}
                        valorMedio={'2.000'}
                        areaESG={'Environmental, Social'}
                    /> */}


          {/* {servicoArmazenado.nomeServico ? (
            <Servico
              id={'2'}
              ocasiao={'portfolio-servico'}
              nomeServico={servicoArmazenado.nomeServico}
              nomeEmpresa={usuario.razaoSocial}
              descricao={servicoArmazenado.descricao}
              valorMedio={(servicoArmazenado.valor)}
              areaESG={servicoArmazenado.areaAtuacaoEsg}
              fkPrestadoraServico={'servico.fkPrestadoraServico'}
            />
          ) : (
            <p>Nenhum serviço cadastrado.</p>
          )} */}

        </div>

      </div>

      <FooterPlataforma />
    </div>
  )
}

export default MeuPortfolio