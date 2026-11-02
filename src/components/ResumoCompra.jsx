
import PropTypes from 'prop-types'

function ResumoCompra({ itens, total }) {
  const formatarMoeda = (valor) =>
    valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })

  return (
    <section className="resumo-compra" aria-label="Resumo da compra">
      <h2>Resumo da compra</h2>

      {itens.length === 0 ? (
        <p>Nenhum produto no carrinho.</p>
      ) : (
        <ul>
          {itens.map((item) => (
            <li key={item.id}>
              <strong>{item.nome}</strong>

              <p>Quantidade: {item.quantidade}</p>

              <p>
                Preço unitário: {formatarMoeda(item.preco)}
              </p>

              <p>
                Subtotal: {formatarMoeda(
                  item.preco * item.quantidade
                )}
              </p>
            </li>
          ))}
        </ul>
      )}

      <p>
        <strong>Total: {formatarMoeda(total)}</strong>
      </p>
    </section>
  )
}

ResumoCompra.propTypes = {
  itens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      quantidade: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
}

export default ResumoCompra
