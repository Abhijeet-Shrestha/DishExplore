import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from "react-player";

const RecipeDetails = () => {

  const params = useParams();

  let rid = params.recipe_id;

  const [recipe, setRecipe] = useState({});


  // Get recipe details
  useEffect(() => {

    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${rid}`)
      .then((result) => {

        console.log(result.data);

        setRecipe(result.data.meals[0]);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [rid]);



  // For ingredients
  const ingredients = [];

for (let i = 1; i <= 20; i++) {

  const ingredient = recipe[`strIngredient${i}`];
  const measure = recipe[`strMeasure${i}`];

  if (ingredient) {
    ingredients.push({
      ingredient,
      measure
    });
  }

}


  return (
    <>

      <div className="container py-5">

  <a href="/recipes" className="text-decoration-none text-dark btn btn-outline-success">
    ← Back to Recipes
  </a>

  <div className="row align-items-center g-5 mt-2">

    {/* Image */}
    <div className="col-lg-4 w-60">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="img-fluid rounded-4 shadow-sm"
      />
    </div>


    {/* Information */}
    <div className="col-lg-6">

      <h1 className="display-5 fw-bold">
        {recipe.strMeal}
      </h1>

      <p className="text-muted fs-5 bg-success-subtle">
        {recipe.strCategory} • {recipe.strArea}
      </p>
      <h6>How to Cook</h6>
      <p className="text-muted fs-5">
        {recipe.strInstructions}
      </p>

      

      <button className="btn btn-outline-success">
        <i className="bi bi-heart"></i>
        {" "}Add to Favorites
      </button>

    </div>

<h5 className='text-center fs-3'>Ingredients</h5>
<hr className='m-3'/>
  <div className="row">

  {ingredients.map((item, index) => (

    <div className="col-md-6 mb-3" key={index}>

      <div className="d-flex justify-content-between border-bottom pb-2">

        <span>
          {item.ingredient}
        </span>

        <span className="text-muted">
          {item.measure}
        </span>

      </div>

    </div>

  ))}

</div>

{recipe.strYoutube && (
  <section className="mt-5">

    <h2 className="fw-bold mb-4 text-center">
      Watch & Cook
    </h2>

    <div className="d-flex justify-content-center">

      <ReactPlayer
        src={recipe.strYoutube}
        controls
        width="800px"
        height="450px"
      />

    </div>

  </section>
)}
 </div>

</div>

    </>
  );
};

export default RecipeDetails;