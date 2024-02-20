import { useState } from 'react'

import './App.css'
import SignUp from './Authentication/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Authentication/Login'

import About from './Pages/About'
import Products from './Pages/Products/Products'
import Dashboard from './Pages/Dashboard'

import AddProduct from './Pages/Products/AddProduct'
import PrivateRoute from './Authentication/privateRoute/PrivateRoute'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} > </Route>
      <Route path='/signup' element={<PrivateRoute><SignUp/></PrivateRoute>} > </Route>
      <Route path='/products' element={ <PrivateRoute> <Products/></PrivateRoute> } > </Route>
      <Route path='/' element={<PrivateRoute><Dashboard/></PrivateRoute>} > </Route>
      <Route path='/add/products' element={<PrivateRoute><AddProduct/></PrivateRoute>} > </Route>
    </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
