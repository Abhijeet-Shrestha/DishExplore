import React from "react";
import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className=" px-4 border-bottom">
        <nav className="navbar navbar-expand-lg  mb-3">
          <div className="container-fluid text-decoration-none">
            <a className="navbar-brand ms-4" href="/">
              <span className="fs-2 text-success fw-medium">Dish</span><span className="fs-4 text-warning">Explore</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fs-5" id="navbarScroll">
                {/* <div className="search w-50 mx-2" id="search">

            <Search Placeholder={'Search recipes or ingredients...'}/>
                </div> */}
              <ul className="navbar-nav m-auto my-2 my-lg-0 navbar-nav-scroll g-5 ">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/recipes">
                    Recipes
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link " href="/categories">
                    Categories
                  </a>
                </li>

                {/* <li className="nav-item">
                  <a className="nav-link " href="#">
                  About
                  </a>
                  </li> */}
              </ul>
            <div>
                  <a href="/favorites" className="text-decoration-none nav-link my-4">
                     <i className="text-danger bi bi-heart-fill"></i> Favorites
                  </a>
            </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
