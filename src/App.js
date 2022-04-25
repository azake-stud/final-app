import './index.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Search Movies</h1>
      <input placeholder="Search smt" className="search-input" />
      <p className="error-msg">Error</p>
      <div className="content">
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
        <a href="#" className="movie">
          <div className="movie-detail">
            <h3 className="movie-name">Spider man</h3>
            <p className="movie-year">2021</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;
