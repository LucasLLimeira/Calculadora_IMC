function ProdutoCard({ nome, preco, descricao, imagem }) {
  return (
  <div className="produto-card">
    <img src={imagem} alt={nome} />
    <div className="info">
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <span>R$ {Number(preco).toFixed(2)}</span>
    </div>
  </div>
  );
}

export default ProdutoCard;