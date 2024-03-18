import React from 'react'
import PlanoCaixa from './PlanoCaixa/PlanoCaixa'
import { useUsuario } from '../../../../hooks/Usuario'
//css
import './MeuPlano.css'

const MeuPlano = () => {
  const { usuario } = useUsuario(); 
  const planoAtual = "Plano " + usuario.plano;

  const planos = [
    {
      nome: 'Plano Free',
      titulo: 'Ideal para buscar serviços para sua empresa.',
      beneficio1: 'Acesso a portfolios de empresas certificadas',
      beneficio2: 'Filtros de busca de serviços',
      beneficio3: 'Intermediação de contato ',
      preco: 'GRATUITO',
      tipo: 'Plano Padrão',
      botao: 'Mudar Plano'
    },
    {
      nome: 'Plano Analytics',
      titulo: 'Ideal para buscar serviços e analisar o crescimento ESG na sua empresa.',
      beneficio1: 'Benefícios do Plano Free',
      beneficio2: 'Acesso ao formulário ESG',
      beneficio3: 'Área com gráficos que mostra o crescimento ESG na sua empresa',
      preco: 'R$29,90/mês',
      tipo: 'Plano Anual',
      botao: 'Mudar Plano'
    },
    {
      nome: 'Plano Provider',
      titulo: 'Permite a criação de um portfolio da sua empresa na plataforma.',
      beneficio1: 'Benefícios do Plano Free',
      beneficio2: 'Criação de Potfolio',
      beneficio3: 'Intermediação de contato com as empresas contratantes',
      preco: 'R$49,90/mês',
      tipo: 'Plano Anual',
      botao: 'Solicitar Avaliação'
    }
  ];

  return (
    <div className='dados-minha-conta'>
      <h2 className='titulo-secao'> Meu Plano </h2>

      <div className='tracinho-divisor'></div>
      {/* COLCOAR DETALHES DA PAGINA */}

      <h2 className='titulo-plano-exibido'>Plano Atual</h2>

      {planos.map((plano, index) => (
        plano.nome === planoAtual && <PlanoCaixa key={index} {...plano} exibirBotao={plano.nome !== planoAtual} />
      ))}

      <h2 className='titulo-plano-exibido'>Outros Planos</h2>

      {planos.map((plano, index) => (
        plano.nome !== planoAtual && <PlanoCaixa key={index} {...plano} exibirBotao={plano.nome !== planoAtual} />
      ))}

    </div>
  )
}

export default MeuPlano;