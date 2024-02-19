import { useState } from 'react'

import './App.css'
import SignUp from './Authentication/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Products from './Pages/Products'
import Dashboard from './Pages/Dashboard'
import History from './Pages/History'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/signup' element={<SignUp/>} > </Route>
      <Route path='/' element={<Homepage/>} > </Route>
      <Route path='/products' element={<Products/>} > </Route>
      <Route path='/about' element={<About/>} > </Route>
      <Route path='/history' element={<History/>} > </Route>
      <Route path='/dashboard' element={<Dashboard/>} > </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
