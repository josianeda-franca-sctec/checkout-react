
import { useEffect, useState } from 'react'

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')

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

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>
              {produto.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Produtos
