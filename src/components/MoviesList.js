import React from 'react';

import MovieItem  from './MovieItem'

const MoviesList = (props) => (
   <div>{props.movies.map(i => {
       return <MovieItem movie={i} key={i.id} setToWishes={props.setToWishes} removeFromWishes={props.removeFromWishes}></MovieItem>
   })}</div>
)

export default MoviesList