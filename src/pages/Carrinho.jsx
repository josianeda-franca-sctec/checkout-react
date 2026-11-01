import { Link } from 'react-router-dom'
import ItemCarrinho from '../components/ItemCarrinho'
import ResumoCompra from '../components/ResumoCompra'
import { useCarrinho } from '../hooks/useCarrinho'

function Carrinho() {
  const {
    itens,
    alterarQuantidade,
    removerItem,
    valorTotal,
  } = useCarrinho()

  return (
    <main>
      <h1>Carrinho de compras</h1>

      {itens.length === 0 ? (
        <section>
          <p>Seu carrinho está vazio.</p>
          <Link to="/produtos">
            Ver produtos disponíveis
          </Link>
        </section>
      ) : (
        <>
          <section aria-label="Itens do carrinho">
            {itens.map((produto) => (
              <ItemCarrinho
                key={produto.id}
                produto={produto}
                onAlterarQuantidade={alterarQuantidade}
                onRemover={removerItem}
              />
            ))}
          </section>

          <ResumoCompra total={valorTotal} />

          <Link
            to="/pagamento"
            className="botao-finalizar"
          >
            Finalizar compra
          </Link>
        </>
      )}
    </main>
  )
}

export default Carrinho