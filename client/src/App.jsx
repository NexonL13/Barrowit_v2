import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/register/Register'
import UpdateAsset from './pages/dashboard/pages/UpdateAsset'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/asset/:id' element={<UpdateAsset/>}/>
      <Route index element={<Register/>}/>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
