import React from 'react'

//css
import './Servico.css'

//imagens
import FotoPerfil from '../../assets/imagens/perfil.jpg'

const Servico = () => {
  return (
    <div className='caixa-servico'>
      <div className='foto-perfil-empresa'>
        <img src={FotoPerfil} alt="foto-empresa-servico" className='foto' />
      </div>

      <div className='dados-servico-empresa'>
        <h4 className='titulo-servico'>Treinamento de Responsabilidade Social Corporativa (RSC)</h4>
        <p className='nome-empresa-servico'>Deloitte</p>

        <p className='descricao-servico'>O treinamento de Responsabilidade Social Corporativa (RSC) é uma parte importante da estratégia de uma 
          empresa para integrar práticas sociais e ambientais responsáveis em suas operações e cultura organizacional. 
          Aqui estão alguns pontos-chave a serem considerados ao desenvolver um programa de treinamento de RSC:
        </p>

        <p className='valor-medio-servico'>Valor Médio <span>R$ 2.000</span></p>
        
      </div>

    </div>
  )
}

export default Servico