import React from 'react'
//service
import api from '../../service/api';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


//react/router
import { Link , useNavigate} from 'react-router-dom'


const Questionario = ({categoriaQuestionario}) => {


    const navigate = useNavigate();

    
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [perguntas, setPerguntas] = useState([
        {
            id: 1,
            texto: 'Em relação à gestão de resíduos sólidos:',
            opcoes: [
                { id: 'a', texto: 'A empresa não possui políticas ou práticas documentadas para lidar com resíduos', valor: 2 },
                { id: 'b', texto: 'A empresa tem políticas, mas raramente as implementa', valor: 4 },
                { id: 'c', texto: 'A empresa implementa políticas de maneira consistente', valor: 6 },
                { id: 'd', texto: 'A empresa tem um bom controle e recicla resíduos regularmente', valor: 8 },
                { id: 'e', texto: 'A empresa possui um sistema eficiente de gestão de resíduos', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Gestão de Resíduos Sólidos'
        },
        {
            id: 2,
            texto: 'Quanto ao uso de recursos naturais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não monitora o uso de recursos naturais', valor: 2 },
                { id: 'b', texto: 'A empresa faz monitoramento, mas não adota medidas para reduzir o consumo', valor: 4 },
                { id: 'c', texto: 'A empresa adota medidas esporádicas para reduzir o consumo', valor: 6 },
                { id: 'd', texto: 'A empresa possui políticas efetivas de redução de consumo de recursos naturais', valor: 8 },
                { id: 'e', texto: 'A empresa é líder na conservação de recursos naturais', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Uso de Recursos Naturais'
        },
        {
            id: 3,
            texto: 'Sobre emissões de gases de efeito estufa:',
            opcoes: [
                { id: 'a', texto: 'A empresa não rastreia emissões de gases de efeito estufa', valor: 2 },
                { id: 'b', texto: 'A empresa rastreia, mas não estabelece metas de redução', valor: 4 },
                { id: 'c', texto: 'A empresa estabelece metas de redução, mas não as alcança consistentemente', valor: 6 },
                { id: 'd', texto: 'A empresa atinge suas metas de redução de emissões', valor: 8 },
                { id: 'e', texto: 'A empresa é carbono neutro e tem estratégias para combater as emissões', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Emissões de Gases de Efeito Estufa'
        },
        {
            id: 4,
            texto: 'Quanto ao uso de energias renováveis:',
            opcoes: [
                { id: 'a', texto: 'A empresa não utiliza energias renováveis', valor: 2 },
                { id: 'b', texto: 'A empresa utiliza energias renováveis de forma limitada', valor: 4 },
                { id: 'c', texto: 'A empresa investe em energias renováveis, mas não é uma parte significativa de sua matriz energética', valor: 6 },
                { id: 'd', texto: 'A empresa usa energias renováveis como parte substancial de sua matriz energética', valor: 8 },
                { id: 'e', texto: 'A empresa é 100% alimentada por energias renováveis', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Uso de Energias Renováveis'
        },
        {
            id: 5,
            texto: 'Sobre a conservação da biodiversidade:',
            opcoes: [
                { id: 'a', texto: 'A empresa não tem iniciativas para proteger a biodiversidade', valor: 2 },
                { id: 'b', texto: 'A empresa apoia iniciativas esporádicas para a conservação da biodiversidade', valor: 4 },
                { id: 'c', texto: 'A empresa apoia ativamente projetos de conservação da biodiversidade', valor: 6 },
                { id: 'd', texto: 'A empresa tem parcerias significativas com organizações de conservação da biodiversidade', valor: 8 },
                { id: 'e', texto: 'A empresa lidera esforços significativos na preservação da biodiversidade', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Conservação da Biodiversidade'
        },
        {
            id: 6,
            texto: 'Quanto à educação e conscientização ambiental dos funcionários:',
            opcoes: [
                { id: 'a', texto: 'A empresa não oferece treinamento ou conscientização ambiental', valor: 2 },
                { id: 'b', texto: 'A empresa oferece treinamento, mas raramente promove conscientização', valor: 4 },
                { id: 'c', texto: 'A empresa promove conscientização, mas de forma esporádica', valor: 6 },
                { id: 'd', texto: 'A empresa promove conscientização regularmente entre os funcionários', valor: 8 },
                { id: 'e', texto: 'A empresa tem programas de educação e conscientização ambiental robustos', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Educação e Conscientização Ambiental dos Funcionários'
        },
        {
            id: 7,
            texto: 'Em relação à transparência e divulgação de informações ambientais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não divulga informações sobre seu desempenho ambiental', valor: 2 },
                { id: 'b', texto: 'A empresa divulga informações limitadas de forma irregular', valor: 4 },
                { id: 'c', texto: 'A empresa divulga informações ambientais regularmente, mas de maneira superficial', valor: 6 },
                { id: 'd', texto: 'A empresa divulga informações detalhadas sobre seu desempenho ambiental', valor: 8 },
                { id: 'e', texto: 'A empresa é líder em transparência e divulgação de informações ambientais', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Transparência e Divulgação de Informações Ambientais'
        },
        {
            id: 8,
            texto: 'Sobre a gestão de riscos ambientais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não avalia ou gerencia riscos ambientais', valor: 2 },
                { id: 'b', texto: 'A empresa realiza avaliações de risco, mas não implementa ações preventivas', valor: 4 },
                { id: 'c', texto: 'A empresa implementa ações preventivas de forma esporádica', valor: 6 },
                { id: 'd', texto: 'A empresa implementa ações preventivas e possui um plano de contingência sólido', valor: 8 },
                { id: 'e', texto: 'A empresa é altamente resiliente a riscos ambientais', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Gestão de Riscos Ambientais'
        },
        {
            id: 9,
            texto: 'Quanto ao envolvimento com a comunidade local em questões ambientais:',
            opcoes: [
                { id: 'a', texto: 'A empresa não se envolve em questões ambientais da comunidade', valor: 2 },
                { id: 'b', texto: 'A empresa fornece assistência esporádica em projetos ambientais locais', valor: 4 },
                { id: 'c', texto: 'A empresa é um parceiro ativo em projetos ambientais da comunidade', valor: 6 },
                { id: 'd', texto: 'A empresa lidera esforços em projetos ambientais locais', valor: 8 },
                { id: 'e', texto: 'A empresa é um pilar na promoção de questões ambientais na comunidade', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Envolvimento com a Comunidade Local em Questões Ambientais'
        },
        {
            id: 10,
            texto: 'Sobre a inovação e pesquisa em tecnologias sustentáveis:',
            opcoes: [
                { id: 'a', texto: 'A empresa não investe em inovação sustentável ou pesquisa ambiental', valor: 2 },
                { id: 'b', texto: 'A empresa investe esporadicamente em inovação sustentável', valor: 4 },
                { id: 'c', texto: 'A empresa investe consistentemente em inovação sustentável', valor: 6 },
                { id: 'd', texto: 'A empresa é um pioneiro em pesquisa e desenvolvimento de tecnologias sustentáveis', valor: 8 },
                { id: 'e', texto: 'A empresa lidera a indústria em inovação e pesquisa sustentável', valor: 10 }
            ],
            categoria: 'ambiental',
            tema: 'Inovação e Pesquisa em Tecnologias Sustentáveis'
        },
        
    ]);


    const [respostas, setRespostas] = useState({});

    let resultadoFinal = 0;

    const categoria = categoriaQuestionario.toLowerCase();

    useEffect(() => {
        api.get(`/v1.0/perguntas/area-esg?areaEsg=${categoria}`)
        .then(response => {
                console.log('deu bom');

                console.log(response.data);
                // setPerguntas(response.data);
            })
            .catch(error => {
                console.log('deu ruim');

                console.log(error);
                // console.log(error.message);
            });

    }, []);

    const proximaPergunta = () => {
        if (respostas[perguntaAtual] !== undefined) {
            if (perguntaAtual < perguntas.length - 1) {
                setPerguntaAtual(perguntaAtual + 1);
            }
        } else {
            alert('Selecione uma opção para poder avançar')
        }
    }

    const anteriorPergunta = () => {
        console.log(perguntaAtual);
        if (perguntaAtual > 0) {
            setPerguntaAtual(perguntaAtual - 1);
        }
    }

    const selecionarResposta = (opcaoSelecionada) => {
        setRespostas({
            ...respostas,
            [perguntaAtual]: opcaoSelecionada
        });
    }

    const somarResultado = () => {
        Object.values(respostas).forEach(resposta => {
            resultadoFinal+=resposta;
          
        });
        sessionStorage.setItem('ambiental', resultadoFinal);

        navigate('/meu-progresso');

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
                                    <input
                                        type="radio"
                                        name="opcao"
                                        id={opcao.id}
                                        className='opcao-pergunta'
                                        value={opcao.valor}
                                        checked={respostas[perguntaAtual] === opcao.valor}
                                        onChange={() => selecionarResposta(opcao.valor)}
                                    />

                                    {opcao.texto}
                                </label>

                            ))}
                        </div>
                    </>
                )}
            </div>

            <div className='container-botoes-questionario'>

                <button className='botao-borda' onClick={() => anteriorPergunta()} >Anterior </button>

                {perguntaAtual == perguntas.length - 1 ?
                    <button className='botao-preenchido questionario' onClick={() => somarResultado()}> Finalizar </button>
                    :
                    < button className='botao-preenchido questionario' onClick={() => proximaPergunta()}> Próximo </button>

                }

            </div >


        </>
    )
}

export default Questionario