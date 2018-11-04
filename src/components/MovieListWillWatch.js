import React from 'react'
import {MoviesToWatch, MovieItem} from './components.js'

const MovieListWillWatch = (props) => (
    <MoviesToWatch>
        <h3>will watch {props.moviesWillWatch.length} movies</h3>
        {props.moviesWillWatch.map(i => {
            return (
                <MovieItem key={i.id}>
                    <div>{i.title}</div>
                    <div>{i.vote_average}</div>
                </MovieItem>
            )
        })}
    </MoviesToWatch>
)

export default MovieListWillWatch