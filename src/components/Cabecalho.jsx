import { Link } from 'react-router-dom'

import logo from '../assets/img/logo-techstore.png'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <Link to="/" aria-label="Ir para o carrinho">
        <img
          src={logo}
          alt="TechStore - Tecnologia ao seu alcance"
          className="logo"
        />
      </Link>
    </header>
  )
}

export default Cabecalho