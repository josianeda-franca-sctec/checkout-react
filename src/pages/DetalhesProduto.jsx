import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCarrinho } from '../hooks/useCarrinho'

function DetalhesProduto() {
    const { id } = useParams()
    const { adicionarItem } = useCarrinho()

    const [produto, setProduto] = useState(null)
    const [carregando, setCarregando] = useState(true)
    const [erro, setErro] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        async function buscarProduto() {
            setCarregando(true)
            setErro('')
            setProduto(null)

            try {
                const resposta = await fetch(
                    `http://localhost:3001/produtos/${encodeURIComponent(id)}`,
                    { signal: controller.signal }
                )

                if (resposta.status === 404) {
                    setErro('Produto não encontrado.')
                    return
                }

                if (!resposta.ok) {
                    throw new Error('Erro ao consultar produto.')
                }

                const dados = await resposta.json()
                setProduto(dados)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setErro('Não foi possível carregar o produto.')
                }
            } finally {
                if (!controller.signal.aborted) {
                    setCarregando(false)
                }
            }
        }

        buscarProduto()

        return () => controller.abort()
    }, [id])

    if (carregando) {
        return <p role="status">Carregando detalhes do produto...</p>
    }

    if (erro) {
        return (
            <main>
                <h1>{erro}</h1>
                <Link to="/produtos">Voltar ao catálogo</Link>
            </main>
        )
    }

    if (!produto) {
        return <p role="status">Produto não disponível.</p>
    }

    const precoFormatado = produto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <main>
            <Link to="/produtos">Voltar ao catálogo</Link>

            <article>
                <h1>{produto.nome}</h1>

                <img
                    src={produto.imagem}
                    alt={`Imagem do produto ${produto.nome}`}
                    width="320"
                />

                <p>Categoria: {produto.categoria}</p>
                <p>{produto.descricao}</p>
                <p>Preço: {precoFormatado}</p>
                <p>Estoque disponível: {produto.estoque}</p>
                <button
                    type="button"
                    onClick={() => adicionarItem(produto)}
                    disabled={produto.estoque <= 0}
                >
                    {produto.estoque > 0
                        ? 'Adicionar ao carrinho'
                        : 'Produto indisponível'}
                </button>
            </article>
        </main>
    )
}

export default DetalhesProduto