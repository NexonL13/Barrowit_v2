import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/register/Register'
import AddAsset from './pages/dashboard/pages/AddAsset'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<AddAsset/>}/>
      <Route index element={<Register/>}/>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
