import React from 'react'
//service
import api from '../../service/api';
import axios from "axios";
import { useState, useEffect } from 'react';

const Questionario = () => {

    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntas, setPerguntas] = useState([
        {
            id: 1,
            texto: 'Em relação à gestão de resíduos sólidos:',
            opcoes: [
                { id: 'a', texto: 'A empresa não possui políticas ou práticas documentadas para lidar com resíduos', valor: 'A' },
                { id: 'b', texto: 'A empresa tem políticas, mas raramente as implementa', valor: 'B' },
                { id: 'c', texto: 'A empresa implementa políticas de maneira consistente', valor: 'C' },
                { id: 'd', texto: 'A empresa tem um bom controle e recicla resíduos regularmente', valor: 'D' },
                { id: 'e', texto: 'A empresa possui um sistema eficiente de gestão de resíduos', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Gestão de Resíduos Sólidos'
        },
        {
            id: 2,
            texto: 'Quanto ao uso de recursos naturais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não monitora o uso de recursos naturais', valor: 'A' },
                { id: 'b', texto: 'A empresa faz monitoramento, mas não adota medidas para reduzir o consumo', valor: 'B' },
                { id: 'c', texto: 'A empresa adota medidas esporádicas para reduzir o consumo', valor: 'C' },
                { id: 'd', texto: 'A empresa possui políticas efetivas de redução de consumo de recursos naturais', valor: 'D' },
                { id: 'e', texto: 'A empresa é líder na conservação de recursos naturais', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Uso de Recursos Naturais'
        },
        {
            id: 3,
            texto: 'Sobre emissões de gases de efeito estufa:',
            opcoes: [
                { id: 'a', texto: 'A empresa não rastreia emissões de gases de efeito estufa', valor: 'A' },
                { id: 'b', texto: 'A empresa rastreia, mas não estabelece metas de redução', valor: 'B' },
                { id: 'c', texto: 'A empresa estabelece metas de redução, mas não as alcança consistentemente', valor: 'C' },
                { id: 'd', texto: 'A empresa atinge suas metas de redução de emissões', valor: 'D' },
                { id: 'e', texto: 'A empresa é carbono neutro e tem estratégias para combater as emissões', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Emissões de Gases de Efeito Estufa'
        },
        {
            id: 4,
            texto: 'Quanto ao uso de energias renováveis:',
            opcoes: [
                { id: 'a', texto: 'A empresa não utiliza energias renováveis', valor: 'A' },
                { id: 'b', texto: 'A empresa utiliza energias renováveis de forma limitada', valor: 'B' },
                { id: 'c', texto: 'A empresa investe em energias renováveis, mas não é uma parte significativa de sua matriz energética', valor: 'C' },
                { id: 'd', texto: 'A empresa usa energias renováveis como parte substancial de sua matriz energética', valor: 'D' },
                { id: 'e', texto: 'A empresa é 100% alimentada por energias renováveis', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Uso de Energias Renováveis'
        },
        {
            id: 5,
            texto: 'Sobre a conservação da biodiversidade:',
            opcoes: [
                { id: 'a', texto: 'A empresa não tem iniciativas para proteger a biodiversidade', valor: 'A' },
                { id: 'b', texto: 'A empresa apoia iniciativas esporádicas para a conservação da biodiversidade', valor: 'B' },
                { id: 'c', texto: 'A empresa apoia ativamente projetos de conservação da biodiversidade', valor: 'C' },
                { id: 'd', texto: 'A empresa tem parcerias significativas com organizações de conservação da biodiversidade', valor: 'D' },
                { id: 'e', texto: 'A empresa lidera esforços significativos na preservação da biodiversidade', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Conservação da Biodiversidade'
        },
        {
            id: 6,
            texto: 'Quanto à educação e conscientização ambiental dos funcionários:',
            opcoes: [
                { id: 'a', texto: 'A empresa não oferece treinamento ou conscientização ambiental', valor: 'A' },
                { id: 'b', texto: 'A empresa oferece treinamento, mas raramente promove conscientização', valor: 'B' },
                { id: 'c', texto: 'A empresa promove conscientização, mas de forma esporádica', valor: 'C' },
                { id: 'd', texto: 'A empresa promove conscientização regularmente entre os funcionários', valor: 'D' },
                { id: 'e', texto: 'A empresa tem programas de educação e conscientização ambiental robustos', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Educação e Conscientização Ambiental dos Funcionários'
        },
        {
            id: 7,
            texto: 'Em relação à transparência e divulgação de informações ambientais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não divulga informações sobre seu desempenho ambiental', valor: 'A' },
                { id: 'b', texto: 'A empresa divulga informações limitadas de forma irregular', valor: 'B' },
                { id: 'c', texto: 'A empresa divulga informações ambientais regularmente, mas de maneira superficial', valor: 'C' },
                { id: 'd', texto: 'A empresa divulga informações detalhadas sobre seu desempenho ambiental', valor: 'D' },
                { id: 'e', texto: 'A empresa é líder em transparência e divulgação de informações ambientais', valor: 'E' }
            ],
            categoria: 'ambiental',
            tema: 'Transparência e Divulgação de Informações Ambientais'
        },
    ]);




    useEffect(() => {
        axios.get("http://localhost:5440/v1.0/perguntas/ambiental")
            .then(response => {
                console.log(response.data);
                // setPerguntas(response.data);
            })
            .catch(error => {
                console.log(error);
                // console.log(error.message);
            });
            
        // axios.get(`http://localhost:5435/v1.0/empresas/login/${'empresaA@email.com'}/${'senha123'}`, {

        // })
        //   .then(response => {
        //     console.log('Login realizado com sucesso!', response);

        //   })
        //   .catch(error => {

        //     console.error('Erro no login : ', error);
        //   });
    }, []);

    const proximaPergunta = () => {
        if (perguntaAtual < perguntas.length - 1) {
            setPerguntaAtual(perguntaAtual + 1);
        }
    }

    
    const anteriorPergunta = () => {
        console.log(perguntaAtual);
        if (perguntaAtual > 0) {
            setPerguntaAtual(perguntaAtual - 1);
        }
    }

    return (
        <>
            <div className='container-titulo-questionario'>
                <h2 className='titulo-questionario'>Questionário Ambiental</h2>
                <span>
                    <span>{`${perguntaAtual + 1}/${perguntas.length}`}</span>
                </span>
            </div>

            <div className='container-pergunta-opcoes'>
                {perguntas.length > 0 && (
                    <>
                        <p className='pergunta'>{perguntaAtual + 1}. {perguntas[perguntaAtual].texto}</p>

                        <div className='container-respostas'>
                            {perguntas[perguntaAtual].opcoes.map((opcao) => (
                                <label key={opcao.id} htmlFor={opcao.id} className='container-opcao-pergunta'>
                                    <input type="radio" name="opcao" id={opcao.id} className='opcao-pergunta' value={opcao.valor} />
                                    {opcao.texto}
                                </label>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className='container-botoes-questionario'>

                <button className='botao-borda' onClick={() => anteriorPergunta()} >Anterior </button>


                <button className='botao-preenchido questionario' onClick={() => proximaPergunta()}>Próximo</button>
            </div>


        </>
    )
}

export default Questionario