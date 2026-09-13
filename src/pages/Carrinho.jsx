import { Link } from 'react-router-dom'

import produtos from '../data/produtos'
import ItemCarrinho from '../components/ItemCarrinho'
import ResumoCompra from '../components/ResumoCompra'

function Carrinho() {
  const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco * produto.quantidade
  }, 0)

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