import React from 'react'
import './MinhasInteracoes.css';
import ImagemContatos from '../../../../assets/icones/contatos.png'
import ImagemEmpresas from '../../../../assets/imagens/deloitte_logo.jpeg'
import ImagemEmpresaPerfil from '../../../../assets/imagens/perfilImg.png'

import ImagemFavoritos from '../../../../assets/icones/favoritos.png'
import CardSerInteractionsBox from './Componente/cardServico.jsx';

const MinhasInteracoes = () => {
  return (
    <div className='dados-minha-conta'>
      <h2 className='titulo-secao'>
        Minhas Interações
      </h2>

      <div className='tracinho-divisor'></div>

      <div className="interactions-box">

        <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC' />
        <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF' />

      </div>
      
      <div className='tracinho-divisor'></div>

      <div className="interactions-title">Empresas Contatadas</div>

      <div className="interactions-title-box">
        <h2 className='box-title-interactions'>Total: 2 empresas</h2>
        <h3 className='box-interactions-letter'>Finalizados: 1 empresa</h3>
        <h3 className='box-interactions-letter'>Em andamento: 1 empresa</h3>
      </div>


      {/* Card */}

      <CardSerInteractionsBox
        ImagemEmpresas={ImagemEmpresas}
        empresaNome='Deloitte'
        servicoNome='Nome do Serviço'
        statusContato='Aguardando resposta da empresa'
        inicioContato='XX-XX-XXXX'
      />
      <CardSerInteractionsBox
        ImagemEmpresas={ImagemEmpresaPerfil}
        empresaNome='Nome da Empresa'
        servicoNome='Nome do Serviço'
        statusContato='Aguardando resposta da empresa'
        inicioContato='XX-XX-XXXX'
      />

    </div>
  )
}

export default MinhasInteracoes