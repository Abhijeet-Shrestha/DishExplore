
import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'

const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<Home />}> 
        <Route index element={<Hero />} />

        
        </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default MyRoute
