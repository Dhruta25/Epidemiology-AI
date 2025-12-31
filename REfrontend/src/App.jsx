import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './Dashboard.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Home from './Home.jsx'
function App() {
  

  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
       <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
