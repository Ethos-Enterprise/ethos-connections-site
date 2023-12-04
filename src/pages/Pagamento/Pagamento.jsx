import React, { useState } from 'react';
import './Pagamento.css';
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useUsuario } from '../../hooks/Usuario.jsx';
import { useEffect } from 'react';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma';
import imgAprovado from '../../assets/verificado.png';
import qrcode from '../../assets/qrcode.png';

//api

import api from '../../service/api.js'

const Pagamento = () => {
  const { usuario } = useUsuario();
  const navigate = useNavigate();
  const location = useLocation();
  const dadosServico = location.state ? location.state.dadosServico : null;

  const [componente, setComponente] = useState('qrcode');

  const qrcodeFunc = () => {
    setComponente('qrcode');
  };

  const pixFunc = () => {
    setComponente('pix');
  };

  const [codigoPix, setCodigoPix] = useState('');

  const gerarCodigoPix = () => {
    // Lógica para gerar um código PIX aleatório
    const novoCodigoPix = Math.random().toString(36).substring(2, 12).toUpperCase();
    setCodigoPix(novoCodigoPix);
  };

  const handleCopy = () => {
    // Lógica para copiar o código PIX para a área de transferência
    navigator.clipboard.writeText(codigoPix);
  };

  useEffect(() => {
    gerarCodigoPix();
  }, []);




  useEffect(() => {
    const tempoDeEspera = 6000;
    const timeoutId = setTimeout(() => {
      let timerInterval;

      Swal.fire({
        icon: 'success',
        title: "Pagamento Aprovado!",
        html: "Liberando novas páginas.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 500);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {

          if (nomeDoPlano == 'Plano Analytics') {

            navigate('/meu-progresso');
          } else {

            api.post('/v1.0/prestadoras', {
              idEmpresa: usuario.id,
              statusAprovacao: 'APROVADO'
            }, {
              headers: {
                Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
              }
            })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              })

            navigate('/meu-portfolio');
          }
        }
      });

    }, tempoDeEspera);



    return () => clearTimeout(timeoutId);
  }, [navigate]);


  const state = location.state;
  const nomeDoPlano = state && state.nomeDoPlano;
  const precoDoPlano = state && state.precoDoPlano


  return (
    <>
      <HeaderPlataforma plano={'Provider'} razaoSocial={usuario.razaoSocial} />

      <div className="conteudo">

        <div className='beadcrumb'>

          <Link className='link-beadcrumb-atual'>
            <span className='caminho'>Pagamento</span>
          </Link>

        </div>

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

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        Nome da Empresa:
                      </h1>
                      <h2 className='titulo-pag-2'>{usuario.razaoSocial}</h2>
                    </div>

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        Recebedor:
                      </h1>
                      <h2 className='titulo-pag-2'> Ethos Connections cia</h2>

                    </div>

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        Plano:
                      </h1>
                      <h2 className='titulo-pag-2'>{nomeDoPlano}</h2>
                    </div>

                  </div>

                  <div className="caixa-pagamentos-titulos-metade-2">

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        CNPJ:
                      </h1>
                      <h2 className='titulo-pag-2'>{usuario.cnpj}</h2>
                    </div>

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        Vencimento:
                      </h1>
                      <h2 className='titulo-pag-2'>23/11/2023</h2>
                    </div>

                    <div className="pag-org">
                      <h1 className="titulo-pag">
                        Valor:
                      </h1>
                      <h2 className='titulo-pag-2'>{precoDoPlano}</h2>
                    </div>

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
                <div className='pix-codigo-container'>
                  <strong className='titulo-pag'>Código Pix:</strong>
                  <div className="caixa-pag">{codigoPix}</div>
                  <button onClick={handleCopy} className='botao-pix'>Copiar Código Pix</button>
                </div>



              </div>







            </div>



          )}
        </div >
      </div >

      <FooterPlataforma />
    </>
  );
};

export default Pagamento;
