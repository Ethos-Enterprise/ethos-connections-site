import React from 'react'
import './Senha.css'

import { useEffect } from 'react';

function verificar(event) {
    const input = event.target;
    const label = input.parentElement.querySelector("label");

    if (input.value.trim() !== "") {
        label.classList.add("caractere-digitado-label");
    } else {
        label.classList.remove("caractere-digitado-label");
    }
}


const Senha = ({data, updateFieldHandler}) => {
    
    useEffect(() => {
        verificar({ target: document.getElementById('senha') });
        verificar({ target: document.getElementById('confirmacaoSenha') });
    
      }, []); 

    return (
        <>
            <div className="input">
                <input
                    type="password"
                    name='senha'
                    id='senha'
                    onInput={verificar}
                    value={data.senha || ""}
                    onChange={(e) => updateFieldHandler("senha", e.target.value)}
                />
                <label htmlFor="senha"><span>Senha</span></label>
            </div>

            <div className="input">
                <input
                    type="password"
                    name='confirmacaoSenha'
                    id='confirmacaoSenha'
                    onInput={verificar}
                    value={data.confirmacaoSenha || ""}
                    onChange={(e) => updateFieldHandler("confirmacaoSenha", e.target.value)}

                />
                <label htmlFor="confirmacaoSenha"><span>Confirmar Senha</span></label>
            </div>


                <div className='check-cadastro' style={{ marginTop: '32px' }}>
                    <input 
                    type="checkbox" 
                    name="termos" 
                    id="termos" 
                    value={"true"}
                    />
                    <label htmlFor="termos">Concordo com os <span>termos de uso</span> e <span>política de privacidade</span></label>
                </div>

                <div className='check-cadastro'>
                    <input 
                    type="checkbox" 
                    id="news" 
                    name="news" 
                    value={"true"}
                    />
                    <label htmlFor="news">Desejo me inscrever na Newsletter Ethos</label>
                </div>

        </>
    )
}

export default Senha