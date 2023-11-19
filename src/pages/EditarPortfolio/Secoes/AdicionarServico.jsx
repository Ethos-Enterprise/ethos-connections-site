import React from 'react'

const AdicionarServico = () => {
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

                    <h2 className='titulo-conjunto-informacoes'>Informações Gerais</h2>
                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Nome do Serviço Prestado</label>
                        <input type="text" className='input-portfolio' />
                    </div>

                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Setor</label>
                        <input type="text" className='input-portfolio' />
                    </div>

                    <div className='campo-portfolio'>
                        <label htmlFor="" className='label-portfolio'>Valor Médio dos Serviços</label>
                        <input type="text" className='input-portfolio' />
                    </div>

                    
                    <div className='campo-texto-portfolio'>
                        <label htmlFor="" className='label-text-area'>Descrição do Serviço</label>
                        <textarea name="" id="" cols="30" rows="10" className='text-area-sobre-empresa'></textarea>
                    </div>

                    <h2 className='titulo-conjunto-informacoes'>Área ESG</h2>

                </div>
            </div >
        </div>
    )
}

export default AdicionarServico