import React from 'react';

const LinhaContato = ({ nomeEmpresa, nomeServico, dataContato, statusAtual, onEdit }) => {
    return (
        <>
            <div className='linha-contato'>
                <div className='dado-nome-empresa'>{nomeEmpresa}</div>
                <div className='dado-nome-servico'>{nomeServico}</div>
                <div className='dado-data-contato'>{dataContato}</div> 
                <div className='dado-status-atual'>{statusAtual}</div>
                <div className='dado-final' onClick={onEdit}>
                    <i className="fa-regular fa-pen-to-square icone-atualizar"></i>
                    Atualizar Status
                </div>
            </div>
            <div className='tracinho-divisor-negociacoes'></div>
        </>
    );
};

export default LinhaContato;
