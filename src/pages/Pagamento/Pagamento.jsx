import React, { useState } from 'react';
import './Pagamento.css';
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';
import imgAprovado from '../../assets/verificado.png';
import qrcode from '../../assets/qrcode.png';

const Pagamento = () => {
  const { usuario } = useUsuario();
  const location = useLocation();
  const dadosServico = location.state ? location.state.dadosServico : null;

  const [componente, setComponente] = useState('qrcode');

  const qrcodeFunc = () => {
    setComponente('qrcode');
  };

  const pixFunc = () => {
    setComponente('pix');
  };

  
  return (
    <>
      <HeaderPlataforma plano={'Provider'} razaoSocial={usuario.razaoSocial} />

      <div className="conteudo">
        <div className="conteudo-titulo-pagamento">Realizar Pagamento Pix</div>

        <div className="pagamento-box">
          <div className="pagamento-box-titulo">
            <img src={imgAprovado} alt="Aprovação pagamento" className="img-pagamento" />
            <h1 className="pagamento-box-titulo-h1">Obrigado por fazer parte da Ethos!</h1>
          </div>

          {componente === 'qrcode' ? (
            <div className="container-box">
              <div className="container-box-pagamento-titulo">
                <h4 className="container-box-pagamento-subtitulo-ativo" onClick={qrcodeFunc}>
                  QR Code
                </h4>
                <h4 className="container-box-pagamento-subtitulo" onClick={pixFunc}>
                  Pix copia e cola
                </h4>
              </div>

              <div className="caixa-pagamentos">
                <h1 className="caixa-pagamentos-h1">
                  Sua plataforma será atualizada imediatamente após o pagamento
                </h1>

                <div className="img-qrcode">
                  <img src={qrcode} alt="QR CODE" className="qrcode" />
                </div>

                <div className="caixa-pagamentos-dividir">
                  <div className="caixa-pagamentos-titulos-metade-1">
                    <h1 className="titulo-pag">
                      <b>Nome da Empresa:</b> Deloitte
                    </h1>
                    <h1 className="titulo-pag">
                      <b>Recebedor:</b> Ethos Connections cia.
                    </h1>
                    <h1 className="titulo-pag">
                      <b>Plano:</b> XXXXX
                    </h1>
                  </div>

                  <div className="caixa-pagamentos-titulos-metade-2">
                    <h1 className="titulo-pag">
                      {' '}
                      <b>CNPJ:</b> 12.345.678/9101-12
                    </h1>
                    <h1 className="titulo-pag">
                      {' '}
                      <b>Vencimento:</b> 23/11/2023
                    </h1>
                    <h1 className="titulo-pag">
                      {' '}
                      <b>Valor:</b> 1000,00
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-box">
              <div className="container-box-pagamento-titulo">
                <h4 className="container-box-pagamento-subtitulo-2" onClick={qrcodeFunc}>
                  QR Code
                </h4>
                <h4 className="container-box-pagamento-subtitulo-ativo-2" onClick={pixFunc}>
                  Pix copia e cola
                </h4>
              </div>

              <div className="caixa-pagamentos">
                <h1 className="caixa-pagamentos-h1">
                  Sua plataforma será atualizada imediatamente após o pagamento
                </h1>

             

               
              </div>







            </div>

            

          )}
        </div>
      </div>

      <FooterPlataforma />
    </>
  );
};

export default Pagamento;
