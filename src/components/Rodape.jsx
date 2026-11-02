
import styles from './Rodape.module.css'

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>
        © {new Date().getFullYear()} TechStore.
        Todos os direitos reservados.
      </p>
      <p>Tecnologia ao seu alcance.</p>
    </footer>
  )
}

export default Rodape
