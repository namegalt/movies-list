import React from 'react'

const MovieListWillWatch = (props) => (
    <div>
        <h3>will watch {props.moviesWillWatch.length}</h3>
        <p>{props.moviesWillWatch}</p>
    </div>
)

export default MovieListWillWatch