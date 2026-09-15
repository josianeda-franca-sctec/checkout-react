import { Link } from 'react-router-dom'
import produtos from '../data/produtos'
import ItemCarrinho from '../components/ItemCarrinho'
import ResumoCompra from '../components/ResumoCompra'
import { calcularTotal } from '../utils/carrinho'

function Carrinho() {
  const total = calcularTotal(produtos)

  return (
    <main>
      <h1>Carrinho de compras</h1>

      <section>
        {produtos.map((produto) => (
          <ItemCarrinho
            key={produto.id}
            produto={produto}
          />
        ))}
      </section>

      <ResumoCompra total={total} />

      <Link
        to="/pagamento"
        className="botao-finalizar"
      >
        Finalizar compra
      </Link>
    </main>
  )
}

export default Carrinho