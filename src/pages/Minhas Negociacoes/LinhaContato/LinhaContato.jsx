import React from 'react'

const LinhaContato = () => {
  return (
  <>
  <div className='linha-contato'>
        <div className='dado-nome-empresa'>
        Nome da Empresa 
        </div>


        <div className='dado-nome-servico'>
        Nome do Serviço de Interesse
        </div>


        <div className='dado-data-contato'>
        XX-XX-XXXX
        </div>


        <div className='dado-status-atual'>
        Em andamento
        </div>

        <div className='dado-final'>
        <i className="fa-regular fa-pen-to-square icone-atualizar"></i>
        Atualizar Status
        </div>

    </div>
        <div className='tracinho-divisor-negociacoes'></div>
  </>

  )
}

export default LinhaContato