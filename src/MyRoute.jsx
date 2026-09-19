
import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'
import LayoutPage from './pages/LayoutPage'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'


const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<LayoutPage />}> 
        {/* <Route index element={<Hero />} /> */}
        <Route index element={<HomePage />} />
        <Route path='/recipes' element={<RecipePage />} />
        {/* <Route index element={<RecipeList />} /> */}


        
        </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default MyRoute
