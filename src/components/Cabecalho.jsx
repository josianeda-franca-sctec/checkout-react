import { Link } from 'react-router-dom'
import { useCarrinho } from '../hooks/useCarrinho'
import logo from '../assets/img/logo-techstore.png'

function Cabecalho() {
  const { quantidadeTotal } = useCarrinho()

  return (
    <header className="cabecalho">
      <Link
        to="/"
        aria-label="Ir para a página inicial da TechStore"
      >
        <img
          src={logo}
          alt="TechStore - Tecnologia ao seu alcance"
          className="logo"
        />
      </Link>

      <nav aria-label="Navegação principal">
        <Link to="/produtos">
          Produtos
        </Link>

        <Link to="/carrinho">
          Carrinho
          <span
            className="contador-carrinho"
            aria-label={`${quantidadeTotal} produtos no carrinho`}
          >
            {quantidadeTotal}
          </span>
        </Link>
      </nav>
    </header>
  )
}

export default Cabecalho