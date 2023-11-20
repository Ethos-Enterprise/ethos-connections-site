import React from 'react';
import './Fazemos.css'; // Certifique-se de ter um arquivo CSS para estilizar a sua nova seção
import ajudamos from '../../../../assets/imagens/ajudamos.jpg'
const Fazemos = (props) => {
  return (
    <section className="container-fazemos">
      <div className="conteudo-container">
        <h2 className='titulo-fazemos'> <span>Como</span> a <span>Ethos</span> pode te <span>ajudar</span>?</h2>
        <p className='descricao'>Dada a força que o ESG  vêm ganhando nos últimos anos, nós surgimos 
            com o objetivo de unir empresas que ofereçam serviços/soluções ESG com empresas que buscam esse tipo de direcionamento.</p>
        
        <div className='botoes'>
        <button className='botao1-borda'>Saiba Mais</button>
        <button className='botao1-preenchido'>Fazer cadastro</button>
        </div>
      </div>
    </section>
  );
};

export default Fazemos;
