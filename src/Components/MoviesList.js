import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import './style.css'

const MoviesList = ({ movies }) => {
    
    

  return (
   
      <div className="lista">

      {
        movies.map((el,i) => ( <Link  to={`/discreption/${el.id}`} >
          <Movie key={i} movie={el} />
          </Link>))
        }
   
        </div>
  );
};

export default MoviesList;
