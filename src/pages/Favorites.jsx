import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import Swal from "sweetalert2";

const Favorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const savedItems = localStorage.getItem("favoriteItem");

    if (savedItems) {
      setFavorites(JSON.parse(savedItems));
    }

  }, []);



  //  Remove Function

  

  const removeFavorite = (id)=>{

    const updatedFavorites = favorites.filter(
      (item)=>item.id !== id

  
    );
    setFavorites(updatedFavorites)

    localStorage.setItem(
      "favoriteItem",
      JSON.stringify(updatedFavorites)
    );
  }

  return (
    <div className="container py-5">
      {favorites.length === 0 ? (

        <div className="text-center py-5">

          <i className="bi bi-heart fs-1 text-muted"></i>

          <h4 className="mt-3">
            No favorite recipes 
          </h4>
        </div>

      ) : (
        
        <div>
          <h4 className="text-center fw-semibold">
        My Favorites recipes
      </h4>
      <hr />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

          {favorites.map((item) => (

            <div className="col" key={item.id}>

              <div className="card h-100 shadow-sm">

                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                />

                <div className="card-body">

                  <h5 className="card-title">
                    {item.title}
                  </h5>

                  <p className="text-muted mb-2">
                    {item.category} • {item.country}
                  </p>

                  <a
                    href={`/recipeDetails/${item.id}`}
                    className="btn btn-success"
                    
                  >
                    View Recipe
                  </a>

                  <button className="btn btn-danger px-4 mx-4"
                  onClick={()=>removeFavorite(item.id)}
                  >
                    Remove
                  </button>

                </div>

              </div>

              </div>

          ))}

        </div>
</div>

      )}

    </div>
  );
};

export default Favorites;