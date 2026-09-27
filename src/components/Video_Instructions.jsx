
import React from 'react'
import ReactPlayer from "react-player";


const Video_Instructions = (props) => {
  return (
    <>

      <div className="col">
        <div className="card">
 <ReactPlayer
          src={props.data.strYoutube}
          light={true}
          controls={true}
          width="100%"
        //   height="300px"
        />
          <div className="card-body">
              <h5 className="card-title"  title={props.data.strMeal}>Name: 
                <span id='item-name' className=''> {props.data.strMeal} </span>
              </h5>
              <h5 className="card-Category" title={props.data.strCategory}>Category: 
                <span id='item-category'> {props.data.strCategory}</span>
                </h5>
              <h5 className="card-Country" title={props.data.strCountry}><span>Country: </span>
              <span id='item-country'> {props.data.strCountry} </span> </h5> 
             


            
        <a href={`/recipeDetails/${props.data.idMeal}`} className="btn btn-small my-1 btn-outline-warning" id='v-view' >View Recipe</a>

        {/* <a href={`/favorites`} className="btn" id='Favorites'>
        <i class="bi bi-heart-fill"></i> <span>Favorites</span></a> */}
        </div>
        </div>
        </div>



    </>
  )
}

export default Video_Instructions
