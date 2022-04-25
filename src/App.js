import './index.css';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className='title'>Search Movies</h1>
      <input placeholder='Movie name' className='search-item' type="" />
      <p className='error-msg'>Error</p>

      <div className='content'>
        <div className='movie'>
          
        </div>

      </div>
    </div>
  );
}

export default App;
