import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useCarrinho } from '../hooks/useCarrinho'

function RotaPrivada({ children }) {
  const { itens } = useCarrinho()

   if (itens.length === 0) {
    return <Navigate to="/carrinho" replace />
  }

   return children
}

RotaPrivada.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RotaPrivada