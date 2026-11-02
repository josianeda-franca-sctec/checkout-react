import { describe, expect, it } from "vitest";
import { filtrarProdutos } from "../filtrarProdutos.js";

describe("filtrarProdutos", () => {
  const produtos = [
    { id: "1", nome: "Notebook Dell" },
    { id: "2", nome: "Mouse Gamer" },
    { id: "3", nome: "Teclado Mecânico" },
  ];

  it("deve encontrar produtos pelo nome", () => {
    const resultado = filtrarProdutos(produtos, "Mouse");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nome).toBe("Mouse Gamer");
  });

  it("deve ignorar letras maiúsculas e minúsculas", () => {
    const resultado = filtrarProdutos(produtos, "NOTEBOOK");

    expect(resultado).toHaveLength(1);
    expect(resultado[0].nome).toBe("Notebook Dell");
  });

  it("deve retornar uma lista vazia quando não encontrar produtos", () => {
    const resultado = filtrarProdutos(produtos, "Impressora");

    expect(resultado).toEqual([]);
  });

  it("deve retornar todos os produtos quando a busca estiver vazia", () => {
    const resultado = filtrarProdutos(produtos, "   ");

    expect(resultado).toEqual(produtos);
  });
});
