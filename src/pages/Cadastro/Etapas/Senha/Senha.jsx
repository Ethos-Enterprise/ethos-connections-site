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

const Senha = () => {
    return (
        <>
            <div className="input">
                <input
                    type="text"
                    id='senha'
                    onInput={verificar}
                />
                <label htmlFor="seuInput"><span>Senha</span></label>
            </div>

            <div className="input">
                <input
                    type="text"
                    id='confirmacao-senha'
                    onInput={verificar}
                />
                <label htmlFor="seuInput"><span>Confirmar Senha</span></label>
            </div>


        </>
    )
}

export default Senha