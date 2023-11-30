import React, { useState, useEffect } from 'react';

//css
import './EditarPortfolio.css';

//components
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import MenuLateral from '../../components/MenuLateral/MenuLateral.jsx';
import DadosGerais from './Secoes/DadosGerais.jsx';
import DadosComplementares from './Secoes/DadosComplementares.jsx';
import Servicos from './Secoes/Servicos.jsx';
import AdicionarServico from './Secoes/AdicionarServico.jsx'
import Certificacoes from './Secoes/Certificacoes.jsx';

//react router dom
import { Link, useLocation, useNavigate } from 'react-router-dom';

//hooks
import { useUsuario } from '../../hooks/Usuario.jsx';

const EditarPortfolio = () => {
  const { usuario } = useUsuario();

  const [secaoAtual, setSecaoAtual] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const opcoesMenu = [
    { nome: 'Dados Gerais', hash: 'dados-gerais' },
    { nome: 'Dados Complementares', hash: 'dados-complementares' },
    { nome: 'Serviços', hash: 'servicos' },
    { nome: 'Certificações', hash: 'certificacoes' },
    { nome: 'Ver Portfólio', hash: 'ver-portfolio' },

  ];

  const hash = location.hash.replace(/^#/, '');
  useEffect(() => {

    if (hash && opcoesMenu.some((opcao) => opcao.hash === hash)) {
      setSecaoAtual(hash);

    }

    if (hash == 'servicos#adicionar-servico') {
      setSecaoAtual('servicos')
    }

  }, [location, navigate, opcoesMenu]);


  const renderizarComponenteSecao = () => {
    console.log(secaoAtual);
    switch (secaoAtual) {
      case 'dados-gerais':
        return <DadosGerais />;
      case 'dados-complementares':
        return <DadosComplementares />;
      case 'servicos':
        return <Servicos componente={hash.includes('adicionar-servico') ? 'adicionarServico' : 'servicos'} />
      case 'certificacoes':
        return <Certificacoes />;
      case 'ver-portfolio':
        navigate('/meu-portfolio');
        break;
      default:
        return <DadosGerais />;
    }
  };

  const handleMenuClick = (hash) => {

    setSecaoAtual(hash);
    navigate(`/meu-portfolio/editar-portfolio#${hash}`);

  };

  const desativarConta = () => {
    Swal.fire({
      title: "Desativar conta?",
      icon: "question",
      confirmButtonColor: "#3085d6",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Desativar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Conta desativada!",
          icon: "success"
        });
          sessionStorage.clear();
          localStorage.clear();
          navigate('/entrar');
        };
    })
  }
  return (
    <div>
      <HeaderPlataforma

        plano={'Provider'}
        razaoSocial={usuario.razaoSocial}
      />

      <div className="conteudo">
        <div className='beadcrumb beadcrumb-editar-portfolio'>
          <div>
            <Link to='/meu-portfolio' className='link-beadcrumb'>
              <span>Meu Portfólio {'> '}</span>
            </Link>
            <Link to='/meu-portfolio/editar-portfolio' className='link-beadcrumb'>
              <span>Editar Portfólio {'> '}</span>
            </Link>

            <Link to={`/minha-conta#${secaoAtual}`} className='link-beadcrumb-atual'>
              <span className='caminho'>{opcoesMenu.find(opcao => opcao.hash === secaoAtual)?.nome}</span>
            </Link>
          </div>

          <h4 className='desativar' onClick={() => desativarConta()}> <i class="fa-regular fa-trash-can"></i> Desativar Conta</h4>
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
