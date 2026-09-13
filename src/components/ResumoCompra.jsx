function ResumoCompra({ total }) {
  return (
    <section className="resumo-compra">
      <h2>Resumo da compra</h2>

      <p>
        Total: R$ {total.toFixed(2).replace('.', ',')}
      </p>
    </section>
  )
}

export default ResumoCompra