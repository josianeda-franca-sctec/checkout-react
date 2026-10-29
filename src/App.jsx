import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Cabecalho from './components/Cabecalho'
import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'
import Produtos from './pages/Produtos'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />

      <Routes>
        <Route path="/" element={<Carrinho />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/falha" element={<Falha />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App