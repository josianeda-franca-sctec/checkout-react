import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { CarrinhoContext } from './carrinhoContext'


export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState([])

    function adicionarItem(produto) {
        setItens((itensAtuais) => {
            const itemExistente = itensAtuais.find(
                (item) => item.id === produto.id
            )

            if (itemExistente) {
                return itensAtuais.map((item) =>
                    item.id === produto.id
                        ? {
                            ...item,
                            quantidade: Math.min(
                                item.quantidade + 1,
                                item.estoque
                            ),
                        }
                        : item
                )
            }

            if (produto.estoque <= 0) {
                return itensAtuais
            }

            return [
                ...itensAtuais,
                { ...produto, quantidade: 1 },
            ]
        })
    }

    function alterarQuantidade(id, quantidade) {
        setItens((itensAtuais) =>
            itensAtuais.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantidade: Math.max(
                            1,
                            Math.min(quantidade, item.estoque)
                        ),
                    }
                    : item
            )
        )
    }

    function removerItem(id) {
        setItens((itensAtuais) =>
            itensAtuais.filter((item) => item.id !== id)
        )
    }

    function limparCarrinho() {
        setItens([])
    }

    const quantidadeTotal = itens.reduce(
        (total, item) => total + item.quantidade,
        0
    )

    const valorTotal = itens.reduce(
        (total, item) =>
            total + item.preco * item.quantidade,
        0
    )

    const valorContexto = useMemo(
        () => ({
            itens,
            adicionarItem,
            alterarQuantidade,
            removerItem,
            limparCarrinho,
            quantidadeTotal,
            valorTotal,
        }),
        [itens, quantidadeTotal, valorTotal]
    )

    return (
        <CarrinhoContext.Provider value={valorContexto}>
            {children}
        </CarrinhoContext.Provider>
    )
}

CarrinhoProvider.propTypes = {
    children: PropTypes.node.isRequired,
}