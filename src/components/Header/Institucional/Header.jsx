import React from 'react'
import './Header.css'

import Logo from '../../../assets/logoBranco.png'
import ButtonOutlined from '../../ButtonOutlined/ButtonOutlined'
import { Link } from 'react-router-dom'

const Header = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className='header-institucional'>

        <img src={Logo} alt="LOGO" className='logo-institucional' />

        <div className='navbar-opcoes'>
          <nav>
            <ul>
              <a href="#home" onClick={() => scrollToSection("home")}>
                <li>Home</li>
              </a>
              <a href="#sobre-esg" onClick={() => scrollToSection("sobre-esg")}>
                <li>Sobre ESG</li>
              </a>
              <a href="#nossos-servicos" onClick={() => scrollToSection("nossos-servicos")}>
                <li>Nossos Serviços</li>
              </a>
              <a href="#planos" onClick={() => scrollToSection("planos")}>
                <li>Planos</li>
              </a>
              <a href="#contatos" onClick={() => scrollToSection("contatos")}>
                <li>Contatos</li>
              </a>
            </ul>
          </nav>
        </div>

        <Link to={"/entrar"}>
          <ButtonOutlined />
        </Link>

      </header>

    </>
  )
}

export default Header