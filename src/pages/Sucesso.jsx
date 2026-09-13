import { Link } from 'react-router-dom'

function Sucesso() {
  return (
    <main>
      <h1>Compra aprovada</h1>

      <p>Pagamento realizado com sucesso.</p>

<Link to="/">
        Voltar ao carrinho
      </Link>
    </main>
  )
}

export default Sucesso