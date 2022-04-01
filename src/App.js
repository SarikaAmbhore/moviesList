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
      <div className="card-text margin-given">Movies List</div>
      <div className="grid">
        {movieList.map((res) => {
          return (
            <div className="item">
              <div className="card-body">
                <h5 className="card-title">{res.movie_name}</h5>
                <p className="card-text">Rating: {res.rating}</p>
                <p className="card-text">Released Date: {res.realeased_date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
