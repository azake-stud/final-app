import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const HomePage =() =>{
    const [keyword, setKeyword]= useState('lion');
    // let {movies, errorMsg} = useFetch(`&s=${keyword}`);
    let { movies, errorMsg } = useFetch(
      keyword !== "" ? `&s=${keyword}` : ""
    );

    return(
        <div className="container">
            <h1 className="title">Hollywood Movies of All Time</h1>
            <input
                onChange={(e) => setKeyword(e.target.value)}
                value={keyword}
                placeholder="Search movies"
                className="search-input"
            />
            {!!errorMsg && <p className="error-msg">{errorMsg}</p>}
            <div className="content">
                {movies?.map((movie) => (
                 <a
                 href={`http://localhost:3000/movies/${movie?.imdbID}`}
                 className="movie"
                 >
            <img className="movie-img" src={movie?.Poster} />
            <div className="movie-detail">
              <h3 className="movie-name">{movie?.Title}</h3>
              <p className="movie-year">{movie?.Year}</p>
            </div>
          </a>
        ))}
        </div>
        </div>
    ); //return closing
}; //HomePage closing