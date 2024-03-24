//api
import api from '../../service/api.js'


//css
import './PaginaInicial.css'

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import Servico from '../../components/Serviços/Servico.jsx';
import UltimosServicos from './UltimosServicos/UltimosServicos.jsx';

//coisas do react
import { useNavigate, Link } from 'react-router-dom';

//hook
import { useUsuario } from '../../hooks/Usuario.jsx';
import React, { useEffect, useState } from 'react';

//select do react
import Select from 'react-select';

//imagem
import imgEnvironmental from '../../assets/imagens/environmental.png'
import imgSocial from '../../assets/imagens/social.jpg'
import imgGovernance from '../../assets/imagens/governance.jpg'
import axios from 'axios';

export const PaginaInicial = () => {

  const { usuario } = useUsuario();

  const navigate = useNavigate();

  const [servicos, setServicos] = useState([]);

  const [pesquisaServico, setPesquisaServico] = useState('');
  const [ultimaPesquisa, setUltimaPesquisa] = useState('');

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);


  const [filtroValor, setFiltroValor] = useState('');


  useEffect(() => {

    console.log('servicos');
    
    api.get("/v1.0/servicos")
      .then(async (response) => {
        console.log(response.data);
        const servicosComNomeEmpresa = await Promise.all(
          response.data.map(async (servico) => {
            const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
            // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
            return { ...servico, razaoSocial };
          })
        );
        setServicos(servicosComNomeEmpresa);
      })
      .catch(error => {
        if (error.response) {
          console.log('Erro de resposta do servidor:', error.response.data);
        } else if (error.request) {
          console.log('Erro de rede:', error.request);
        } else {
          console.log('Erro ao enviar solicitação:', error.message);
        }
      })
  }, []);


  const buscarServicosPorNome = () => {
    if (pesquisaServico !== '') {
      api.get("/v1.0/servicos/busca-por-nome", {
        params: { 
          nome: pesquisaServico 
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
        .catch(error => {
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
        })
    } else {
      console.log('nao esta pesquisando nada');
    }
  }

  // const buscarPorValorMedio = () => {
  //   if (filtroValor !== '') {
  //     if (ultimaPesquisa == '') {

  //       api.get('v1.0/servicos/busca-por-valor', {
  //         params: { valor: parseFloat(filtroValor) },
  //         headers: {
  //           Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //         }
  //       })
  //         .then(async (response) => {
  //           if (response.status !== 204) {
  //             const responseData = Array.isArray(response.data) ? response.data : [response.data];

  //             const servicosComNomeEmpresa = await Promise.all(
  //               responseData.map ? responseData.map(async (servico) => {
  //                 const razaoSocial = await buscarInformacoesEmpresa(servico.fkPrestadoraServico);
  //                 // const fotoPerfil = await buscarFotoPerfil(servico.fkPrestadoraServico);
  //                 return { ...servico, razaoSocial };
  //               }) : [responseData]
  //             );
  //             setServicos(servicosComNomeEmpresa);

  //           } else {
  //             setServicos([])
  //           }
  //         })
  //         .catch((error) =>
  //           console.log(error)
  //         )
  //     } else {
  //       const servicosFiltrados = servicos.filter(servico => servico.valor <= parseFloat(filtroValor));
  //       setServicos(servicosFiltrados);
  //     }

  //   }
  // }


  const buscarPorValorMedio = () => {
    if (filtroValor !== '') {
      const servicosFiltradosPorValor = servicos.filter(servico => servico.valor <= parseFloat(filtroValor));
      setServicos(servicosFiltradosPorValor);
    }
  }

  const buscarInformacoesEmpresa = (id) => {

    return api.get(`/v1.0/prestadoras`)
    .then((responsePrestadora) => {
      const fkEmpresaPrestadora = responsePrestadora.data.find(p => p.idPrestadora === id);

      return api.get(`/v1.0/empresas/${fkEmpresaPrestadora.fkEmpresa}`);
    })
    .then((responseOutraRequisicao) => {
      console.log('Resultado da segunda requisição: ', responseOutraRequisicao.data);
      return responseOutraRequisicao.data.razaoSocial;
    })
    .catch((error) => {
      console.log('algo deu errado em uma das requisições', error.response);
      throw error;
    });

  };

  const buscarFotoPerfil = (id) => {
    return api.get(`v1.0/empresas/${id}`, {
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

  const filtrarServicos = (categoria) => {

    setCategoriaSelecionada(categoria);
  };

  const limparFiltro = () => {
    setCategoriaSelecionada(null)
  }

  const servicosFiltrados = categoriaSelecionada
    ? servicos.filter(servico => servico.areaAtuacaoEsg.toLowerCase() === categoriaSelecionada)
    : servicos;

  return (
    <div className='pagina-inicial'>

      <HeaderPlataforma
        plano={usuario.plano}
        razaoSocial={usuario.razaoSocial}

      />

      <div className='conteudo'>

        <div className='beadcrumb'>
          <Link to='/solucoes-esg' className='link-beadcrumb-atual'><span>Soluções ESG </span>  </Link>
        </div>

        <div className='container-ultimos-serviços'>
          <h4 className='titulo-ultimos-servicos'>Categorias ESG </h4>
          <div className='ultimos-servicos'>
            <UltimosServicos nomeServico={"Environmental"} imagemFundo={imgEnvironmental} onClick={() => filtrarServicos("environmental")} ativo={categoriaSelecionada === "environmental"} />
            <UltimosServicos nomeServico={"Social"} imagemFundo={imgSocial} onClick={() => filtrarServicos("social")} ativo={categoriaSelecionada === "social"} />
            <UltimosServicos nomeServico={"Governance"} imagemFundo={imgGovernance} onClick={() => filtrarServicos("governance")} ativo={categoriaSelecionada === "governance"} />
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
                  width: '23vw',
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

                  width: '23vw',
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

        {ultimaPesquisa !== '' ? (
          <div className='caixa-mensagem-filtro'>

            <h4 className='resultado-pesquisa'>Exibindo resultados para: "{ultimaPesquisa}"</h4>

            <h4 className='resultado-pesquisa-2' onClick={() => limparFiltro()}>Limpar Filtros</h4>
          </div>
          
        ) : categoriaSelecionada !== null ? (
          <div className='caixa-mensagem-filtro'>

          <h4 className='resultado-pesquisa'>Exibindo soluções da categoria: "{categoriaSelecionada}"</h4>

          <h4 className='resultado-pesquisa-2' onClick={() => limparFiltro()}>Limpar Filtros</h4>
          </div>

        ) : (
          <h4 className='resultado-pesquisa'>Exibindo todas as Soluções</h4>
        )}

        <div className='servicos-pesquisados'>

          {servicosFiltrados.length > 0 ? (
            servicosFiltrados.map((servico) => (
              <Servico
                key={servico.id}
                id={servico.id}
                ocasiao={'solucoes'}
                nomeServico={servico.nomeServico}
                nomeEmpresa={servico.razaoSocial}
                descricao={servico.descricao}
                valorMedio={(servico.valor).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
                areaESG={servico.areaAtuacaoEsg.toLowerCase()}
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