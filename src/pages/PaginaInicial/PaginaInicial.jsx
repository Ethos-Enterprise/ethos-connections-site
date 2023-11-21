//api
import api from '../../service/api.js'


//css
import './PaginaInicial.css'

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Sevico.jsx';
import UltimosServicos from './UltimosServicos/UltimosServicos.jsx';

//coisas do react
import { useNavigate, Link } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import React, { useEffect, useState } from 'react';

//select do react
import Select from 'react-select';


export const PaginaInicial = () => {

  const { usuario } = useUsuario();

  const navigate = useNavigate();

  const [servicos, setServicos] = useState([]);

  const [pesquisaServico, setPesquisaServico] = useState('');
  const [ultimaPesquisa, setUltimaPesquisa] = useState('');

  const [filtroValor, setFiltroValor] = useState('');


  useEffect(() => {
    api.get("v1.0/servicos", {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      }
    })
      .then(async (response) => {
        const servicosComNomeEmpresa = await Promise.all(
          response.data.map(async (servico) => {
            const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
            // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
            return { ...servico, razaoSocial };
          })
        );
        setServicos(servicosComNomeEmpresa);
      })
      .catch((error) => {
        console.log('erro ao pegar todos os serviços. ERRO: ', error);
      })
  }, []);

  const buscarServicosPorNome = () => {
    if (pesquisaServico !== '') {
      api.get("v1.0/servicos/busca-por-nome", {
        params: { nome: pesquisaServico },
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
        }
      })

        .then(async (response) => {
          console.log(response.status);
          if (response.status !== 204) {
            const responseData = Array.isArray(response.data) ? response.data : [response.data];

            const servicosComNomeEmpresa = await Promise.all(
              responseData.map ? responseData.map(async (servico) => {
                const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
                // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
                return { ...servico, razaoSocial };
              }) : [responseData]
            );
            setServicos(servicosComNomeEmpresa);
            setUltimaPesquisa(pesquisaServico);
            setPesquisaServico(pesquisaServico);
          } else {
            setServicos([])
            setUltimaPesquisa(pesquisaServico);

          }
        })
        .catch((error) =>
          console.log(error)
        )
    } else {
      console.log('nao esta pesquisando nada');
    }
  }

  const buscarPorValorMedio = () => {
    if (filtroValor !== '') {
      if (ultimaPesquisa == '') {

        api.get('v1.0/servicos/busca-por-valor', {
          params: { valor: parseFloat(filtroValor) },
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
          }
        })
          .then(async (response) => {
            if (response.status !== 204) {
              const responseData = Array.isArray(response.data) ? response.data : [response.data];

              const servicosComNomeEmpresa = await Promise.all(
                responseData.map ? responseData.map(async (servico) => {
                  const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
                  // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
                  return { ...servico, razaoSocial };
                }) : [responseData]
              );
              setServicos(servicosComNomeEmpresa);

            } else {
              setServicos([])
            }
          })
          .catch((error) =>
            console.log(error)
          )
      } else {
        const servicosFiltrados = servicos.filter(servico => servico.valor <= parseFloat(filtroValor));
        setServicos(servicosFiltrados);
      }

    }
  }

  const buscarInformacoesEmpresa = (id) => {
    return api.get(`/v1.0/empresas/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      }
    })
      .then((response) => {
        return response.data.razaoSocial
      })
      .catch((error) => {
        console.log('algo deu errado ao pegar o nome ', error);
        throw error;
      });
  };

  const buscarFotoPerfil = (id) => {
    return api.get(`/v1.0/empresas/${id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      }
    })
      .then((response) => {
        const razaoSocial = response.data.razaoSocial;
        console.log(razaoSocial);
        return razaoSocial;
      })
      .catch((error) => {
        console.log('algo deu errado ao pegar o nome ', error);
        throw error;
      });
  };

  const teclaPressionadaPesquisa = (event) => {
    if (event.key === 'Enter') {
      buscarServicosPorNome();
    }
  };

  const optionsEstados = [
    { value: '', label: 'Selecione seu estado' },
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  return (
    <div className='pagina-inicial'>

      <HeaderPlataforma
        plano={'Free'}
        razaoSocial={usuario.razaoSocial}

      />

      <div className='conteudo'>

        <div className='beadcrumb'>
          <Link to='/solucoes-esg' className='link-beadcrumb-atual'><span>Soluções ESG </span>  </Link>
        </div>

        <div className='container-ultimos-serviços'>
          <h4 className='titulo-ultimos-servicos'>Categorias ESG </h4>
          <div className='ultimos-servicos'>
            <UltimosServicos nomeServico={"Environmental"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            <UltimosServicos nomeServico={"Social"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            <UltimosServicos nomeServico={"Governanmental"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} />
            {/* <UltimosServicos nomeServico={"Emissão de Carbono 0"} nomeEmpresaServico={"Safe Solutions"} valorServico={"R$100.00 "} /> */}
          </div>

        </div>

        <div className='input-pesquisa'>
          <input className='pesquisa'
            type="text"
            placeholder='Buscar soluções'
            value={pesquisaServico}
            onChange={(e) => setPesquisaServico(e.target.value)}
            onKeyDown={teclaPressionadaPesquisa}
          />

          <button className="botao-pesquisar" onClick={buscarServicosPorNome}><i className="fa-solid fa-magnifying-glass icone-botao-pesquisar" ></i></button>
        </div>

        <div className='filtros-pesquisa'>
          <p className='titulo-filtro'>Filtros</p>
          <div className='filtros'>



            <div className='input-filtro'>
              <input className='filtro'
                type="text"
                placeholder='Preço médio (máximo)'
                value={filtroValor}
                onChange={(e) => setFiltroValor(e.target.value)}
              />
              <button className='botao-filtrar' onClick={buscarPorValorMedio}>Filtrar</button>
            </div>

            <Select className='select-filtro'
              defaultValue={{ value: '', label: 'Selecione seu estado' }}
              options={optionsEstados}
              // onChange={handleChange}
              // onKeyUp={handleKeyUp}

              styles={{
                control: (provided, state) => ({
                  ...provided,
                  width: '20vw',
                  background: '#1B1F23',
                  borderRadius: '4px',
                  border: provided.isFocused ? '0.5px solid white' : '0.5px solid #01a2c3',
                  borderColor: provided.isMenuOpen ? 'red' : '#01a2c3',
                  boxShadow: state.isFocused ? '0 0 0 0.5px white' : 'none',
                  cursor: 'pointer',
                  fontWeight: '200',
                  fontSize: '0.90rem',
                  color: '#fafafa'
                }),
                option: (provided, state) => ({
                  ...provided,
                  background: state.isSelected ? '#1B1F23' : '#384048',
                  color: state.isSelected ? '#00000' : 'white',
                  ':hover': {
                    background: '#1B1F23',
                    cursor: 'pointer'
                  },
                }),

                singleValue: provided => ({
                  ...provided,
                  color: '#fafafa',
                }),
                placeholder: provided => ({
                  ...provided,
                  color: 'red',
                }),
              }}

            />

            <Select className='select-filtro'
              defaultValue={{ value: '', label: 'Selecione sua cidade' }}
              options={optionsEstados}
              // onChange={handleChange}
              // onKeyUp={handleKeyUp}


              styles={{
                control: (provided, state) => ({
                  ...provided,

                  width: '20vw',
                  background: '#1B1F23',
                  borderRadius: '4px',
                  border: provided.isFocused ? '0.5px solid white' : '0.5px solid #01a2c3',
                  borderColor: provided.isMenuOpen ? 'red' : '#01a2c3',
                  boxShadow: state.isFocused ? '0 0 0 0.5px white' : 'none',
                  cursor: 'pointer',
                  fontWeight: '200',
                  fontSize: '0.90rem',
                  color: '#fafafa'
                }),
                option: (provided, state) => ({
                  ...provided,
                  background: state.isSelected ? '#1B1F23' : '#384048',

                  color: state.isSelected ? '#01a2c3' : 'white',
                  ':hover': {
                    background: '#1B1F23',
                    cursor: 'pointer',
                    color: '#01a2c3'
                  },
                }),

                singleValue: provided => ({
                  ...provided,
                  color: '#fafafa', // Altere esta cor para a cor desejada
                }),
                placeholder: provided => ({
                  ...provided,
                  color: 'red', // Cor do texto quando não há seleção
                }),
              }}
            />

          </div>
        </div>

        {ultimaPesquisa != '' ? (
          <h4 className='resultado-pesquisa'>Exibindo resultados para: "{ultimaPesquisa}"</h4>
        ) : (
          <h4 className='resultado-pesquisa'>Exibindo todas as Soluções</h4>
        )}
        <div className='servicos-pesquisados'>

          {/* LISTAR SERVICOS QUE VEM ATRAVAES A REQUISICAO */}
          {servicos.length > 0 ? (
            servicos.map((servico) => (
              <Servico
                key={servico.id}
                id={servico.id}
                fotoPerfil={true}
                nomeServico={servico.nomeServico}
                nomeEmpresa={servico.razaoSocial}
                descricao={servico.descricao}
                valorMedio={(servico.valor).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                areaESG={servico.areaAtuacaoEsg}
                fkPrestadoraServico={servico.fkPrestadoraServico}
              />
            ))
          ) : (
            <p>Nenhum resultado encontrado.</p>
          )}

        </div>

      </div>

      <FooterPlataforma />
    </div>
  )
}

export default PaginaInicial