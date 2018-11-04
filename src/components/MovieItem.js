import React, { useState } from 'react';
import {MovieCard} from './components.js'

const MovieItem = (props) => {

    const [status, set] = useState(false)

    const hadleClick = () => {
        set(!status)
        console.log(status)
        status ? props.removeFromWishes(props.movie) : props.setToWishes(props.movie)
    }

    return (
    <MovieCard status={status}>
        <img src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path ||
            props.movie.poster_path}`} alt='img'></img>
        <h3>{props.movie.title}</h3>
        <div>{props.movie.vote_average}</div>
        <button onClick={hadleClick}>add to wishes</button>
    </MovieCard>
    )
}

export default MovieItem