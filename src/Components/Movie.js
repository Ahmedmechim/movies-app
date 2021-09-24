import React from "react";
// import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";
import "./style.css";

const Movie = ({ movie }) => {
  return (
    <div className="film">
      {/* <Card
       px={{ maxWidth: 240, maxHeight: 740 }}
       > */}
        <CardMedia
        className="image"
          component="img"
          height="220px"
          width="145"
          image={movie.posterURL}
          alt=""
          
        />
        <CardContent>
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="div"
            fontSize="18px"
          >
            {movie.title}
          </Typography>
          <Typography
            className="discreption"
            variant="body2"
            color="text.secondary"
          >
            {movie.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Rating className="etoiles" name="read-only" value={movie.rating} readOnly />
        </CardActions>
      {/* </Card> */}
    </div>
  );
};

export default Movie;
