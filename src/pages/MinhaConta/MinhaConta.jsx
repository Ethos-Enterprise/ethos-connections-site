import React, { useState, useEffect } from 'react';

//css
import './MinhaConta.css'

//componentes
import HeaderPlataforma from '../../components/Header/Plataforma/HeaderPlataforma';
import FooterPlataforma from '../../components/Footer/FooterPlataforma/FooterPlataforma.jsx';
import MenuLateral from '../../components/MenuLateral/MenuLateral.jsx';


//react router dom
import { Link, useLocation, useNavigate } from 'react-router-dom';

//hooks
import { useUsuario } from '../../hooks/Usuario.jsx';
import MeuPerfil from './Secoes/MeuPerfil/MeuPerfil.jsx';
import MinhasInteracoes from './Secoes/MinhasInteracoes/MinhasInteracoes.jsx';
import MeuPlano from './Secoes/MeuPlano/MeuPlano.jsx';

const MinhaConta = () => {
  const { usuario } = useUsuario();

  const [secaoAtual, setSecaoAtual] = useState();


  const location = useLocation();
  const navigate = useNavigate();

  const opcoesMenuMinhaConta = [
    { nome: 'Meu Perfil', hash: 'meu-perfil' },
    { nome: 'Minhas Interações', hash: 'minhas-interacoes' },
    { nome: 'Meu Plano', hash: 'meu-plano' },
    { nome: 'Sair', hash: 'sair' },
  ];

  useEffect(() => {

    const hash = location.hash.replace(/^#/, '');

    const secaoValida = opcoesMenuMinhaConta.some((opcao) => opcao.hash === hash);

    if (secaoValida) {
      setSecaoAtual(hash);

    } else {
      navigate('/minha-conta#' + opcoesMenuMinhaConta[0]?.hash);

    }
  }, [location, navigate, opcoesMenuMinhaConta]);

  const renderizarComponenteCorreto = () => {
    switch (secaoAtual) {
      case 'meu-perfil':
        return <MeuPerfil />;
      case 'minhas-interacoes':
        return <MinhasInteracoes />;
      case 'meu-plano':
        return <MeuPlano />;
      case 'sair':
        // COLCOAR A OPCAO DE LIMPAR SESSIONSTORAGE
        navigate('/entrar');
        break;
    }
  };

  const handleMenuClick = (hash) => {
    setSecaoAtual(hash);
    navigate(`/minha-conta#${hash}`);
  };
  return (
    <div>
      <HeaderPlataforma
        plano={'Free'}
        razaoSocial={usuario.razaoSocial}
      />
      <div className="conteudo">
        <div className='beadcrumb'>
          <Link to='/minha-conta' className='link-beadcrumb'>
            <span className='caminho'>Minha Conta{'> '}</span>
          </Link>

          <Link to={`/minha-conta#${secaoAtual}`} className='link-beadcrumb-atual'>
            <span className='caminho'>{opcoesMenuMinhaConta.find(opcao => opcao.hash === secaoAtual)?.nome}</span>
          </Link>
        </div>

        <div className='container-menu-campos-editaveis'>
          <MenuLateral
            titulo={'Minha Conta'}
            opcoes={opcoesMenuMinhaConta}
            secaoAtiva={secaoAtual}
            setSecaoAtual={handleMenuClick}
          />

          <div className='dados-editaveis'>
            {renderizarComponenteCorreto()}
          </div>
        </div>
      </div>

      <FooterPlataforma />
    </div>
  )
}

export default MinhaConta