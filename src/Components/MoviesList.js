import React from "react";
import Movie from "./Movie";
import './style.css'

const MoviesList = ({ movies }) => {
    console.log(movies)

  return (
    <div className="lista">

      {
      movies.map((el,i) => (
        <Movie key={i} movie={el} />
      ))
      }
    </div>
  );
};

export default MoviesList;
