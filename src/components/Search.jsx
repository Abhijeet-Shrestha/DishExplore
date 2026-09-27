import axios from 'axios';
import React, { useState } from 'react';

const Search = ({ Placeholder, setRecipe }) => {

  const [search, setSearch] = useState("");

  const searchHandle = async (e) => {

    e.preventDefault();

    // Check empty search
    if (search.trim() === "") {
      return;
    }

    try {

      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

      const output = await axios.get(url);

      setRecipe(output.data.meals || []);

    } catch (error) {

      console.log(error);
      setRecipe([]);

    }
  };

  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={searchHandle}
    >

      <input
        type="text"
        className="form-control form-control-lg w-50"
        placeholder={Placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="btn btn-success btn-lg ms-2"
      >
        Search
      </button>

    </form>
  );
};

export default Search;