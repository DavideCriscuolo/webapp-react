import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function MainHome() {
  const [dataMovies, setDataMovies] = useState([]);

  const url = "http://localhost:3004/movies";
  function gnrData() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDataMovies(data);
        console.log(data);
      });
  }
  useEffect(gnrData, []);

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            {dataMovies.map((movie) => {
              return (
                <div className="col" key={movie.id}>
                  <div className="card text-white bg-primary">
                    <img
                      src={` http://localhost:3004/${movie.image}`}
                      alt="Title"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h4 className="card-title"> {movie.title}</h4>
                      <p className="card-text">Text</p>
                    </div>
                  </div>

                  <Link to={`/${movie.id}`}>Vai al film</Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
