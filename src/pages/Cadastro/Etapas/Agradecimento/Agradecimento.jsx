import React from 'react'
import ButtonFilled from '../../../../components/ButtonFilled/ButtonFilled'
import { Link } from 'react-router-dom';

//img
import verificado from '../../../../assets/verificado.png'

const Agradecimento = () => {
  return (
    <>
    <h3>CADASTRO CONCLUÍDO COM SUCESSO</h3>
    <img src={verificado} alt="" className='imagem-pagina-inicial' />

    <p>Entre na sua conta para continuar com a escolha</p>

    <Link to={"/entrar"}>
    <ButtonFilled acao={" Fazer Login"}/>
    </Link>

    </>
  )
}

export default Agradecimento