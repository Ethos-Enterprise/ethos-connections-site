import React from 'react'
import './DadosGerais.css'
import Dropdown from '../../../../components/Dropdown/Dropdown';

import { useEffect } from 'react';

function verificar(event) {
    const inputCadastro = event.target;
    const label = inputCadastro.parentElement.querySelector("label");

    if (inputCadastro.value.trim() !== "") {
        label.classList.add("caractere-digitado-label");
    } else {
        label.classList.remove("caractere-digitado-label");
    }
}

const DadosGerais = ({ data, updateFieldHandler }) => {

    const opcoesAreaAtuacao = [
        'Tecnologia da Informação',
        'Saúde e Medicina',
        'Educação',
        'Financeira e Bancária',
        'Agricultura',
        'Energia e Sustentabilidade',
        'Varejo',
        'Construção e Imóveis',
        'Alimentos e Bebidas',
        'Automobilística',
        'Entretenimento e Mídia',
        'Turismo e Hospitalidade',
        'Manufatura',
        'Telecomunicações',
        'Serviços de Consultoria',
        'Transporte e Logística',
        'Moda e Vestuário',
        'Outros'
    ];

    const opcoesMediaTrabalhadores = [
        'Até 9 funcionários',
        '10 a 20 funcionários',
        '21 a 50 funcionários',
        '51 a 100 funcionários',
        '101 a 200 funcionários',
        '201 a 500 funcionários',
        '501 a 1000 funcionários',
        '1001 ou mais funcionários'
    ];

    // Chamar verificar quando o componente é montado (pra evitar que o label fique em ima da letra ao voltar)
    useEffect(() => {
        verificar({ target: document.getElementById('nomeEmpresa') });
        verificar({ target: document.getElementById('cnpj') });
    }, []);

    return (

        <>
            <div className="input">
                <input
                    type="text"
                    name='nomeEmpresa'
                    id='nomeEmpresa'
                    onInput={verificar}
                    required
                    value={data.nomeEmpresa || ""}
                    onChange={(e) => updateFieldHandler("nomeEmpresa", e.target.value)}
                />
                <label htmlFor="nomeEmpresa"><span>Nome da Empresa *</span></label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name='cnpj'
                    id='cnpj'
                    onInput={verificar}
                    required
                    value={data.cnpj || ""}
                    onKeyDown={(e) => {
                        const deleteKey = e.key === 'Delete';
                        const backspaceKey = e.key === 'Backspace';
                    
                        if (deleteKey || backspaceKey) {
                          const inputValueCNPJ = e.target.value;
                          const sanitizedValue = inputValueCNPJ.replace(/[^\d]/g, '');
                          let dadoFormatado = '';
                    
                          for (let i = 0; i < sanitizedValue.length; i++) {
                            dadoFormatado += sanitizedValue[i];
                    
                            if (i === 1 && i < sanitizedValue.length - 1) {
                              dadoFormatado += '.';
                            } else if (i === 4 && i < sanitizedValue.length - 1) {
                              dadoFormatado += '.';
                            } else if (i === 7 && i < sanitizedValue.length - 1) {
                              dadoFormatado += '/';
                            } else if (i === 11 && i < sanitizedValue.length - 1) {
                              dadoFormatado += '-';
                            }
                          }
                    
                          updateFieldHandler("cnpj", dadoFormatado);
                        }
                      }}
                      
                    onChange={(e) => {
                        const inputValueCNPJ= e.target.value;
                        const maxLength = 14;
                        const sanitizedValue = inputValueCNPJ.replace(/[^\d]/g, '').slice(0, maxLength);
                        
                        let dadoFormatado = '';

                        for (let i = 0; i < sanitizedValue.length; i++) {
                            dadoFormatado += sanitizedValue[i];
                      
                            if (i === 1) {
                              dadoFormatado += '.';
                            } else if (i === 4) {
                              dadoFormatado += '.';
                            } else if (i === 7) {
                              dadoFormatado += '/';
                            } else if (i === 11) {
                              dadoFormatado += '-';
                            }
                          }                      

                        updateFieldHandler("cnpj", dadoFormatado);
                    }
                }
                />
                <label htmlFor="cnpj"><span>CNPJ *</span></label>
            </div>

            <div className='linha-inputs'>
                <Dropdown
                    label="Área de Atuação *"
                    options={opcoesAreaAtuacao}
                    selectedValue={data.areaAtuacao}
                    updateSelectedValue={(value) => updateFieldHandler("areaAtuacao", value)}

                />

                <Dropdown 
                    label="Nº de Funcionários *"
                options={opcoesMediaTrabalhadores} 
                selectedValue={data.mediaFuncionarios}
                updateSelectedValue={(value) => updateFieldHandler("mediaFuncionarios", value)}

                />
            </div>

        </>
    )
}

export default DadosGerais