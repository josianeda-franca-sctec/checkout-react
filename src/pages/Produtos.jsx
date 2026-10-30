
import { useEffect, useMemo, useState } from 'react'
import ProdutoCard from '../components/ProdutoCard'
import { filtrarProdutos } from '../utils/filtrarProdutos'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [termoBusca, setTermoBusca] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function buscarProdutos() {
      try {
        const resposta = await fetch(
          'http://localhost:3001/produtos',
          { signal: controller.signal }
        )

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar os produtos.')
        }

        const dados = await resposta.json()
        setProdutos(dados)
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErro('Erro ao buscar produtos. Tente novamente.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false)
        }
      }
    }

    buscarProdutos()

    return () => controller.abort()
  }, [])

  const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos, termoBusca),
    [produtos, termoBusca]
  )

  function adicionarAoCarrinho(produto) {
    console.log('Produto selecionado:', produto.nome)
  }

  if (carregando) {
    return <p role="status">Carregando produtos...</p>
  }

  if (erro) {
    return <p role="alert">{erro}</p>
  }

  if (produtos.length === 0) {
    return <p>Nenhum produto disponível no momento.</p>
  }

  return (
    <main>
      <h1>Produtos disponíveis</h1>

      <div>
        <label htmlFor="busca-produtos">
          Buscar produtos
        </label>

        <input
          id="busca-produtos"
          type="search"
          placeholder="Digite o nome do produto"
          value={termoBusca}
          onChange={(evento) => setTermoBusca(evento.target.value)}
        />

        {termoBusca && (
          <button
            type="button"
            onClick={() => setTermoBusca('')}
          >
            Limpar busca
          </button>
        )}
      </div>

      {produtosFiltrados.length === 0 ? (
        <p role="status">
          Nenhum produto encontrado para "{termoBusca}".
        </p>
      ) : (
        <section aria-label="Catálogo de produtos">
          {produtosFiltrados.map((produto) => (
            <ProdutoCard
              key={produto.id}
              produto={produto}
              onAdicionar={adicionarAoCarrinho}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default Produtos
