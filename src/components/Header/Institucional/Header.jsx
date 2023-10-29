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

  const mostrarMenu = () => {
    let menuMobile = document.querySelector('.navbar-opcoes-mobile');

    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
    } else {
      menuMobile.classList.add('open');
    }
  }

  return (
    <>
      <header className='header-institucional'>
        <div className='header-institucional-principal'>

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
                <a href="#nossa-solucao" onClick={() => scrollToSection("nossa-solucao")}>
                  <li>Nossa Solução</li>
                </a>
                <a href="#planos" onClick={() => scrollToSection("planos")}>
                  <li>Planos</li>
                </a>
                <a href="#contato" onClick={() => scrollToSection("contato")}>
                  <li>Contato</li>
                </a>
              </ul>
            </nav>
          </div>

          <div className='botao-entrar-borda'>
          <Link to={"/entrar"}>
            <ButtonOutlined  acao={"Entrar"} id='institucional'/>
          </Link>
          </div>


          <div className="navbar-botao-mobile">
            <span onClick={() => mostrarMenu()}>
              <i className="fa-solid fa-bars" style={{ color: "#01A2C3", fontSize: "30px" }}></i>
            </span>
          </div>
        </div>

        <div className="navbar-opcoes-mobile" >
          <nav>
            <ul>
              <a href="#home" onClick={() => scrollToSection("home")}>
                <li>Home</li>
              </a>

              <div className='tracinho-mobile'></div>
              <a href="#sobre-esg" onClick={() => scrollToSection("sobre-esg")}>
                <li>Sobre ESG</li>
              </a>
              <div className='tracinho-mobile'></div>

              <a href="#nossa-solucao" onClick={() => scrollToSection("nossa-solucao")}>
                <li>Nossa Solução</li>
              </a>
              <div className='tracinho-mobile'></div>

              <a href="#planos" onClick={() => scrollToSection("planos")}>
                <li>Planos</li>
              </a>
              <div className='tracinho-mobile'></div>

              <a href="#contato" onClick={() => scrollToSection("contato")}>
                <li>Contato</li>
              </a>
              <div className='tracinho-mobile'></div>

              <Link to={"/entrar"}>
                <li  className="entrar-mobile" style={{ fontSize: '1rem', fontWeight: "normal"}} >Entrar</li>
              </Link>
            </ul>
          </nav>

        </div>

      </header>

    </>
  )
}

export default Header