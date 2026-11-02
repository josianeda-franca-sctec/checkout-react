import { Link } from 'react-router-dom';

function NaoEncontrada() {
    return (
        <main>
            <h1>Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe ou foi removida.</p>

            <Link to="/produtos" className="botao-finalizar">
                Voltar para a loja
            </Link>
        </main>
    )
}

export default NaoEncontrada