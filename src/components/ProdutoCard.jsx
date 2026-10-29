import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ProdutoCard({ produto, onAdicionar }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

   return (
    <article>
      <img
        src={produto.imagem}
        alt={`Imagem do produto ${produto.nome}`}
        loading="lazy"
        width="240"
      />

      <h2>{produto.nome}</h2>
      <p>Categoria: {produto.categoria}</p>
      <p>{precoFormatado}</p>

      <Link to={`/produtos/${produto.id}`}>
        Ver detalhes
      </Link>

       <button
        type="button"
        onClick={() => onAdicionar(produto)}
        disabled={produto.estoque <= 0}
      >
        {produto.estoque > 0
          ? 'Adicionar ao carrinho'
          : 'Produto indisponível'}
      </button>
    </article>
  )
}

ProdutoCard.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    estoque: PropTypes.number.isRequired,
  }).isRequired,
  onAdicionar: PropTypes.func.isRequired,
}

export default ProdutoCard