

<div className='dados-minha-conta'>
<h2 className='titulo-secao'>Minhas Interações</h2>

<div className="minhasinteracoes">
  {divContent}
  <div className='tracinho-divisor'></div>

  <div className="interactions-box">
    <img src={ImagemContatos} alt="Contatos" className='imagem-interactionsC' />
    <img src={ImagemFavoritos} alt="Favoritos" className='imagem-interactionsF' id='apagar' onClick={apagar} />
  </div>

  <div className='tracinho-divisor'></div>

  <div className="interactions-title">Histórico de Curtidas</div>

  <div className="interactions-title-box">
  <h2 className='box-title-interactions'>Total: 2 empresas</h2>
  </div>

</div>
</div>