import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCarrinho } from '../hooks/useCarrinho'

function Sucesso() {
  const location = useLocation()
  const { limparCarrinho } = useCarrinho()
  const limpezaRealizada = useRef(false)

  const pagamentoAprovado =
    location.state?.pagamentoAprovado === true

  useEffect(() => {
    if (pagamentoAprovado && !limpezaRealizada.current) {
      limpezaRealizada.current = true
      limparCarrinho()
    }
  }, [pagamentoAprovado, limparCarrinho])

  return (
    <main>
      <h1>Compra aprovada</h1>

      <p>Pagamento realizado com sucesso.</p>

      <Link to="/produtos">
        Voltar à loja
      </Link>
    </main>
  )
}

export default Sucesso