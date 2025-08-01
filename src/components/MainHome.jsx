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
          <ul>
            {dataMovies.map((movie) => {
              return (
                <li key={movie.id}>
                  {movie.title}
                  <Link to={`/${movie.id}`}>Vai al film</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
