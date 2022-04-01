import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/getMovies").then(res => res.json()).then(resp => {
      console.log(resp)
      setMovieList(resp)
    })
  }, [])

  return (
    <div className="App">
      <h2>Movies List</h2>
      <div className="card">
        {movieList.map((res) => {
          return (
            <div className="card-body">
              <h5 className="card-title"><b>{(res.movie_name).toUpperCase()}</b></h5>
              <p className="card-text">{res.rating}</p>
              <p className="card-text">{res.realeased_date}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
