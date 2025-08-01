import { useEffect, useState } from "react";

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
              return <li>{movie.title}</li>;
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
