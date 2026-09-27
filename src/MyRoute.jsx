
import React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Hero from './components/Hero'
import RecipeList from './components/RecipeList'
import LayoutPage from './pages/LayoutPage'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'
import RecipeDetails from './pages/RecipeDetails'
import Categories from './pages/Categories'
import Favorites from './pages/Favorites'


const MyRoute = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element={<LayoutPage />}> 
        {/* <Route index element={<Hero />} /> */}
        <Route index element={<HomePage />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path='/recipeDetails/:recipe_id' element={<RecipeDetails />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/favorites' element={<Favorites />} />

        {/* <Route index element={<RecipeList />} /> */}




        
        </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default MyRoute
