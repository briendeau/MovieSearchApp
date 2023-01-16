import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// used as static data for testing
// const movieOne =  {
//     "Title": "Shrek in the Swamp Karaoke Dance Party",
//     "Year": "2001",
//     "imdbID": "tt0307461",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTlmZjQzNmYtMjA1Ny00N2JkLWJhM2ItYTU3ODQ4Zjc2MWE1XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
// };

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const API_URL =  'http://www.omdbapi.com/?i=tt3896198&apikey=d28e4d60';

    // declare a API async function that takes a request, await fetches from an API 
    // and puts the promise return object into response, then get the data using await
    // we parse the data using await response.json();
    const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    // we only want the Search property from the data object returned.
    setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("top gun");
    }, []);

    return (
        <div className="app">
            <h1>Movie Palace</h1>

            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            
            { movies?.length > 0
                ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )}

        </div>
    );
}
export default App;