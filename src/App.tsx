import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Error from './pages/Error'

function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      
        
        <Route path='/error' element={<Error></Error>}></Route>

      </Routes>
    </>
  )
}

export default App
