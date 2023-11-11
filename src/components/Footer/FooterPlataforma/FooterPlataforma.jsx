import React from 'react'
import './FooterPlataforma.css'

//imagens
import Logo from '../../../assets/logoBranco.png'

const FooterPlataforma = () => {
  return (
    <div className='footer-plataforma'>
      <div className='informacoes'>

        <div className='sobre'>
          <p className='titulo-sobre'>Sobre a Ethos</p>
          <p className='texto-sobre'>A Ethos Connections surgiu com o objetivo de ajudar empresas a espalharem os beneficios do ESG pelo Brasil.</p>
        </div>


        <div className='infos'> 

          <div className='container-contatos'>
            <p className='titulo-contatos'>Contatos</p>
            <div className='contatos'>

              <i className="fa-solid fa-envelope icone-contato"><span>ethoscontato@ethos.com</span> </i>
              <i className="fa-solid fa-phone icone-contato"><span>11 9 9876-9876</span> </i>
              <i className="fa-solid fa-location-dot icone-contato"><span>Rua Haddock Lobo, 185 - São Paulo</span> </i>

            </div>
          </div>

          <div className='container-redes-sociais'>
            <p className='titulo-redes-sociais'>Redes Sociais</p>
            <div className='redes-sociais'>
              <i className="fa-brands fa-instagram icone"><span>Instagram</span></i>
              <i className="fa-brands fa-linkedin icone" ><span>LinkedIn</span></i>
              <i className="fa-brands fa-facebook icone" ><span>Facebook</span></i>
            </div>
          </div>

          <div className='container-aplicativo'>
            <p className='titulo-aplicativo'>Baixar APP Ethos</p>
            <div className='aplicativo'>
              <i className="fa-brands fa-google-play icone-aplicativo"><span>Google Play</span></i>
              <i className="fa-brands fa-apple icone-aplicativo"><span>App Store</span></i>
            </div>
          </div>


        </div>

      </div>

      <div className='assinatura'>
        <img src={Logo} alt="logo ethos connections" className='logo-ethos' />
        <p className='direitos-site'>© 2023 Ethos Connections. Todos os direitos reservados</p>
      </div>
    </div>
  )
}

export default FooterPlataforma