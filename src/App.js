import React from 'react'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import "./App.scss"
// eslint-disable-next-line
import {Router, BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>    
    </div>
  )
}

export default App



