
import axios from 'axios';
import React, { useState } from 'react'
import RecipeCard from '../components/RecipeCard';

const RecipePage = () => {
    
       const [Recipes, setRecipe] = useState([]);

  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=") // api call
    .then((result) =>
      setRecipe(
        result.data.meals, // api run case
      ),
    )
    .catch(
      (error) => console.log(error), // api not run case
    );
  return (
    <>
      
    <div className="my-5 px-5" id="tranding-recipe">
  <h2 className='fw-semibold '>Explore All Recipes</h2>
  {/* <p className="mx-5 fs-4 text-dark">Explore recipes by category</p> */}
  <hr />

  <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3">

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

export default RecipePage
