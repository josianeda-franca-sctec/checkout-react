export function cartaoTemDigitosIguais(numeroCartao) {
  const numeroLimpo = numeroCartao.replace(/[\s-]/g, '')

  return numeroLimpo
    .split('')
    .every((digito) => digito === numeroLimpo[0])
}
