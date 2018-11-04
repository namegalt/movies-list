import React, { useState } from 'react';
import MoviesList from './MoviesList';
import MovieListWillWatch from './MovieListWillWatch';
import { moviesData } from '../moviesData';

const App = () => {
    const [moviesWillWatch, set] = useState([])


    const setToWishes = title => {
        const willWatch = [...moviesWillWatch, title]
        set(willWatch)
    }

    const removeFromWishes = (title) => {
        set(moviesWillWatch.filter(i => i !== title))
    }

    console.log(moviesWillWatch)

    return (
       <div>
            <MoviesList movies = {moviesData} setToWishes={setToWishes} removeFromWishes={removeFromWishes}></MoviesList>
            <MovieListWillWatch moviesWillWatch={moviesWillWatch}></MovieListWillWatch>
       </div>
    )
}

export default App