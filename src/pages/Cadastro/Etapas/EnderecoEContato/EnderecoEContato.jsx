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
                    type="text"
                    name='cep'
                    id='cep'
                    onInput={verificar}
                    value={data.cep || ""}
                    onKeyDown={(e) => {
                        const deleteKey = e.key === 'Delete';
                        const backspaceKey = e.key === 'Backspace';
                    
                        if (deleteKey || backspaceKey) {
                          const inputValueCEP = e.target.value;
                          const cepSanitizedValue = inputValueCEP.replace(/[^\d]/g, '');
                          let cepFormatado = '';
                    
                          for (let i = 0; i < cepSanitizedValue.length; i++) {
                            cepFormatado += cepSanitizedValue[i];
                    
                            if (i === 1 && i < cepSanitizedValue.length - 1) {
                              cepFormatado += '.';
                            }
                          }
                    
                          updateFieldHandler("cep", cepFormatado);
                        }
                      }}

                    onChange={(e) => {
                        const inputValueCEP = e.target.value;
                        const maxLength = 8;
                        const cepSanitizedValue = inputValueCEP.replace(/[^\d]/g, '').slice(0, maxLength);

                        let cepFormatado = '';

                        for (let i = 0; i < cepSanitizedValue.length; i++) {
                            cepFormatado += cepSanitizedValue[i];
                      
                            if (i === 4) {
                              cepFormatado += '-';
                            } 
                          }  

                        updateFieldHandler("cep", cepFormatado)
                    }
                    }
                />
                <label htmlFor="cep"><span>CEP {'(opcional)'}</span></label>
            </div>

            <div className="input">
                <input
                    type="text"
                    name='telefone'
                    id='telefone'
                    onInput={verificar}
                    required
                    value={data.telefone || ""}
                    onKeyDown={(e) => {
                        const deleteKey = e.key === 'Delete';
                        const backspaceKey = e.key === 'Backspace';
                    
                        if (deleteKey || backspaceKey) {
                          const inputValueTelefone = e.target.value;
                          const telefoneSanitizedValue = inputValueTelefone.replace(/[^\d]/g, '');
                          let telefoneFormatado = '';
                    
                          for (let i = 0; i < telefoneSanitizedValue.length; i++) {
                            telefoneFormatado += telefoneSanitizedValue[i];
                    
                            if (i === 1 && i < telefoneSanitizedValue.length - 1) {
                              telefoneFormatado += '.';
                            }
                          }
                    
                          updateFieldHandler("telefone", telefoneFormatado);
                        }
                      }}
                    onChange={(e) => {
                        const inputValueTelefone = e.target.value;
                        const maxLengthTelefone = 11;
                        const telefoneSanitizedValue = inputValueTelefone.replace(/[^\d]/g, '').slice(0, maxLengthTelefone);

                        let telefoneFormatado = '';

                        for (let i = 0; i < telefoneSanitizedValue.length; i++) {
                            telefoneFormatado += telefoneSanitizedValue[i];
                            
                            if (i === 0) {
                                telefoneFormatado = '(' + telefoneFormatado;
                            } else if (i === 1) {
                                telefoneFormatado += ') ';
                            }

                            if (i === 2 && telefoneSanitizedValue[i] === '9') {
                                telefoneFormatado += ' ';
                            } 

                            if(i === 5 && telefoneSanitizedValue[2] != '9'){
                                telefoneFormatado+='-'
                            }

                            if(i === 6 && telefoneSanitizedValue[2] === '9'){
                                telefoneFormatado += '-'
                            }
                            
                          }  
                        updateFieldHandler("telefone", telefoneFormatado)

                    }}
                />
                <label htmlFor="telefone"><span>Telefone Corporativo *</span></label>
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
                <label htmlFor="email"><span>Email Corporativo*</span></label>
            </div>

        </>
    )
}

export default EnderecoEContato