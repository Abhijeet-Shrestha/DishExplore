import React, { useState } from 'react'
import Categories from '../pages/Categories';

const RecipeCard = (props) => {

  return (
    <>
      <div className="col">

        <div className="card recipe-card h-100">

          <img
            src={props.data.strMealThumb}
            className="card-img-top recipe-image"
            alt={props.data.strMeal}
          />

          <div className="card-body d-flex flex-column">

            {/* Recipe Name */}

            {
              props.data.strMeal.length > 25 ?
              <h5
              className="card-title recipe-title"
              title={props.data.strMeal}>
              {props.data.strMeal.slice(0,25)}...
            </h5>
            : 
            <h5
              className="card-title recipe-title"
              title={props.data.strMeal} >
              {props.data.strMeal}
            </h5>
            }


            {/* Category */}
            <p className="recipe-info meta fs-5">
              {props.data.strCategory || "Recipe"}
               {" • "} 
              {props.data.strArea || "International"}
            </p>


            {/* Buttons */}
            <div className="mt-auto d-flex justify-content-between gap-2">

              <a
                href={`/recipeDetails/${props.data.idMeal}`}
                className="btn btn-outline-warning"
                id="view"
              >
                View Recipe
              </a>


              {/* <button
                onClick={()=>addFavorite(Recipe.idMeal)}
                className="btn btn-outline-success"
                id="Favorites"
            >
                <i className="bi bi-heart-fill"></i>
                {" "}Favorites
            
              </button> */}

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default RecipeCard