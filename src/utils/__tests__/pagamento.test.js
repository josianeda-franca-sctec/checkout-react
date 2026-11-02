
import { describe, expect, it } from 'vitest'
import { cartaoTemDigitosIguais } from '../pagamento.js'

describe('cartaoTemDigitosIguais', () => {
  it('deve identificar um cartão com todos os dígitos iguais', () => {
    const resultado = cartaoTemDigitosIguais('1111 1111 1111 1111')

    expect(resultado).toBe(true)
  })

  it('deve retornar falso para um cartão com dígitos diferentes', () => {
    const resultado = cartaoTemDigitosIguais('4111 1111 1111 1111')

    expect(resultado).toBe(false)
  })

  it('deve identificar dígitos iguais mesmo com hífens', () => {
    const resultado = cartaoTemDigitosIguais('2222-2222-2222-2222')

    expect(resultado).toBe(true)
  })

  it('deve retornar falso quando o número estiver vazio', () => {
    const resultado = cartaoTemDigitosIguais('')

    expect(resultado).toBe(false)
  })
})
