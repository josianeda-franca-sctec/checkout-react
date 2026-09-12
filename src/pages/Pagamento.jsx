import { cartaoTemDigitosIguais } from '../utils/pagamento'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const pagamentoSchema = z.object({
  titular: z
    .string()
    .min(1, 'Informe o nome do titular'),

    numeroCartao: z
    .string()
    .transform((valor) => valor.replace(/[\s-]/g, ''))
    .refine(
      (valor) => /^\d{16}$/.test(valor),
      'O cartão deve conter 16 dígitos',
    ),

     validade: z
    .string()
    .regex(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      'Informe a validade no formato MM/AA',
    ),

    cvv: z
    .string()
    .regex(/^\d{3}$/, 'O CVV deve conter 3 dígitos'),
})

function Pagamento() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  })

  function enviarPagamento(dados) {
    const fraude = cartaoTemDigitosIguais(dados.numeroCartao)

  if (fraude) {
    console.log('tentativa de golpe')
    return
  }
    console.log('Compra aprovada')
  }

   return (
    <main>
      <h1>Pagamento</h1>

      <form onSubmit={handleSubmit(enviarPagamento)}>
        <div>
          <label htmlFor="titular">
            Nome do titular
          </label>

          <input
            id="titular"
            type="text"
            {...register('titular')}
          />

          {errors.titular && (
            <p>{errors.titular.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="numeroCartao">
            Número do cartão
          </label>

          <input
            id="numeroCartao"
            type="text"
            inputMode="numeric"
            {...register('numeroCartao')}
          />

          {errors.numeroCartao && (
            <p>{errors.numeroCartao.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="validade">
            Validade
          </label>

          <input
            id="validade"
            type="text"
            placeholder="MM/AA"
            {...register('validade')}
          />

          {errors.validade && (
            <p>{errors.validade.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="cvv">
            CVV
          </label>
        
        <input
            id="cvv"
            type="text"
            inputMode="numeric"
            {...register('cvv')}
          />

          {errors.cvv && (
            <p>{errors.cvv.message}</p>
          )}
        </div>

        <button type="submit">
          Pagar
        </button>
      </form>
    </main>
  )
}

export default Pagamento