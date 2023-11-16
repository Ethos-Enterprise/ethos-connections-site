import { useState } from "react";

export function formEtapas(etapas) {
    const [etapaAtual, setEtapaAtual] = useState(0);

    function mudarEtapa(i, e) {
        if (e) {
            e.preventDefault();
        } 

        if(i < 0 || i >= etapas.length) return
        setEtapaAtual(i)
    }

    return{
        etapaAtual,
        etapaComponents: etapas[etapaAtual],
        mudarEtapa,
        primeiraEtapa: etapaAtual === 0 ? true:false,
        ultimoPasso: etapaAtual +1 === etapas.length-1 ? true :false,
        esconderBotoes: etapaAtual +1 === etapas.length ? true :false

    }
}