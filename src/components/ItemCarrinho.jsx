function ItemCarrinho({ produto }) {
  const subtotal = produto.preco * produto.quantidade

  return (
    <article className="item-carrinho">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="imagem-produto"
      />

      <div className="dados-produto">
        <h2>{produto.nome}</h2>

        <p>
          Preço unitário: R$ {produto.preco.toFixed(2).replace('.', ',')}
        </p>

        <p>Quantidade: {produto.quantidade}</p>

        <p>
          Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </article>
  )
}

export default ItemCarrinho