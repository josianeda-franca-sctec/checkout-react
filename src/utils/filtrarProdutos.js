export function filtrarProdutos(produtos, termoBusca) {
  const termoNormalizado = termoBusca.trim().toLowerCase()

  if (!termoNormalizado) {
    return produtos
  }

   return produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termoNormalizado)
  )
}