import React from 'react'
import ButtonFilled from '../../../../components/ButtonFilled/ButtonFilled'
import { Link } from 'react-router-dom';

//css
import './Agradecimento.css'

//img
import verificado from '../../../../assets/verificado.png'

const Agradecimento = () => {
  return (
    <>
    <h3 className='titulo-agradecimento'>CADASTRO CONCLUÍDO COM SUCESSO</h3>
    <img src={verificado} alt="" className='cadastro-sucesso' />

    <p className='mensagem-redirecionar'>Entre na sua conta para continuar com a escolha do plano</p>

    <Link to={"/entrar"} className='link-pagina-login'>
    <ButtonFilled acao={" Fazer Login"} />
    </Link>

    </>
  )
}

export default Agradecimento