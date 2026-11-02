export function cartaoTemDigitosIguais(numeroCartao) {
  const numeroLimpo = numeroCartao.replace(/[\s-]/g, "");

  if (numeroLimpo.length === 0) {
    return false;
  }

  return numeroLimpo.split("").every((digito) => digito === numeroLimpo[0]);
}
