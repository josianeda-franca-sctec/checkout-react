import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import usePagamento from '../hooks/usePagamento'
import produtos from '../data/produtos'
import ResumoCompra from '../components/ResumoCompra'
import { calcularTotal } from '../utils/carrinho'

const pagamentoSchema = z.object({
  titular: z
  .string()
  .trim()
  .min(1, 'Informe o nome do titular')
  .refine(
    (valor) => {
      const partes = valor.split(/\s+/)

      if (partes.length < 2) {
        return false
      }

      return partes.every((parte) => {
        return /^[A-Za-zÀ-ÿ]{2,20}$/.test(parte)
      })
    },
    'Informe nome e sobrenome válidos',
  )
  .refine(
    (valor) => {
      const partes = valor.toLowerCase().split(/\s+/)

      return partes.every((parte) => {
        const vogais = parte.match(/[aeiouáéíóúâêôãõ]/g)

        return vogais && vogais.length >= 1
      })
    },
    'Informe um nome válido',
  ),

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
    )
    .refine(
      (valor) => {
        const [mes, ano] = valor.split('/')

        const mesValidade = Number(mes)
        const anoValidade = 2000 + Number(ano)

        const hoje = new Date()
        const mesAtual = hoje.getMonth() + 1
        const anoAtual = hoje.getFullYear()

        if (anoValidade > anoAtual) {
          return true
        }

        if (
          anoValidade === anoAtual &&
          mesValidade >= mesAtual
        ) {
          return true
        }

        return false
      },
      'O cartão está vencido',
    ),

  cvv: z
    .string()
    .regex(
      /^\d{3}$/,
      'O CVV deve conter 3 dígitos',
    ),
})

function Pagamento() {
  const navigate = useNavigate()

  const { processando, processarPagamento } = usePagamento()

  const total = calcularTotal(produtos)

  const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(pagamentoSchema),
  mode: 'onChange',
  reValidateMode: 'onChange',
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

  function formatarTitular(evento) {
    let valor = evento.target.value

    valor = valor.replace(/[^A-Za-zÀ-ÿ\s]/g, '')

    evento.target.value = valor
  }

  function formatarCvv(evento) {
    let valor = evento.target.value.replace(/\D/g, '')

    valor = valor.slice(0, 3)

    evento.target.value = valor
  }

  async function enviarPagamento(dados) {
    const aprovado = await processarPagamento(
      dados.numeroCartao,
    )

    if (aprovado) {
      navigate('/sucesso')
      return
    }

    navigate('/falha')
  }

  return (
    <main>
      <h1>Pagamento</h1>

      <ResumoCompra total={total} />

      <form onSubmit={handleSubmit(enviarPagamento)}>
        <div>
          <label htmlFor="titular">
            Nome do titular
          </label>

          <input
            id="titular"
            type="text"
            autoComplete="cc-name"
            aria-invalid={errors.titular ? 'true' : 'false'}
            aria-describedby={
              errors.titular ? 'erro-titular': undefined
            }
            {...register('titular')}
            onInput={formatarTitular}
          />

          {errors.titular && (
            <p
              id="erro-titular"
              role="alert"
            >
              {errors.titular.message}
            </p>
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
            autoComplete="cc-number"
            maxLength={19}
            aria-invalid={
              errors.numeroCartao
                ? 'true'
                : 'false'
            }
            aria-describedby={
              errors.numeroCartao
                ? 'erro-numero-cartao'
                : undefined
            }
            {...register('numeroCartao')}
            onInput={formatarCartao}
          />

          {errors.numeroCartao && (
            <p
              id="erro-numero-cartao"
              role="alert"
            >
              {errors.numeroCartao.message}
            </p>
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
            autoComplete="cc-exp"
            placeholder="MM/AA"
            maxLength={5}
            aria-invalid={
              errors.validade
                ? 'true'
                : 'false'
            }
            aria-describedby={
              errors.validade
                ? 'erro-validade'
                : undefined
            }
            {...register('validade')}
            onInput={formatarValidade}
          />

          {errors.validade && (
            <p
              id="erro-validade"
              role="alert"
            >
              {errors.validade.message}
            </p>
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
            autoComplete="cc-csc"
            maxLength={3}
            aria-invalid={
              errors.cvv ? 'true' : 'false'
            }
            aria-describedby={
              errors.cvv
                ? 'erro-cvv'
                : undefined
            }
            {...register('cvv')}
            onInput={formatarCvv}
          />

          {errors.cvv && (
            <p
              id="erro-cvv"
              role="alert"
            >
              {errors.cvv.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={processando}
          aria-busy={processando}
        >
          {processando
            ? 'Processando compra…'
            : 'Pagar'}
        </button>
      </form>
    </main>
  )
}

export default Pagamento