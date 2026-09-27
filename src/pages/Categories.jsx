import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import axios from 'axios';
import Search from '../components/Search';
import Footer from '../components/Footer';

const Categories = () => {

  const [Recipes, setRecipe] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false); // whether the API is currently loading data. like on/off


  // Fetch recipes
  const getRecipes = async (category = "All") => {

    setLoading(true);

    try {

      let url;

      if (category === "All") {
        url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      }

      const result = await axios.get(url);

      setRecipe(result.data.meals || []);

    } catch (error) {

      console.log(error);
      setRecipe([]);

    } finally {

      setLoading(false);

    }
  };


  // Run when page first loads
  useEffect(() => {
    getRecipes();
  }, []);


  // Category button
  const handleCategory = (category) => {

    setSelectedCategory(category);

    getRecipes(category);

  };


  return (
    <>

      <div className="my-5 px-5" id="Categories">

        <h2 className="my-2 text-center fs-3">
          What's Cooking?
        </h2>

        <p className="m-1 fs-5 text-dark text-center">
          Discover delicious recipes and find something new to cook today.
        </p>


        {/* Search */}
        <div className="Searchbar my-4">

          <Search
            Placeholder="Search recipes, ingredients..."
            setRecipe={setRecipe}
          />

        </div>


        {/* Category Filter */}
        <div className="filterSection mx-2" id="filterSection">

          <button
            className={`btn ${
              selectedCategory === "All"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2 my-2`}
            onClick={() => handleCategory("All")}>
            All
          </button>


          <button
            className={`btn ${
              selectedCategory === "Chicken"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2`}
            onClick={() => handleCategory("Chicken")}
          >
            Chicken
          </button>


          <button
            className={`btn ${
              selectedCategory === "Beef"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2`}
            onClick={() => handleCategory("Beef")}
          >
            Beef
          </button>


          <button
            className={`btn ${
              selectedCategory === "Seafood"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2`}
            onClick={() => handleCategory("Seafood")}
          >
            Seafood
          </button>


          <button
            className={`btn ${
              selectedCategory === "Breakfast"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2`}
            onClick={() => handleCategory("Breakfast")}
          >
            Breakfast
          </button>


          <button
            className={`btn ${
              selectedCategory === "Vegetarian"
                ? "btn-success"
                : "btn-outline-success"
            } mx-2`}
            onClick={() => handleCategory("Vegetarian")}
          >
            Vegetarian
          </button>

        </div>


        <hr />


        {/* Recipe count */}
        <div className="mb-3">
          <h4>
            {selectedCategory === "All"
              ? "All Recipes"
              : `${selectedCategory} Recipes`}
          </h4>
        </div>


        {/* Loading */}
        {loading && (
          <p className="text-center">
            Loading recipes...
          </p>
        )}


        {/* No recipes */}
        {!loading && Recipes.length === 0 && (
          <p className="text-center">
            No recipes found.
          </p>
        )}


        {/* Recipe cards */}
        

           <div className="row row-cols-1 row-cols-md-2  row-cols-lg-4 g-3">
          {Recipes.slice(9, 16).map((item) => (
            <RecipeCard data={item} /> // we use props
          ))}
        </div>
        

      </div>

      <Footer/>

    </>
  );
};

export default Categories;