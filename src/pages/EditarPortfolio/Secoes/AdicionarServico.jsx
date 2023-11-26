import React from 'react'

//api
import api from '../../../service/api'

//select do react
import Select from 'react-select';
import { useState } from 'react';
import ButtonFilled from '../../../components/ButtonFilled/ButtonFilled';

//react router dom
import { Link, useLocation, useNavigate} from 'react-router-dom';

//hook
import { useUsuario } from '../../../hooks/Usuario';

const AdicionarServico = (props) => {

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

    const cadastrarServico = (e) => {
        e.preventDefault();

        api.post('/v1.0/servicos', {
            nomeServico: 'Exemplo',
            descricao: 'Este é um serviço de Exemplo',
            valor: 1.0,
            areaAtuacaoEsg: [
              'ENVIRONMENTAL',
              'SOCIAL',
              'GOVERNANCE'
            ],
            fkPrestadoraServico: '3767c8e2-4aaa-4e0a-ada9-ad82223945a7',
        }, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            },
        })
            .then((response) => {
                console.log('SERVICO CADASTRADO', response);

            })
            .catch((error) => {
                console.log('deu erro aqui');
                console.log(error);
            }
            )

        limparCampos();
    };


    const voltar = () =>  {
        limparCampos();
    props.setComponente('servicos'); 
        navigate('/meu-portfolio/-editarportfolio#servicos');

    }

    return (
        <div>
            <div className='dados-portfolio' >
                <div className='titulo-botao-adicionar'>

                    <h2 className='titulo-secao'>
                        Adicionar Serviço
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

                <form className='inputs-portfolio' onSubmit={(e) => cadastrarServico(e)}>
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
                            value={dadosServico.areaAtuacaoEsg.map(option => ({ value: option, label: option }))}
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

                        <button className='botao-borda' onClick={() => { alert('oiii') }} type='button'> Desfazer Alterações</button>
                        <ButtonFilled acao={'Salvar'} type='submit' />
                    </div>
                </form>
            </div >
        </div >
    )
}

export default AdicionarServico