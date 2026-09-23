
import React from 'react'

const Search = ({Placeholder}) => { // placeholder is the props 
  return (
    <>
    <form className="d-flex justify-content-center ">
          <input
            type="text"
            className="form-control form-control-lg w-50"
            placeholder={Placeholder}
           
          />

          <button
            type="submit"
            className="btn btn-success btn-lg ms-2"
          >
            Search
          </button>
        </form>
      
    </>
  )
}

export default Search
