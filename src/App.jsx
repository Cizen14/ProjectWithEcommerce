import { useState } from 'react'

import './App.css'
import SignUp from './Authentication/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import Homepage from './Pages/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/signup' element={<SignUp/>} > </Route>
      <Route path='/' element={<Homepage/>} > </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
