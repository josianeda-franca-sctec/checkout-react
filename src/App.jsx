
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import RotaPrivada from './components/RotaPrivada'

import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'
import Produtos from './pages/Produtos'
import DetalhesProduto from './pages/DetalhesProduto'
import NaoEncontrada from './pages/NaoEncontrada'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Carrinho />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/:id" element={<DetalhesProduto />} />
          <Route path="/pagamento" element={<RotaPrivada> <Pagamento />
          </RotaPrivada>
          } />
          
          <Route path="/sucesso" element={<Sucesso />} />
          <Route path="/falha" element={<Falha />} />
          <Route path="*" element={<NaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
