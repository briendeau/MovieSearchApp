import React from "react";

// use object destructions on the props so you dont need to type props.movieOne everytime.

const MovieCard = ({ movie }) => {
    return (
    <div className="movie">
        <div>
            <p>{movie.Year}</p>
        </div>
        
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    );
};

export default MovieCard;