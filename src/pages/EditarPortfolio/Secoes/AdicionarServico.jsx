import React from 'react'

//select do react
import Select from 'react-select';
import { useState } from 'react';

const AdicionarServico = () => {

    const [dadosServico, setDadosServico] = useState({
        servico: '',
        valorMedio: '',
        descricao: '',
        areasESG: [],
      });

      console.log(dadosServico.areasESG[0].value);
      
      const limparCampos = () => {
        setDadosServico({
          servico: '',
          valorMedio: '',
          descricao: '',
          areasESG: [],
        });
      };
    
      const atualizarCampos = (selectedOptions) => {
        setDadosServico((prevDados) => ({
          ...prevDados,
          areasESG: selectedOptions,
        }));
      };

    const cadastrarServico = () => {
        console.log('Dados Cadastrados:', dadosServico);
        limparCampos();
      };
    
    return (
        <div>
            <div className='dados-portfolio' >
                <div className='titulo-botao-adicionar'>

                    <h2 className='titulo-secao'>
                        Adicionar Serviço
                    </h2>

                </div>
                <div className='tracinho-divisor'></div>

                <div className='inputs-portfolio'>
                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Serviço Prestado</label>
                        <input 
                        type="text" 
                        className='input-portfolio' 
                        value={dadosServico.servico}
                        onChange={(e) => setDadosServico((prevDados) => ({ ...prevDados, servico: e.target.value }))}
                        />
                    </div>

                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Valor Médio</label>
                        <input
              type='text'
              className='input-portfolio'
              value={dadosServico.valorMedio}
              onChange={(e) => setDadosServico((prevDados) => ({ ...prevDados, valorMedio: e.target.value }))}
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
                                { value: 'Environmental', label: 'Environmental' },
                                { value: 'Social', label: 'Social' },
                                { value: 'Governamental', label: 'Governamental' },
                              ]}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            value={dadosServico.areasESG}
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

                </div>
            </div >
        </div>
    )
}

export default AdicionarServico