import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/register/Register'
import Login from './pages/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route index element={<Register/>}/>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
