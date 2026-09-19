import React from "react";
import heroVideo from "../assets/video/herosection.mp4";

const Hero = () => {
  return (
    <div className="herosection position-relative" id="herosection">

      {/* Background Video */}
      <video
        className="hero-video w-100 h-300"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support video.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay position-absolute top-0 start-0 w-100 h-300"></div>

      {/* Hero Content */}
      <div className="hero-content position-absolute top-50 start-50 translate-middle text-center text-white w-100 px-3">

        <p className="text-uppercase fw-semibold mb-2 fs-3">
            <span className="text-success"> Explore </span>
            <span className="fs-2 fw-semibold">|</span>
            
            <span className="text-warning">  Cook  </span>
            <span className="fs-2 fw-semibold">|</span>
           <span className="text-info"> Enjoy</span>
        </p>

        <h1 className="display-3 fw-bold">
          Discover Your Next Favorite Dish
        </h1>

        <p className="lead mb-4  text-semibold">
          Explore delicious recipes, discover new flavors,
          and find something you'll love to cook.
        </p>


        {/* Search */}
        <form className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control form-control-lg w-50"
            placeholder="Search recipes or ingredients..."
          />

          <button
            type="submit"
            className="btn btn-success btn-lg ms-2"
          >
            Search
          </button>
        </form>

      </div>

    </div>
  );
};

export default Hero;