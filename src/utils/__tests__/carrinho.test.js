import { describe, expect, it } from "vitest";
import { calcularTotal } from "../carrinho.js";

describe("calcularTotal", () => {
  it("deve calcular o total de vários produtos", () => {
    const produtos = [
      { preco: 100, quantidade: 2 },
      { preco: 50, quantidade: 1 },
    ];

    const resultado = calcularTotal(produtos);

    expect(resultado).toBe(250);
  });

  it("deve retornar zero quando o carrinho estiver vazio", () => {
    const resultado = calcularTotal([]);

    expect(resultado).toBe(0);
  });

  it("deve considerar a quantidade de cada produto", () => {
    const produtos = [
      { preco: 30, quantidade: 3 },
      { preco: 20, quantidade: 2 },
    ];

    const resultado = calcularTotal(produtos);

    expect(resultado).toBe(130);
  });
});
