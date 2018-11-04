import styled from 'styled-components';

export const MoviesToWatch = styled.div`
    position: fixed;
    top: 0;
    right: 50px;
`

export const MovieItem = styled.div`
    border: 1px solid #000;
    margin-top: 5px;
    padding: 5px;
`

export const MoviesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
    max-width: 85%;
`

export const MovieCard = styled.div`
    margin: 20px;
    max-width: 200px;
    img {
        max-width: 200px;
        object-fit: contain;
    }

    button {
        margin-top: 10px;
        border: 1px solid #000;
        padding: 10px;
        background-color: ${props => props.status ? "red" : "white"}
    }
` 