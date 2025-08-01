import { use, useState, useEffect } from "react";
import { useParams } from "react-router";

export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const url = `http://localhost:3004/movies/movie/${id}`;

  function gnrDataMovvie() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }
  useEffect(gnrDataMovvie, []);
  console.log(movie);
  return (
    <>
      <main>
        <div>
          {movie.map((item) => {
            return <p>{item.text}</p>;
          })}
        </div>
      </main>
    </>
  );
}
