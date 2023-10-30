import React from 'react'
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
  
  const EnderecoEContato = ({data, updateFieldHandler}) => {

    useEffect(() => {
      verificar({ target: document.getElementById('cep') });
      verificar({ target: document.getElementById('telefone') });
      verificar({ target: document.getElementById('email') });
  
    }, []); 
    return (
        <>
            <div className="input">
                <input
                    type="Number"
                    name='cep'
                    id='cep'
                    onInput={verificar}
                    value={data.cep || ""}
                    onChange={(e) => updateFieldHandler("cep", e.target.value)}
                />
                <label htmlFor="cep"><span>CEP</span></label>
            </div>

            <div className="input">
                <input
                    type="number"
                    name='telefone'
                    id='telefone'
                    onInput={verificar}
                    required
                    value={data.telefone || ""}
                    onChange={(e) => updateFieldHandler("telefone", e.target.value)}
                />
                <label htmlFor="telefone"><span>Telefone Corporativo</span></label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name='email'
                    id='email'
                    onInput={verificar}
                    required
                    value={data.email || ""}
                    onChange={(e) => updateFieldHandler("email", e.target.value)}
                />
                <label htmlFor="email"><span>Email Corporativo</span></label>
            </div>

        </>
    )
}

export default EnderecoEContato