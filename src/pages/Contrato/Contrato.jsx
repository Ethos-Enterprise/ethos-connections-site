import React, {useEffect} from 'react'

//api
import api from '../../service/api'

//css
import './Contrato.css'
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma'

//hook
import { useUsuario } from '../../hooks/Usuario'
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma'

//react router
import { Link, useNavigate } from 'react-router-dom'
const Contrato = (props) => {

  const { usuario } = useUsuario();
  const navigate = useNavigate();

  const cancelar = () => {
    navigate('/minha-conta#meu-plano')  
  }

   
  //  useEffect(() => {
  //    console.log('chamei a api');

  //    api.post('/v1.0/prestadoras', {
  //      idEmpresa: usuario.id,
  //      statusAprovacao: 'APROVADO'
  //    }, {
  //      headers: {
  //        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
  //      }
  //    })
  //    .then((response) => {
  //      console.log(response);
  //    })
  //    .then((error) => {
  //      console.log(error);
  //    })

  //  }, []);

   console.log('procurando a api');


  useEffect(() => {
    console.log('chamei a api');

    console.log(usuario.id);
    api.get(`/v1.0/prestadoras/empresa/${usuario.id}`, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
      }
    })
    .then((response) => {
      console.log(response);
    })
    .then((error) => {
      console.log(error);
    })

  }, []);

  const irParaPagamentos = () => {
    navigate('/meu-plano/contrato/pagamento')  
  }
  
  return (
    <div>
      <HeaderPlataforma

        plano={'Provider'}
        razaoSocial={usuario.razaoSocial}
      />

      <div className='conteudo'>

        <div className='beadcrumb'>
          <Link to='/solucoes-esg/portfolio' className='link-beadcrumb-atual'><span>Aquisição de Plano</span>  </Link>
        </div>

        <div className="container-contrato">
          <p className='observacao-contrato'>Leia atentamente as informações para a aquisição do plano !</p>

          <div className='container-titulo'>
            <h2 className='titulo-contrato'>Sobre o plano</h2>
            <div className='traco'></div>
          </div>

          <div className='informacoes-plano-contrato'>
            <div className='informacao-plano-contrato'>
              <h4 className='plano-contrato'>Nome do Plano:</h4>
              <span className='nome-plano-contrato'>nomePlano</span>
            </div>

            <div className='informacao-plano-contrato'>
              <h4 className='plano-contrato'>Preço:</h4>
              <span className='nome-plano-contrato'>valorPlano</span>
            </div>
          </div>

          <div className='container-titulo'>
            <h2 className='titulo-contrato'>Termos e Condições</h2>
            <div className='traco'></div>
          </div>

          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>1. Descrição do Plano</h4>
            <p className='descricao-termo-plano'>O Plano oferece serviços e benefícios conforme descritos na oferta ou material promocional da Ethos.</p>
          </div>


          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>2. Pagamento e Faturamento</h4>
            <p className='descricao-termo-plano'>O Cliente concorda em pagar as taxas de acordo com as condições de pagamento especificadas pela Ethos.</p>
          </div>


          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>3. Duração e Cancelamento</h4>
            <p className='descricao-termo-plano'>A duração do Plano é estabelecida na aquisição. O Cliente pode cancelar de acordo com as políticas de cancelamento da Ethos.</p>
          </div>

          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>4. Responsabilidades do Cliente</h4>
            <p className='descricao-termo-plano'>O Cliente deve usar os serviços de forma ética e legal, respeitando todas as leis aplicáveis.</p>
          </div>

          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>5. Responsabilidades da Ethos</h4>
            <p className='descricao-termo-plano'>A Ethos fornecerá os serviços de acordo com os padrões de qualidade e prazos acordados.</p>
          </div>

          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>6. Privacidade e Proteção de Dados</h4>
            <p className='descricao-termo-plano'>A Ethos protegerá os dados do Cliente de acordo com as leis de privacidade aplicáveis. Consulte a Política de Privacidade da Ethos para obter mais informações.</p>
          </div>

          <div className='container-termos-plano'>
            <h4 className='titulo-termo-plano'>7. Disposições Gerais</h4>
            <p className='descricao-termo-plano'>Estes Termos e Condições constituem o acordo entre o Cliente e a Ethos e substituem acordos anteriores.</p>
          </div>

          <div className='concordo-contrato'>
            <input className='check-contrato' type="checkbox" name="" id="" />
            <label htmlFor="" className='label-check-contrato'>Ao adquirir o plano, concordo com os Termos e Condições.</label>
          </div>

          <div className='botoes-contrato'>

            <button className='botao-borda' onClick={() => cancelar()}>Cancelar</button>

          <button className='botao-preenchido'  onClick={() => irParaPagamentos()}>Adquirir Plano</button>
          </div>
        </div>

      </div>


      <FooterPlataforma />
    </div >


  )
}

export default Contrato