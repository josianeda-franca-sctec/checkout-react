export function calcularTotal(produtos) {
  return produtos.reduce((total, produto) => {
    return total + produto.preco * produto.quantidade
  }, 0)
}