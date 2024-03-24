import React from 'react'

//css
import './Servico.css'

//api
import api from '../../service/api.js'

//imagens
import FotoPerfil from '../../assets/imagens/perfil.jpg'

import { Link, useNavigate } from 'react-router-dom'


const Servico = (props) => {
  const navigate = useNavigate();

  const verServico = () => {

    const dadosServico = {
      id: props.id,
      nomeServico: props.nomeServico,
      nomeEmpresa: props.nomeEmpresa,
      descricao: props.descricao,
      valorMedio: props.valorMedio,
      areaESG: props.areaESG,
      fkPrestadoraServico: props.fkPrestadoraServico
    };

    navigate('/solucoes-esg/portfolio/avaliacao', { state: { dadosServico } });

  }

  const deletarServico = () => {

    Swal.fire({
      title: "Deletar Serviço?",
      icon: "question",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Deletar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        api.delete(`/v1.0/servicos/${props.idServicoAtual}`)
          .then((response) => {

            console.log(response);
          })
          .catch((error) => {
            console.log('erro ao deletar serviço' + error);
          })

        Swal.fire({
          title: "Serviço excluido!",
          icon: "success"
        });
        navigate('/meu-portfolio/editar-portfolio#servicos');
      }

    })
  }

  const editarServico = (e) => {
    e.preventDefault()
    const dadosServicoParaEditar = {
      id: props.idServicoAtual,
      nomeServico: props.nomeServico,
      nomeEmpresa: props.nomeEmpresa,
      descricao: props.descricao,
      valor: props.valorMedio,
      areaAtuacaoEsg: props.areaESG,
      fkPrestadoraServico: props.fkPrestadoraServico
    };

    props.setComponente('adicionarServico');
    navigate('/meu-portfolio/editar-portfolio#servicos#adicionar-servico', { state: { dadosServicoParaEditar } });

  }


  const renderizarOnClick = !props.ocasiao || props.ocasiao !== 'meu-servico-editar' ? { onClick: verServico } : {};

  return (
    <div className={props.ocasiao === 'solucoes' ? 'caixa-servico' : (props.ocasiao === 'portfolio-servico' ? 'caixa-servico-portfolio' : 'caixa-meu-servico')} {...renderizarOnClick}>
      {props.ocasiao === 'solucoes' && (
        <div className='foto-perfil-empresa'>
          <img src={FotoPerfil} alt="foto-empresa-servico" className='foto' />
        </div>
      )}

      <div className='dados-servico-empresa'>
        <h4 className='titulo-servico'>{props.nomeServico}</h4>
        <p className='nome-empresa-servico'>{props.nomeEmpresa}</p>
        <p className='descricao-servico'>{props.descricao}</p>

        {props.ocasiao === 'solucoes' ? (
          <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>

        ) : props.ocasiao === 'portfolio-servico' ? (
          <div className='container-valor-e-avaliacao'>
            <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>
            <Link to={'/solucoes-esg/portfolio/avaliacao'} className='link-avaliacoes'>
              <i className="fa-regular fa-comment icone-avaliacoes">
                <span>Ver Avaliações</span>
              </i>
            </Link>
          </div>
        ) : (
          <div className='container-valor-e-avaliacao'>
            <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>

            <div className='links-uteis-meu-servico'>

              <Link onClick={(e) => { editarServico(e) }} className='link-avaliacoes'>
                <i className="fa-solid fa-pen icone-avaliacoes">
                  <span>Editar</span>
                </i>
              </Link>

              <Link onClick={() => deletarServico()} className='link-avaliacoes'>
                <i className="fa-regular fa-trash-can icone-avaliacoes">
                  <span>Excluir</span>
                </i>
              </Link>
            </div>

          </div>
        )}
      </div>

      <div className='pilar-servico'>
        {props.areaESG === 'environmental' ? (
          <p className='pilar-esg'>Environmental</p>
        ) : (
          <p className='pilar-esg-nao-contido'>E</p>
        )}

        {props.areaESG === 'social' ? (
          <p className='pilar-esg'>Social</p>
        ) : (
          <p className='pilar-esg-nao-contido'>S</p>
        )}

        {props.areaESG === 'governance' ? (
          <p className='pilar-esg'>Governance</p>
        ) : (
          <p className='pilar-esg-nao-contido'>G</p>
        )}
      </div>
    </div>
  );
}

export default Servico;