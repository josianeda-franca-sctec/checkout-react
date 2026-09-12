function ItemCarrinho({ produto }) {
    const subtotal = produto.preco * produto.quantidade

    return (
        <article>
            <h2>{produto.nome}</h2>

            <p>
                Preço unitário: R$ {produto.preco.toFixed(2).replace('.', ',')}
            </p>

            <p>Quantidade: {produto.quantidade}</p>

            <p>
                Subtotal: R$ {subtotal.toFixed(2).replace('.', ',')}
            </p>
        </article>
    )
}

export default ItemCarrinho