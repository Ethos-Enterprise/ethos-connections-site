import React from 'react'
import './Pagamento.css';
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'
import imgAprovado from '../../assets/verificado.png';

const Pagamento = () => {

  const { usuario } = useUsuario();

  const location = useLocation();
  const dadosServico = location.state ? location.state.dadosServico : null;


  return (

    <>
      <HeaderPlataforma
        plano={'Provider'}
        razaoSocial={usuario.razaoSocial}
      />


      <div className="conteudo-pagamento">

        <div className='conteudo-titulo-pagamento'>Realizar Pagamento Pix</div>

        <div className="pagamento-box">

          <div className="pagamento-box-titulo">
            <img src={imgAprovado} alt="Aprovação pagamento" className='img-pagamento'/>
            <h1 className='pagamento-box-titulo-h1'>Obrigado por fazer parte da Ethos!</h1>
          </div>


          <div className="container-box">
            <div className="container-box-pagamento-titulo">
              <h1>QR Code</h1>
              <h1>Pix copia e cola</h1>
            </div>

            <div className="caixa-pagamentos">
              <h1>Sua plataforma será atualizada imediatamente após o pagamento</h1>
              <img src='' alt="QR CODE" />

              <div className="caixa-pagamentos-titulos">
                <h1>Nome da Empresa:</h1>
                <h1>Recebedor: Ethos Connections cia.</h1>
                <h1>Plano: XXXXX</h1>
                <h1>CNPJ</h1>
                <h1>Vencimento: 23/11/2023</h1>
                <h1>Valor: XXX,XX</h1>

              </div>
            </div>

          </div>
        </div>



        <FooterPlataforma></FooterPlataforma>



      </div>

    </>

  )
}

export default Pagamento