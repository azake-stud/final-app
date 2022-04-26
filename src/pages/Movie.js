import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const MoviePage = () => {
  document.body.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/03/37/51/16/360_F_337511608_1bPyjqbJldP2xpNeyeLEiN6rUMwK1dZt.jpg')";
  let params = useParams();
  const { movies } = useFetch(`&i=${params?.id}`);

  return (
    <div className="container">
      <div className="row">
        <img className="bg-img" src={movies?.Poster} />
        <div className="movie-data desc-info">
          <h1>{movies?.Title}</h1>
          <p className="movie-desc desc-info">{movies?.Plot}</p>
          <p className="movie-year bold desc-info">{movies?.Year}</p>
          <Link to="/">
            <button className="back-btn">Back to Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
};