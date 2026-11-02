import PropTypes from 'prop-types'

function ItemCarrinho({ produto, onAlterarQuantidade, onRemover }) {
  const subtotal = produto.preco * produto.quantidade

  const formatarPreco = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

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
          Preço unitário: {formatarPreco(produto.preco)}
        </p>

        <div className="controle-quantidade">
          <span>Quantidade: </span>

          <button
            type="button"
            aria-label={`Diminuir quantidade de ${produto.nome}`}
            onClick={() =>
              onAlterarQuantidade(produto.id, produto.quantidade - 1)
            }
            disabled={produto.quantidade <= 1}
          >
            −
          </button>

          <span aria-live="polite">{produto.quantidade}</span>

          <button
            type="button"
            aria-label={`Aumentar quantidade de ${produto.nome}`}
            onClick={() =>
              onAlterarQuantidade(produto.id, produto.quantidade + 1)
            }
            disabled={produto.quantidade >= produto.estoque}
          >
            +
          </button>
        </div>

        <p>
          Subtotal: {formatarPreco(subtotal)}
        </p>

        <button
          type="button"
          className="botao-remover"
          onClick={() => onRemover(produto.id)}
        >
          Remover produto
        </button>
      </div>
    </article>
  )
}

ItemCarrinho.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
    estoque: PropTypes.number.isRequired,
    imagem: PropTypes.string.isRequired,
  }).isRequired,
  onAlterarQuantidade: PropTypes.func.isRequired,
  onRemover: PropTypes.func.isRequired,
}

export default ItemCarrinho