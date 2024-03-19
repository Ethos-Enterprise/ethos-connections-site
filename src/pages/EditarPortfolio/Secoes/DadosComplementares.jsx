import React from 'react'

import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled'
import ButtonOutlined from '../../../components/ButtonOutlined/ButtonOutlined'

import { useState, useEffect } from 'react';

//api
import api from "../../../service/api";

import axios from "axios";

import { useUsuario } from '../../../hooks/Usuario';

const DadosComplementares = () => {
  const { usuario } = useUsuario(); 
  const { atualizarUsuario } = useUsuario();

  // DADOS DA PAGINA
  const [dadosComplementares, setDadosComplementares] = useState({
    descricaoBreve: '',
    sobreEmpresa: '',
    linkSite: '',
    dataCertificada: '',
  });

  const [isEditando, setIsEditando] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // MUDEI AQUIIII AGORA
        const response = await api.get(`/v1.0/portfolios/prestadora/${usuario.idPrestadora}`);

        if (response.data) {
          setDadosComplementares({
            descricaoBreve: response.data.descricaoEmpresa ,
            sobreEmpresa: response.data.sobreEmpresa ,
            linkSite: response.data.linkWebsiteEmpresa ,
            dataCertificada: response.data.dataEmpresaCertificada ,
          });
          setIsEditando(true);
        }
      } catch (error) {
        console.error("Erro ao buscar dados", error);
      }
    };

    fetchData();
  }, []);

  const atualizarCampos = (campo, valor) => {
    setDadosComplementares((prevDados) => ({
      ...prevDados,
      [campo]: valor,
    }));
  };
  console.log(dadosComplementares);

  const editarDadosComplementares = (e) => {  
    console.log('Função editarDadosComplementares chamada!');
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
        const dadosDoPortifolio = {
          // urlImagemPerfil: 'nao vai ter foto',
          // urlBackgroundPerfil: 'nao vai ter background',
          descricaoEmpresa: dadosComplementares.descricaoBreve,
          sobreEmpresa: dadosComplementares.sobreEmpresa,
          linkWebsiteEmpresa: dadosComplementares.linkSite,
          dataEmpresaCertificada: dadosComplementares.dataCertificada,
          fkPrestadoraServico: usuario.idPrestadora,
        };
  
        api.put(`/v1.0/portfolios/${usuario.idPortfolio}`, dadosDoPortifolio)
          .then((response) => {
            console.log('Editar dados do portfólio', response);
            Swal.fire({
              title: "Seus dados foram salvos!",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log('Erro ao editar portfólio', error);
            Swal.fire({
              title: "Erro ao salvar os dados!",
              text: "Ocorreu um erro ao salvar os dados. Por favor, tente novamente.",
              icon: "error",
            });
          });
      }
    });
  };
  

  const cadastrarPortfolio= () => {
    const dadosDoPortifolio = {
      descricaoEmpresa: dadosComplementares.descricaoBreve,
      sobreEmpresa: dadosComplementares.sobreEmpresa,
      linkWebsiteEmpresa: dadosComplementares.linkSite,
      dataEmpresaCertificada: dadosComplementares.dataCertificada,
      fkPrestadoraServico: usuario.idPrestadora
    };

    console.log(dadosDoPortifolio);

    api.post('/v1.0/portfolios', dadosDoPortifolio)
    // api.post('/v1.0/portfolios', dadosDoPortifolio)
    .then((response) => {
        console.log('Criar portfólio', response);
        sessionStorage.setItem('dadosComplementares', JSON.stringify(dadosDoPortifolio));

        Swal.fire({
          title: "Seus dados foram salvos!",
          icon: "success",
        });
      })
      .catch((error) => {

        if (error.response) {
          // O servidor respondeu com um código de status diferente de 2xx
          console.log('Erro de resposta do servidor:', error.response.data);
        } else if (error.request) {
          // A solicitação foi feita, mas não recebeu resposta
          console.log('Erro de rede:', error.request);
        } else {
          // Um erro ocorreu durante a configuração da solicitação
          console.log('Erro ao enviar solicitação:', error.message);
        }

        Swal.fire({
          title: "Erro ao salvar os dados!",
          text: "Ocorreu um erro ao salvar os dados. Por favor, tente novamente.",
          icon: "error",
        });
      });
      
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditando) {
      editarDadosComplementares();
    } else {
      cadastrarPortfolio();
    }
  };



    return (
      <div className='dados-portfolio'>
        <h2 className='titulo-secao'>
          Dados Complementares
        </h2>
        <div className='tracinho-divisor'></div>

        <form className='inputs-portfolio' onSubmit={ handleSubmit}>

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

            <button className='botao-borda' onClick={() => { alert('oiii') }} type='button'>Cancelar</button>
            <ButtonFilled acao={isEditando ? 'Salvar Alterações' : 'Cadastrar'} type='submit'/>

          </div>

        </form>
      </div>
    )
  }

  export default DadosComplementares