import React from 'react'

//css
import './PlanoCaixa.css'

//componentes
import ButtonFilled from '../../../../../components/ButtonFilled/ButtonFilled'

//reat-router-dom
import { Link, useNavigate } from 'react-router-dom'

const PlanoCaixa = (props) => {

    const navigate = useNavigate();

    const mudarPlano = () => {

        navigate('/meu-plano/contrato', {
        state: {
          nomeDoPlano: props.nome,
          precoDoPlano: props.preco,
        },
      });
    };

    return (
        <div className='container-plano'>
            <div className='container-informacoes-principais-plano'>

            <h2 className='nome-plano-informacao'>{props.nome}</h2>

            {props.exibirBotao && <button className='botao-preenchido' onClick={() => mudarPlano(props.nome, props.preco)} >{props.botao}</button>}

            </div>

            <div className='informacoes-plano'>
                <div className='detalhes-plano'>
                    <p className='titulo-plano-atual'>
                        {props.titulo}
                        </p>

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>{props.beneficio1}</p>
                    </div>

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>{props.beneficio2}</p>
                    </div>

                    <div className='beneficio-plano'>
                        <i className="fa-solid fa-check icone-check-plano"></i>
                        <p className='descricao-beneficio-plano'>{props.beneficio3} </p>
                    </div>
                </div>
                <div className='preco-plano'>
                    <h2 className='preco' >{props.preco}</h2>
                    <p className='tipo-de-plano'>{props.tipo}</p>
                </div>
            </div>
        </div >
    )
}

export default PlanoCaixa