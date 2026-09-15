import { Link } from 'react-router-dom'

function Falha() {
  return (
    <main>
      <h1>Falha no pagamento</h1>

      <p>Tentativa de golpe</p>

      <Link to="/pagamento">
        Tentar novamente
      </Link>
    </main>
  )
}

export default Falha