import React from 'react'

//css
import './Servico.css'

//imagens
import FotoPerfil from '../../assets/imagens/perfil.jpg'

import { Link, useNavigate } from 'react-router-dom'


const Servico = (props) => {
  const navigate = useNavigate();

  //   const verServico = (id) => {
  //     api.get(`/v1.0/servicos/${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //       }
  //     })
  //       .then(response => {

  //         console.log('sucesso na busca: ' + response.data)
  //         navigate('/solucoes-esg/servico/avaliacao');
  //       })
  //       .catch(error => {
  //         console.log('erro ao buscar serviço por id' + error);
  //       })
  //       .finally(
  //         console.log('Terminei a requisição BuscarServicoPorId')
  //       );
  // }

  const verServico = () => {
    navigate('/solucoes-esg/portfolio/avaliacao');
  }

  return (

    <div className={props.fotoPerfil ? ('caixa-servico') : ('caixa-servico-portfolio')} onClick={verServico}>

      {props.fotoPerfil  && (
        <div className='foto-perfil-empresa'>
          <img src={FotoPerfil} alt="foto-empresa-servico" className='foto' />
        </div>
      )}

      <div className='dados-servico-empresa'>
        <h4 className='titulo-servico'>{props.nomeServico}</h4>
        <p className='nome-empresa-servico'>{props.nomeEmpresa}</p>

        <p className='descricao-servico'>{props.descricao}
        </p>

        {props.fotoPerfil ? (
          
        <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>
        ) : (
          <div className='container-valor-e-avaliacao'>
          <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>
          <Link to={'/solucoes-esg/portfolio/avaliacao'} className='link-avaliacoes'> <i className="fa-regular fa-comment icone-avaliacoes"> <span>Ver Avaliações</span></i></Link>
          </div>
        )
        }
      </div>


      <div className='pilar-servico'>

        {props.areaESG.includes('Environmental') ? (
          <p className='pilar-esg'>Environmental</p>
        ) : (
          <p className='pilar-esg-nao-contido'>E</p>
        )}

        {props.areaESG.includes('Social') ? (
          <p className='pilar-esg'>Social</p>
        ) : (
          <p className='pilar-esg-nao-contido'>S</p>
        )}

        {props.areaESG.includes('Governamental') ? (
          <p className='pilar-esg'>Governamental</p>
        ) : (
          <p className='pilar-esg-nao-contido'>G</p>
        )}

      </div>
    </div >

  )
}

export default Servico