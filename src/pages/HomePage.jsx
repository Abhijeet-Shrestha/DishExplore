import axios from "axios";
import React, { useState } from "react";
import Hero from "../components/Hero";
import RecipeCard from "../components/RecipeCard";
import Video_Instructions from "../components/Video_Instructions";
import Footer from "../components/Footer";

const HomePage = () => {
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
      <Hero />

      {/* Explore Recipe */}
      <div className="my-5 px-5" id="tranding-recip ">
        <h2 className="fw-semibold ">Explore Recipes</h2>
        {/* <p className="mx-5 fs-4 text-dark">Explore recipes by category</p> */}
        <hr />

        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3">
          {Recipes.slice(0, 4).map((item) => (
            <RecipeCard data={item} /> // we use props
          ))}
        </div>
      </div>
      {/* End of Explore Recipe */}


      {/* Video Section of recipe */}

      <div className="my-5 px-5" id="video-recipe">
        <h2 className="fw-semibold ">Cook Along with Our Recipes</h2>
        {/* <p className="mx-5 fs-4 text-dark">Follow step-by-step cooking videos and bring delicious recipes to life in your own kitchen.</p>git */}
        <hr />

        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3 justify-content-center">
          {Recipes.slice(5,8).map((item) => (
            <Video_Instructions data={item} /> // we use props
          ))}
        </div>
      </div>
      {/* End of Video Section of recipe */}



      {/* Popular Recipe  */}

 <div className="my-5 px-5" id="tranding-recipe">
        <h2 className="fw-semibold ">Popular Recipes</h2>
        {/* <p className="mx-5 fs-4 text-dark">Explore recipes by category</p> */}
        <hr />

        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3">
          {Recipes.slice(17, 21).map((item) => (
            <RecipeCard data={item} /> // we use props
          ))}
        </div>
      </div>

      {/* End of Popular Recipe  */}



      {/* Footer */}
      
      <Footer/>
      {/* End of Footer */}

    </>
  );
};

export default HomePage;
