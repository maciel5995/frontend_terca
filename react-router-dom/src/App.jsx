
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const navigate = useNavigate()
  const voltar = () => {
    navigate('/')
  }

  return (
    <>
      <NavBar />
      <Outlet />
      <button onClick={voltar}>Tela Inicial</button>
    </>
  )
}

export default App
