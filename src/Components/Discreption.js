import { CardActions, Rating } from "@mui/material";
import React from "react";

const Discreption = ({ match, movies }) => {
  //   console.log(match);
  let film = movies.find((el) => el.id == match.params.id);
  return (
    <div className="discriptionFilm">
      <img src={film.posterURL} alt="" />
      <h3>{film.title}</h3>
      <CardActions className="nejma">
          <Rating className="etoiles" name="read-only" value={film.rating} readOnly />
        </CardActions>
      <p>Discreption: {film.description}</p>
      <div className="trailer">{film.trailer}</div>
    </div>
  );
};

export default Discreption;
