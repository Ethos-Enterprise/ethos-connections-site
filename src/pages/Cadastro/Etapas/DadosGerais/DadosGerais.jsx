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
        'Menos de 10 funcionários',
        '10 a 20 funcionários',
        '21 a 50 funcionários',
        '51 a 100 funcionários',
        '101 a 200 funcionários',
        '201 a 500 funcionários',
        '501 a 1000 funcionários',
        'Mais de 1000 funcionários'
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
                <label htmlFor="nomeEmpresa"><span>Nome da Empresa</span></label>
            </div>

            <div className="input">
                <input
                    type="number"
                    name='cnpj'
                    id='cnpj'
                    onInput={verificar}
                    required
                    value={data.cnpj || ""}
                    onChange={(e) => updateFieldHandler('cnpj', e.target.value)}

                />
                <label htmlFor="cnpj"><span>CNPJ</span></label>
            </div>

            <div className='linha-inputs'>
                <Dropdown
                    options={opcoesAreaAtuacao}
                    selectedValue={data.areaAtuacao}
                    updateSelectedValue={(value) => updateFieldHandler("areaAtuacao", value)}

                />

                <Dropdown 
                options={opcoesMediaTrabalhadores} 
                selectedValue={data.mediaFuncionarios}
                updateSelectedValue={(value) => updateFieldHandler("mediaFuncionarios", value)}

                />
            </div>

        </>
    )
}

export default DadosGerais