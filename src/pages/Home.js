import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const HomePage =() =>{
    document.body.style.backgroundImage = "url('https://s.studiobinder.com/wp-content/uploads/2021/07/What-is-the-Studio-System-%E2%80%94-Hollywood-s-Studio-Era-Explained-Featured.jpg')";
    const [keyword, setKeyword]= useState('world');
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