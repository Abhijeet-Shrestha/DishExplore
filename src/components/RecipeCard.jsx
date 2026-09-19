import React from 'react'

const RecipeCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <img src={props.data.strMealThumb} className="card-img-top" alt={props.data.strMeal} />
          <div className="card-body">
            
              <h5 className="card-title"  title={props.data.strMeal}>Name: 
                <span id='item-name' className=''> {props.data.strMeal} </span>
              </h5>
              <h5 className="card-Category" title={props.data.strCategory}>Category: 
                <span id='item-category'> {props.data.strCategory}</span>
                </h5>
              <h5 className="card-Country" title={props.data.strCountry}><span>Country: </span>
              <span id='item-country'> {props.data.strCountry} </span> </h5>


            
        <a href={`/productview/${props.data.idMeal}`} className="btn btn-small my-1" id='view'>View Recipe</a>

        <a href={`/productview/${props.data.idMeal}`} className="btn" id='Favorites'>
        <i class="bi bi-heart-fill"></i> <span>Favorites</span></a>

     


          </div>
        </div>
      </div>

    </>
  )
}

export default RecipeCard
