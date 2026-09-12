function ResumoCompra({ total }) {
  return (
    <section>
      <h2>Resumo da compra</h2>

 <p>
        Total: R$ {total.toFixed(2).replace('.', ',')}
      </p>
    </section>
  )
}

export default ResumoCompra