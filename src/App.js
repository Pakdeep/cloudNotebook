import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
// eslint-disable-next-line
import {Router, BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App



