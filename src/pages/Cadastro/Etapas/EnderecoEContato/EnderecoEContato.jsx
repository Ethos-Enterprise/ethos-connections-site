import React from 'react'

function verificar(event) {
    const input = event.target;
    const label = input.parentElement.querySelector("label");
  
    if (input.value.trim() !== "") {
      label.classList.add("caractere-digitado-label");
    } else {
      label.classList.remove("caractere-digitado-label");
    }
  }
  
const EnderecoEContato = () => {
    return (
        <>
            <div className="input">
                <input
                    type="Number"
                    id='cep-empresa'
                    onInput={verificar}

                />
                <label htmlFor="seuInput"><span>CEP</span></label>
            </div>

            <div className="input">
                <input
                    type="number"
                    id='telefone'
                    onInput={verificar}


                />
                <label htmlFor="seuInput"><span>Telefone Corporativo</span></label>
            </div>

            <div className="input">
                <input
                    type="text"
                    id='email'
                    onInput={verificar}


                />
                <label htmlFor="seuInput"><span>Email Corporativo</span></label>
            </div>

        </>
    )
}

export default EnderecoEContato