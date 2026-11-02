
const API_URL = import.meta.env.PROD
  ? `${import.meta.env.BASE_URL}produtos.json`
  : 'http://localhost:3001/produtos'

export async function buscarProdutos(signal) {
  const resposta = await fetch(API_URL, { signal })

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os produtos.')
  }

  const dados = await resposta.json()

  if (import.meta.env.PROD) {
    return dados.produtos
  }

  return dados
}

export async function buscarProdutoPorId(id, signal) {
  if (import.meta.env.PROD) {
    const produtos = await buscarProdutos(signal)

    return (
      produtos.find((produto) => String(produto.id) === String(id)) ??
      null
    )
  }

  const resposta = await fetch(
    `${API_URL}/${encodeURIComponent(id)}`,
    { signal }
  )

  if (resposta.status === 404) {
    return null
  }

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar o produto.')
  }

  return resposta.json()
}
