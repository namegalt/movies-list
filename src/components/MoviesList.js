import React from 'react';
import {MoviesWrapper} from './components'

import MovieItem  from './MovieItem'

const MoviesList = (props) => (
   <MoviesWrapper>{props.movies.map(i => {
       return <MovieItem movie={i} key={i.id} setToWishes={props.setToWishes} removeFromWishes={props.removeFromWishes}></MovieItem>
   })}</MoviesWrapper>
)

export default MoviesList