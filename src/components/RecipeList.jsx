import axios from 'axios'
import React, { useState } from 'react'
import RecipeCard from './RecipeCard'

const RecipeList = () => {

  
    const [Recipes , setRecipe] = useState([])
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=') // api call 
  .then((result)=>setRecipe(
  
    result.data.meals // api run case
))
  .catch((error=>console.log(error)) // api not run case 
  )
  
  return (
    <>
  {/* All the Recipe list is here  */}



      <div className="my-5 px-5" id="tranding-recipe">
  <h2 className=''>Tranding Recipe</h2>
  <hr />

  <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-4">

    {
      Recipes.map((item)=>(
        <RecipeCard data={item}/> // we use props
      ))
    }
</div>
</div>
    </>
  )
}

export default RecipeList
