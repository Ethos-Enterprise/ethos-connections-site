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
  //         navigate('/pagina-inicial/servico/avaliacao');
  //       })
  //       .catch(error => {
  //         console.log('erro ao buscar serviço por id' + error);
  //       })
  //       .finally(
  //         console.log('Terminei a requisição BuscarServicoPorId')
  //       );
  // }

  const verServico = () => {
    navigate('/pagina-inicial/servico/avaliacao');
  }

  return (
    <div className='caixa-servico' onClick={verServico}>
      <div className='foto-perfil-empresa'>
        <img src={FotoPerfil} alt="foto-empresa-servico" className='foto' />
      </div>

      <div className='dados-servico-empresa'>
        <h4 className='titulo-servico'>{props.nomeServico}</h4>
        <p className='nome-empresa-servico'>{props.nomeEmpresa}</p>

        <p className='descricao-servico'>{props.descricao}
        </p>

        <p className='valor-medio-servico'>Valor Médio <span>R$ {props.valorMedio}</span></p>

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
    </div>

  )
}

export default Servico