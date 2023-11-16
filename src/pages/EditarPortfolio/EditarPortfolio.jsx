import React, { useState , useEffect } from 'react';

//css
import './EditarPortfolio.css';

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import MenuLateral from '../../components/MenuLateral/MenuLateral.jsx';
import DadosGerais from './Secoes/DadosGerais.jsx';
import DadosComplementares from './Secoes/DadosComplementares.jsx';
import Servicos from './Secoes/Servicos.jsx';
import Certificacoes from './Secoes/Certificacoes.jsx';

//react router dom
import { Link, useLocation, useNavigate} from 'react-router-dom';

//hooks
import { useUsuario } from '../../hooks/Usuario.jsx';

const EditarPortfolio = () => {
  const { usuario } = useUsuario();

  const [secaoAtual, setSecaoAtual] = useState('Dados Gerais');


  const location = useLocation();
  const navigate = useNavigate();

  const opcoesMenu = [
    { nome: 'Dados Gerais'},
    { nome: 'Dados Complementares'},
    { nome: 'Servicos', caminho: '/item3' },
    { nome: 'Certificações', caminho: '/item4' },
    { nome: 'Ver Portfólio', caminho: '/item5' },
  ];

  useEffect(() => {

    const hash = location.hash.replace(/^#/, '');
    if (hash && opcoesMenu.some((opcao) => opcao.nome === hash)) {
      setSecaoAtual(hash);
    }
  }, [location]);


  const renderizarComponenteSecao = () => {

    switch (secaoAtual) {
      case 'Dados Gerais':
        return <DadosGerais />;
      case 'Dados Complementares':
        return <DadosComplementares />;
      case 'Servicos':
        return <Servicos />;
      case 'Certificações':
        return <Certificacoes />;
      case 'Ver Portfólio':
        navigate('/meu-portfolio')
    }
  };

  const handleMenuClick = (nome) => {
    console.log('handleMenuClick', nome);
    setSecaoAtual(nome);  // Alteração aqui para setar a seção diretamente
    navigate(`/meu-portfolio/editar-portfolio#${nome}`);

  };
  
  return (
    <div>
      <HeaderPlataforma
        link1={'/pagina-inicial'}
        titulo1={'Soluções ESG'}
        link2={'dont2'}
        titulo2={'Minhas Negociações'}
        link3={'dont3'}
        titulo3={'Aplicativo Ethos'}
        razaoSocial={usuario.razaoSocial}
      />

      <div className="conteudo">
        <div className='beadcrumb'>
          <Link to='/meu-portfolio/editar-portfolio' className='link-beadcrumb'>
            <span>Meu Portfolio {'> '}</span>
          </Link>
          <Link to='/meu-portfolio/editar-portfolio' className='link-beadcrumb-atual'>
            <span>Editar Portfolio</span>
          </Link>
        </div>

        <div className='container-menu-campos-editaveis'>
          <MenuLateral 
          titulo={'Editar Portfólio'} 
          opcoes={opcoesMenu} 
          secaoAtiva={secaoAtual}
          setSecaoAtual={handleMenuClick}
          />

          <div className='dados-editaveis'>
            {renderizarComponenteSecao()}
          </div>
        </div>
      </div>

      <FooterPlataforma />
    </div>
  );
};

export default EditarPortfolio;
