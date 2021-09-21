import React, { useState } from 'react'
import Add from './Add'
import { Movies } from './Donnes'
import BasicRating from './Etoile'
import MoviesList from './MoviesList'
import './style.css'


const Container = () => {
    const [movies, setMoivies] = useState(Movies)
    const AddMovie=(title, dicreption, url, rating)=>{
        let newMovie={id: Math.random(), title: title , description: dicreption , posterURL: url, rating:rating  }
    setMoivies([...movies, newMovie ])
    }
    const filter=(x)=>{
        setMoivies(movies.filter((el) => el.rating===x));
    }
    return (
        <div className="cont">
            <BasicRating filter={filter}/>
            <MoviesList movies={movies} />
            <Add AddMovie={AddMovie} />
        </div>
    )
}

export default Container
