import { useState } from 'react'

import { cartaoTemDigitosIguais } from '../utils/pagamento'

function usePagamento() {
  const [processando, setProcessando] = useState(false)

    async function processarPagamento(numeroCartao) {
    setProcessando(true)

    await new Promise((resolve) => {
      setTimeout(resolve, 1500)
    })

     const fraude = cartaoTemDigitosIguais(numeroCartao)

     setProcessando(false)

     return !fraude
  }
  
  return {
    processando,
    processarPagamento,
  }
}

export default usePagamento
