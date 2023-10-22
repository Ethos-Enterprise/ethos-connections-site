import React from 'react'
import './Header.css'

import Logo from '../../assets/logoBranco.png'
import ButtonOutlined from '../ButtonOutlined/ButtonOutlined'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>

      <header>

          <img src={Logo} alt="LOGO" />

          <ul>
            <li>Home</li>
            <li>Sobre ESG</li>
            <li>Nossos Serviços</li>
            <li>Planos</li>
            <li>Contatos</li>
          </ul>

          <Link to={"/entrar"}>
          <ButtonOutlined/>
          </Link>

      </header>
    </>
  )
}

export default Header