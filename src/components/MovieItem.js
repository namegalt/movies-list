import React, { useState } from 'react';

const MovieItem = (props) => {

    const [status, set] = useState(false)

    function hadleClick() {
        set(!status)
        console.log(status)
        status ? props.removeFromWishes(props.movie.title) : props.setToWishes(props.movie.title)
    }

    return (
    <div>
        <div>{props.movie.title}</div>
        <button onClick={hadleClick}>add to wishes</button>
    </div>
    )
}

export default MovieItem