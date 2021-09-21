import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import './style.css'


const Movie = ({movie}) => {
    return (
        <div className="film">
            <Card sx={{ maxWidth: 240 }}>
      <CardMedia
        component="img"
        height="350px"
        width="100%"
        image={movie.posterURL}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={movie.rating} readOnly />
      </CardActions>
    </Card>
        </div>
    )
}

export default Movie
