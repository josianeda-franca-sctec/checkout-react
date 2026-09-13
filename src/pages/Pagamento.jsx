import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import usePagamento from '../hooks/usePagamento'

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
  const navigate = useNavigate()

  const { processando, processarPagamento } = usePagamento()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pagamentoSchema),
  })

   function formatarCartao(evento) {
    let valor = evento.target.value.replace(/\D/g, '')

    valor = valor.slice(0, 16)

    valor = valor.replace(/(\d{4})(?=\d)/g, '$1 ')

    evento.target.value = valor
  }

  function formatarValidade(evento) {
    let valor = evento.target.value.replace(/\D/g, '')

    valor = valor.slice(0, 4)

    if (valor.length > 2) {
      valor = `${valor.slice(0, 2)}/${valor.slice(2)}`
    }

    evento.target.value = valor
  }

  async function enviarPagamento(dados) {
    const aprovado = await processarPagamento(dados.numeroCartao)

    if (aprovado) {
      navigate('/sucesso')
      return
    }

    navigate('/falha')
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
            maxLength={19}
            {...register('numeroCartao')}
            onInput={formatarCartao}
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
            inputMode="numeric"
            placeholder="MM/AA"
            maxLength={5}
            {...register('validade')}
            onInput={formatarValidade}
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

        <button
          type="submit"
          disabled={processando}
        >
          {processando ? 'Processando compra…' : 'Pagar'}
        </button>
      </form>
    </main>
  )
}

export default Pagamento