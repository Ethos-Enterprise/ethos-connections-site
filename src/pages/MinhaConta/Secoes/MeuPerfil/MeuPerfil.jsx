import React from 'react'
import './MeuPerfil.css'

const MeuPerfil = () => {
  return (
    <div className='dados-minha-conta'>
      <h2 className='titulo-secao'>
        Meu Perfil
      </h2>

      <div className='tracinho-divisor'></div>
      {/* COLCOAR DETALHES DA PAGINA */}
      <div className='titulo-card'>
        <p>Minhas informações</p>
      </div>
      <div className='card-informacoes1'>
        <div className='infos-empresa'><p>Nome da empresa: <span>Matrix</span></p>
        <p>Área de Atuação: <span>Distribuidora de energia elétrica</span></p>
        <p>Tamanho da Empresa:<span> 500 Funcionários</span></p>
        </div>
        <p>CNPJ:<span> 12.345.678/9101-12</span></p>
      </div>
      <div className='titulo-card'>
        <p>Endereço e Contatos</p>
      </div>
      <div className='card-informacoes2'>
        <div className='infos-empresa'>
        <p>Endereço: <span>Av. Brig. Faria Lima, 2066 - Pinheiros, São Paulo - SP, 01451-001</span></p>
        <p>Telefone Corporativo: <span>11 3027-2900</span></p>
        <p>Email Corporativo:<span> contato@matrixenergia.com</span></p>
        </div>
        
      </div>
      <div className='botoes'>
      <button className='botao-preenchido-perfil'>Editar Dados</button>
      <button className='botao-borda-perfil'>Salvar</button>
    </div>
    </div>
  )
}

export default MeuPerfil;