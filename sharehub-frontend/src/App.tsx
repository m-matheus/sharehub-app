import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './container/Home.tsx'
import Login from './components/Login.tsx'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}

export default App
