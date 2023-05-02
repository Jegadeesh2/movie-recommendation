import React, { useEffect, useState } from "react";
import { sort_api } from "../config";
import Movie from "../Components/Movie";

// Home page
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(sort_api) 
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error in getting movies", err));
  }, []);


  if (isLoading) {
    return (
      <div className="loading">
        <div className="loader"></div>
        <h5>Loading, Please wait..</h5>
      </div>
    );
  }

  //Popular movies sorted in Home page.

  return (
    <div className="home-page">
      <h1 className="home-heading">Trending Movies</h1>
      <Movie movies={movies} />
    </div>
  );
};

export default Home;
