import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from "./pages/Inicial/inicial"
import Cadastro from './pages/doador/cadastrodoador'
import CadColaborador from './pages/colaborador/cad-colaborador'
import PerfilDoador from './pages/perfil/perfil'

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Inicio />} />
        <Route path='/perfil' element={<PerfilDoador />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/colaborador' element={<CadColaborador />} />
      </Routes>
    </BrowserRouter>
  )
}
