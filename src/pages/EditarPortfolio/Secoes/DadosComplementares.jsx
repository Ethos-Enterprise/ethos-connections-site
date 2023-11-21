import React from 'react'

import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined'

import { useState, useEffect } from 'react';

//api
import api from "../../../service/api";

const DadosComplementares = () => {

  // DADOS DA PAGINA
  const [dadosComplementares, setDadosComplementares] = useState({
    descricaoBreve: 'oi',
    sobreEmpresa: 'oiii',
    linkSite: 'aaaa',
    dataCertificada: '2001-12-12',
  });

  const atualizarCampos = (campo, valor) => {
    setDadosComplementares((prevDados) => ({
      ...prevDados,
      [campo]: valor,
    }));
  };
  console.log(dadosComplementares);

  const editarDadosComplementares = (e) => {
    e.preventDefault();

    console.log('Função editarDadosComplementares chamada!');

    
  }

  return (
    <div className='dados-portfolio'>
      <h2 className='titulo-secao'>
        Dados Complementares
      </h2>
      <div className='tracinho-divisor'></div>

      <form className='inputs-portfolio'>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Descricao Breve</label>
          <input 
          type="text" 
          className='input-portfolio'
          value={dadosComplementares.descricaoBreve}
          onChange={(e) => atualizarCampos('descricaoBreve', e.target.value)}
          />
        </div>

        <div className='campo-texto-portfolio'>
          <label htmlFor="">Sobre a Empresa</label>
          <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          className='text-area-sobre-empresa'
          value={dadosComplementares.sobreEmpresa}
          onChange={(e) => atualizarCampos('sobreEmpresa', e.target.value)}

          ></textarea>
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Link WebSite</label>
          <input 
          type="text" 
          className='input-portfolio'
          value={dadosComplementares.linkSite}
          onChange={(e) => atualizarCampos('linkSite', e.target.value)}
          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Empresa Certificada desde</label>
          <input 
          type="date" 
          className='input-portfolio'
          value={dadosComplementares.dataCertificada}
          onChange={(e) => atualizarCampos('dataCertificada', e.target.value)}
          />
        </div>

        <div className='botoes-portfolio'>

          <ButtonOutlined acao={'Cancelar'} />

          <ButtonFilled acao={'Salvar'} />
        </div>

      </form>
    </div>
  )
}

export default DadosComplementares