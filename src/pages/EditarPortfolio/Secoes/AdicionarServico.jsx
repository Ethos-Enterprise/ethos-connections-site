import React from 'react'

//api
import api from '../../../service/api'

//select do react
import Select from 'react-select';
import { useState, useEffect } from 'react';
import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled';

//react router dom
import { Link, useLocation, useNavigate } from 'react-router-dom';

//hook
import { useUsuario } from '../../../hooks/Usuario';

const AdicionarServico = (props) => {

    const [edicao, setEdicao] = useState(false);

    const { usuario } = useUsuario();

    const location = useLocation();
    const navigate = useNavigate();


    const [dadosServico, setDadosServico] = useState({
        nomeServico: '',
        valor: '',
        descricao: '',
        areaAtuacaoEsg: [],
        fkPrestadoraServico: usuario.id
    });

    useEffect(() => {
        if (location.state && location.state.dadosServicoParaEditar) {
            setDadosServico(location.state.dadosServicoParaEditar);
            setEdicao(true)
            console.log('mudeii', edicao);
        }
    }, [location.state]);


    console.log(dadosServico);

    const limparCampos = () => {
        setDadosServico({
            nomeServico: '',
            valor: '',
            descricao: '',
            areaAtuacaoEsg: [],
            fkPrestadoraServico: usuario.id
        });
    };

    const atualizarCampos = (selectedOptions) => {
        setDadosServico((prevDados) => ({
            ...prevDados,
            areaAtuacaoEsg: selectedOptions.map(option => option.value),
        }));
    };

    // const cadastrarServico = (e) => {
    //     e.preventDefault();
    //     console.log('cadastrrr');
    //     api.post('/v1.0/servicos', {
    //         nomeServico: 'Exemplo',
    //         descricao: 'Este é um serviço de Exemplo',
    //         valor: 1.0,
    //         areaAtuacaoEsg: [
    //             'ENVIRONMENTAL',
    //             'SOCIAL',
    //             'GOVERNANCE'
    //         ],
    //         fkPrestadoraServico: '3767c8e2-4aaa-4e0a-ada9-ad82223945a7',
    //     }, {
    //         headers: {
    //             Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
    //         },
    //     })
    //         .then((response) => {
    //             console.log('SERVICO CADASTRADO', response);

    //         })
    //         .catch((error) => {
    //             console.log('deu erro aqui');
    //             console.log(error);
    //         }
    //         )

    //     limparCampos();
    // };


    // const editarServico= (e) => {
    //     e.preventDefault();

    //     console.log('api editar servico');
    //     Swal.fire({
    //         title: "Salvar Alterações?",
    //         icon: "question",
    //         confirmButtonColor: "#3085d6",
    //         showCancelButton: true,
    //         cancelButtonColor: "#d33",
    //         cancelButtonText: "Cancelar",
    //         confirmButtonText: "Salvar",
    //         reverseButtons: true,
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           api.put('caminho editar servico do id tal', {

    //           }, {
    //             headers: {
    //               Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
    //             },
    //           })
    //             .then((response) => {
    //               console.log('editar dados portfolio', response);
    //                 // posso pegar os dados do portfolio e atualizar pela api e dps recarregar
    //               Swal.fire({
    //                 title: "Dados Atualizados!",
    //                 icon: "success"
    //               });
    //             })

    //             .catch((error) => {
    //               console.log('erro ao editar portfolio', error);
    //             })
    //         }
    //       })
    // }


    const cadastrarServico = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Cadastrar Serviço?",
            icon: "question",
            confirmButtonColor: "#3085d6",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonText: "Cadastrar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const dadosServicoArmazenar = {
                    nomeServico: dadosServico.nomeServico,
                    descricao: dadosServico.descricao,
                    valor: dadosServico.valor,
                    areaAtuacaoEsg: 'environmental',
                };

                sessionStorage.setItem('dadoServicoArmazenado', JSON.stringify(dadosServicoArmazenar));
                limparCampos();
                Swal.fire({
                    title: "Serviço cadastrado!",
                    icon: "success"
                });
                voltar();
            }
        });
    }
    const editarServico = (e) => {
        e.preventDefault();

        Swal.fire({
            title: "Editar Serviço?",
            icon: "question",
            confirmButtonColor: "#3085d6",
            showCancelButton: true,
            cancelButtonColor: "#d33",
            confirmButtonText: "Editar",
            cancelButtonText: "Cancelar",
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {

                const dadosAtuais = JSON.parse(sessionStorage.getItem('dadoServicoArmazenado')) || {};
                const servicosAtualizados = {
                    ...dadosAtuais,
                    nomeServico: dadosServico.nomeServico,
                    descricao: dadosServico.descricao,
                    valor: dadosServico.valor,
                    areaAtuacaoEsg: 'environmental',
                };

                sessionStorage.setItem('dadoServicoArmazenado', JSON.stringify(servicosAtualizados));

                limparCampos();
                voltar();
                Swal.fire({
                    title: "Serviço Editado!",
                    icon: "success"
                });
                voltar();
            }
        });
    };


    const voltar = () => {
        limparCampos();
        props.setComponente('servicos');
        navigate('/meu-portfolio/editar-portfolio#servicos');
    }



    return (
        <div>
            <div className='dados-portfolio' >
                <div className='titulo-botao-adicionar'>

                    <h2 className='titulo-secao'>
                        {edicao ? 'Editar Serviço' : 'Adicionar Serviço'}
                    </h2>


                    <div className='botao-adicionar-servico' onClick={voltar}>
                        <span className='acao-botao-adicionar-servico'>
                            <span className='icone-adicionar-servico'>
                                {'<'}</span>
                            Voltar
                        </span>
                    </div>
                </div>
                <div className='tracinho-divisor'></div>

                <form className='inputs-portfolio' onSubmit={(e) => edicao ? editarServico(e) : cadastrarServico(e)}>
                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Serviço Prestado</label>
                        <input
                            type="text"
                            className='input-portfolio'
                            value={dadosServico.nomeServico}
                            onChange={(e) => setDadosServico((prevDados) => ({ ...prevDados, nomeServico: e.target.value }))}
                        />
                    </div>

                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Valor Médio</label>
                        <input
                            type='text'
                            className='input-portfolio'
                            value={dadosServico.valor}
                            onChange={(e) => setDadosServico((prevDados) => ({ ...prevDados, valor: e.target.value }))}
                        />
                    </div>


                    <div className='campo-texto-portfolio'>
                        <label htmlFor="" className='label-text-area'>Descrição</label>
                        <textarea
                            name=''
                            id=''
                            cols='30'
                            rows='10'
                            className='text-area-sobre-empresa'
                            value={dadosServico.descricao}
                            onChange={(e) => setDadosServico((prevDados) => ({ ...prevDados, descricao: e.target.value }))}
                        ></textarea>
                    </div>

                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Área ESG (1 ou mais)</label>
                        <Select
                            isMulti
                            placeholder='Selecione as áreas ESG do serviço'
                            name="colors"
                            options={[
                                { value: 'ENVIRONMENTAL', label: 'Environmental' },
                                { value: 'SOCIAL', label: 'Social' },
                                { value: 'GOVERNANCE', label: 'Governance' },
                            ]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={
                                Array.isArray(dadosServico.areaAtuacaoEsg) ?
                                    dadosServico.areaAtuacaoEsg.map(option => ({ value: option, label: option })) :
                                    (edicao ? [{ value: 'ENVIRONMENTAL', label: 'Environmental' }] : [])
                            }
                            onChange={atualizarCampos}
                            styles={{
                                control: (provided, state) => ({
                                    ...provided,
                                    width: '36vw',
                                    background: '#1B1F23',
                                    borderRadius: '4px',
                                    border: provided.isFocused ? '0.5px solid white' : '0.5px solid #01a2c3',
                                    boxShadow: state.isFocused ? '0 0 0 0.5px white' : 'none',
                                    cursor: 'pointer',
                                    fontWeight: '500',
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
                                    fontWeight: '400'

                                }),
                                menu: provided => ({
                                    ...provided,
                                    width: '36vw',
                                }),
                                multiValue: (provided) => ({
                                    ...provided,
                                    backgroundColor: '#014D5C',
                                    color: 'white',
                                    fontWeight: '400'

                                }),
                                multiValueLabel: (provided) => ({
                                    ...provided,
                                    color: 'white',
                                    fontWeight: '400'
                                }),
                                multiValueRemove: (provided) => ({
                                    ...provided,
                                    color: 'white',
                                    ':hover': {
                                        backgroundColor: '#008bb5',
                                        color: 'white',
                                        fontWeight: '400'

                                    },
                                }),
                            }}
                        />
                    </div>

                    <div className='botoes-portfolio'>
                        {edicao ? (
                            <>
                                <button className='botao-borda' onClick={() => { alert('oiii') }} type='button'> Cancelar</button>
                                <ButtonFilled acao={'Salvar'} type='submit' />
                            </>
                        ) : (
                            <>
                                <button className='botao-borda' onClick={() => { alert('oiii') }} type='button'> Cancelar</button>
                                <ButtonFilled acao={'Salvar'} type='submit' />
                            </>
                        )}

                    </div>
                </form>
            </div >
        </div >
    )

}

export default AdicionarServico
