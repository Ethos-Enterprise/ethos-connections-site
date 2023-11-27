import React from 'react'
import InputMask from '@mona-health/react-input-mask';

import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined'

import { useState, useEffect } from 'react';

//hook
import { useUsuario } from '../../../hooks/Usuario.jsx';

//select do react
import Select from 'react-select';

//api
import api from "../../../service/api";

const DadosGerais = () => {

  const { usuario, atualizarUsuario } = useUsuario();

  // DADOS DA PAGINA
  const [dadosGerais, setDadosGerais] = useState({
    nomeEmpresa: usuario.razaoSocial,
    cnpj: usuario.cnpj,
    setor: usuario.setor,
    qtdFuncionarios: usuario.qtdFuncionarios,
    telefone: usuario.telefone,
    email: usuario.email,
    cep: usuario.cep,
  });

  const atualizarCampo = (campo, valor) => {
    setDadosGerais((prevDados) => ({
      ...prevDados,
      [campo]: valor,
    }));
  };

  const opcoesAreaAtuacao = [
    { value: 'Tecnologia da Informação', label: 'Tecnologia da Informação' },
    { value: 'Saúde e Medicina', label: 'Saúde e Medicina' },
    { value: 'Educação', label: 'Educação' },
    { value: 'Financeira e Bancária', label: 'Financeira e Bancária' },
    { value: 'Agricultura', label: 'Agricultura' },
    { value: 'Energia e Sustentabilidade', label: 'Energia e Sustentabilidade' },
    { value: 'Varejo', label: 'Varejo' },
    { value: 'Construção e Imóveis', label: 'Construção e Imóveis' },
    { value: 'Alimentos e Bebidas', label: 'Alimentos e Bebidas' },
    { value: 'Automobilística', label: 'Automobilística' },
    { value: 'Entretenimento e Mídia', label: 'Entretenimento e Mídia' },
    { value: 'Turismo e Hospitalidade', label: 'Turismo e Hospitalidade' },
    { value: 'Manufatura', label: 'Manufatura' },
    { value: 'Telecomunicações', label: 'Telecomunicações' },
    { value: 'Serviços de Consultoria', label: 'Serviços de Consultoria' },
    { value: 'Transporte e Logística', label: 'Transporte e Logística' },
    { value: 'Moda e Vestuário', label: 'Moda e Vestuário' },
    { value: 'Outros', label: 'Outros' }
  ];

  const opcoesMediaTrabalhadores = [
    { value: 9, label: 'Até 9 funcionários' },
    { value: 20, label: '10 a 20 funcionários' },
    { value: 50, label: '21 a 50 funcionários' },
    { value: 100, label: '51 a 100 funcionários' },
    { value: 200, label: '101 a 200 funcionários' },
    { value: 500, label: '201 a 500 funcionários' },
    { value: 1000, label: '501 a 1000 funcionários' },
    { value: 1001, label: '1001 ou mais funcionários' },
  ];


  const editarDadosGerais = (e) => {
    e.preventDefault();

    console.log('Função editarDadosGerais chamada!');

    let campoCNPJ = dadosGerais.cnpj.length < 14;
    let campoAreaAtuacao = dadosGerais.areaAtuacao === '';
    let campoTelefone = dadosGerais.telefone.length < 10;
    let email = !dadosGerais.email.includes('@') || !dadosGerais.email.includes('.com')
    let cep = dadosGerais.cep && dadosGerais.cep.length < 8;

    console.log(usuario.id);

    if (!campoCNPJ && !campoAreaAtuacao && !campoTelefone && !email) {

      console.log('esta sendo passado para editar', dadosGerais);

      Swal.fire({
        title: "Salvar Alterações?",
        icon: "question",
        confirmButtonColor: "#3085d6",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Salvar",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          api.put(`v1.0/empresas/${usuario.id}`, {
            razaoSocial: dadosGerais.nomeEmpresa,
            cnpj: dadosGerais.cnpj,
            telefone: dadosGerais.telefone,
            email: dadosGerais.email,
            // senha: 'senha123',
            setor: dadosGerais.setor,
            qtdFuncionarios: dadosGerais.qtdFuncionarios,
            // assinanteNewsletter:dadosGerais.assinanteNewsletter
          }, {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            },
          })
            .then(response => {
              console.log('deu derto resposta ');
              console.log(response);

              api.get(`v1.0/empresas/${usuario.id}`, {
                headers: {
                  Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
                },
              })
                .then((response) => {
                  console.log('NOVO USUARIO PEGO ');
                  console.log(response.data);
                  atualizarUsuario(response.data)
                  window.location.reload();
         
                })

                .catch((error) => {
                  console.log(error);
                })
                Swal.fire({
                  title: "Dados Atualizados!",
                  icon: "success"
                });
            })
            .catch(error => {
              console.log('falha ao editar');

              console.log(error);
            })

        }
      })

    } else {
      console.log('dados incorretos');
    }
  }

  return (
    <div className='dados-portfolio'>

      <h2 className='titulo-secao'>
        Dados Gerais
      </h2>

      <div className='tracinho-divisor'></div>

      <form className='inputs-portfolio' onSubmit={(e) => editarDadosGerais(e)}>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Nome da Empresa*</label>
          <input
            type="text"
            className='input-portfolio'
            value={dadosGerais.nomeEmpresa}
            onChange={(e) => atualizarCampo('nomeEmpresa', e.target.value)}
          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>CNPJ*</label>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            className='input-portfolio'
            value={dadosGerais.cnpj}

            onChange={(e) => {
              const cnpj = e.target.value.replace(/\D/g, '');
              if (cnpj.length <= 14) {
                atualizarCampo('cnpj', cnpj);
              }
            }}
          />

        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Área de Atuação *</label>
          <Select className='select-filtro'
            defaultValue={{ value: '', label: 'Selecione sua área de atuação' }}
            value={opcoesAreaAtuacao.find(opcao => opcao.label === dadosGerais.setor)}
            options={opcoesAreaAtuacao}
            onChange={(selectedOption) => atualizarCampo('setor', selectedOption.label)}

            // onKeyUp={handleKeyUp}

            styles={{
              control: (provided, state) => ({
                ...provided,
                width: '36vw',
                background: '#1B1F23',
                borderRadius: '4px',
                border: provided.isFocused ? '0.5px solid white' : '0.5px solid #01a2c3',
                boxShadow: state.isFocused ? '0 0 0 0.5px white' : 'none',
                cursor: 'pointer',
                fontWeight: '200',
                fontSize: '0.90rem',
                color: '#fafafa'
              }),
              option: (provided, state) => ({
                ...provided,
                background: state.isSelected ? '#1B1F23' : '#384048',
                ':hover': {
                  background: '#1B1F23',
                  cursor: 'pointer'
                },
              }),

              singleValue: provided => ({
                ...provided,
                color: '#fafafa',
              }),
              menu: provided => ({
                ...provided,
                width: '36vw',
              }),
            }}
          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Quantidade de Funcionários*</label>
          <Select className='select-filtro'
            defaultValue={{ value: '', label: 'Selecione um nº de funcionários' }}
            value={opcoesMediaTrabalhadores.find(opcao => opcao.value === dadosGerais.qtdFuncionarios)}
            options={opcoesMediaTrabalhadores}
            onChange={(selectedOption) => atualizarCampo('qtdFuncionarios', selectedOption.value)}

            // onKeyUp={handleKeyUp}

            styles={{
              control: (provided, state) => ({
                ...provided,
                width: '36vw',
                background: '#1B1F23',
                borderRadius: '4px',
                border: provided.isFocused ? '0.5px solid white' : '0.5px solid #01a2c3',
                boxShadow: state.isFocused ? '0 0 0 0.5px white' : 'none',
                cursor: 'pointer',
                fontWeight: '200',
                fontSize: '0.90rem',
                color: '#fafafa'
              }),
              option: (provided, state) => ({
                ...provided,
                background: state.isSelected ? '#1B1F23' : '#384048',
                ':hover': {
                  background: '#1B1F23',
                  cursor: 'pointer'
                },
              }),

              singleValue: provided => ({
                ...provided,
                color: '#fafafa',
              }),
              menu: provided => ({
                ...provided,
                width: '36vw',
              }),
            }}

          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Telefone*</label>
          <InputMask
            mask='(99) 9 9999-9999'
            type="text"
            className='input-portfolio'
            value={dadosGerais.telefone}
            onChange={(e) => {
              const telefone = e.target.value.replace(/[\D]/g, '');
              if (telefone.length <= 11) {
                atualizarCampo('telefone', telefone);
              }
            }}
          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>Email*</label>
          <input type="text"
            className='input-portfolio'
            value={dadosGerais.email}
            onChange={(e) => atualizarCampo('email', e.target.value)}
          />
        </div>

        <div className='campo-portfolio'>
          <label htmlFor="" className='label-portfolio'>CEP(opcional)</label>
          <InputMask
            mask='99999-999'
            type="text"
            className='input-portfolio'
            value={dadosGerais.cep}
            onChange={(e) => {
              const cep = e.target.value.replace(/[\D]/g, '');
              if (cep.length <= 8) {
                atualizarCampo('cep', cep);
              }
            }}
          />
        </div>


        <div className='botoes-portfolio'>

          <button className='botao-borda' onClick={() => { alert('oiii') }} type='button'>Cancelar</button>
          <ButtonFilled acao={'Salvar'} type='submit' />
        </div>
      </form>
    </div>
  )
}

export default DadosGerais