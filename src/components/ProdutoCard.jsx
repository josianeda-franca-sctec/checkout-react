
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Chip from '@mui/material/Chip'
import styles from './ProdutoCard.module.css'

function ProdutoCard({ produto, onAdicionar }) {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <article className={styles.card}>
      <img
        className={styles.imagem}
        src={produto.imagem}
        alt={`Imagem do produto ${produto.nome}`}
        loading="lazy"
        width="240"
      />

      <h2 className={styles.titulo}>{produto.nome}</h2>

      <Chip
        label={produto.categoria}
        size="small"
        variant="outlined"
        sx={{
          marginBottom: '8px',
          borderColor: '#131212',
          color: '#222',
        }}
      />

      <p>{precoFormatado}</p>

      <Link to={`/produtos/${produto.id}`}>
        Ver detalhes
      </Link>

      <button
        type="button"
        className={styles.botaoAdicionar}
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
