
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white mt-5">

      <div className="container py-5">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4">

            <h3 className="fw-bold">
              DishExplore
            </h3>

            <p className="text-secondary">
              Discover delicious recipes, explore new flavors,
              and find something you'll love to cook.
            </p>

            <div className="fs-4">
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-github me-3"></i>
              <i className="bi bi-facebook"></i>
            </div>

          </div>


          {/* Explore */}
          <div className="col-6 col-lg-2">

            <h5 className="fw-bold mb-3">
              Explore
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a href="/" className="text-secondary text-decoration-none">
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a href="/categories" className="text-secondary text-decoration-none">
                  Categories
                </a>
              </li>

              <li className="mb-2">
                <a href="/favorites" className="text-secondary text-decoration-none">
                  Favorites
                </a>
              </li>

            </ul>

          </div>


          {/* Categories */}
          <div className="col-6 col-lg-2">

            <h5 className="fw-bold mb-3">
              Categories
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2 text-secondary">Chicken</li>
              <li className="mb-2 text-secondary">Seafood</li>
              <li className="mb-2 text-secondary">Dessert</li>
              <li className="mb-2 text-secondary">Vegetarian</li>

            </ul>

          </div>


          {/* Quick Links */}
          <div className="col-lg-4">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <p className="text-secondary">
              Looking for something delicious?
              Explore our recipes and start cooking today.
            </p>

            <a
              href="/recipes"
              className="btn btn-success"
            >
              Find Recipes
            </a>

          </div>

        </div>

      </div>


      {/* Bottom */}
      <div className="border-top border-secondary">

        <div className="container py-3 text-center">

          <p className="mb-0 text-secondary">
            © 2026 DishExplore. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
    </>
  )
}

export default Footer
