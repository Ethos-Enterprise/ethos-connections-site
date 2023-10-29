import React from 'react'
import './DadosGerais.css'

function verificar(event) {
    const inputCadastro = event.target;
    const label = inputCadastro.parentElement.querySelector("label");

    if (inputCadastro.value.trim() !== "") {
        label.classList.add("caractere-digitado-label");
    } else {
        label.classList.remove("caractere-digitado-label");
    }
}

const DadosGerais = () => {

    // const { nomeEmpresa, cnpj, areaAtuacao, qtdFuncionarios } = data;

    
    return (
        <>

            <div className="input">
                <input 
                    type="text"
                    id='nome-empresa'
                    onInput={verificar}
                    // value={nomeEmpresa}
                    // onChange={(e) => onAdvance('nomeEmpresa', e.target.value)}


                />
                <label htmlFor="nome-empresa"><span>Nome da Empresa</span></label>
            </div>

            <div className="input">
                <input
                    type="number"
                    id='cnpj'
                    onInput={verificar}
                    // value={cnpj}
                    // onChange={(e) => onAdvance('cnpj', e.target.value)}


                />
                <label htmlFor="cnpj"><span>CNPJ</span></label>
            </div>

            <div className='linha-inputs'>
                <div className="input-cadastro-2">
                    <select
                        type="text"
                        id='area-de-atuacao'
                        onInput={verificar}
                        // value={areaAtuacao}
                        // onChange={(e) => onAdvance('areaAtuacao', e.target.value)}

                    />
                    <label htmlFor="area-de-atuacao"><span>Área de Atuação</span></label>
                </div>

                <div className="input-cadastro-2">
                    <input
                        type="number"
                        id='qtd-funcionarios'
                        onInput={verificar}
                        // value={qtdFuncionarios}
                        // onChange={(e) => onAdvance('qtdFuncionarios', e.target.value)}

                    />
                    <label htmlFor="qtd-funcionarios"><span>Média de Funcionários</span></label>
                </div>

            </div>

        </>
    )
}

export default DadosGerais