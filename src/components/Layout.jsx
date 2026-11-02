
import { Outlet } from 'react-router-dom'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

function Layout() {
  return (
    <div className="layout">
      <Cabecalho />

      <Outlet />

      <Rodape />
    </div>
  )
}

export default Layout
