import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardC from "./CardC";
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
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-4  g-3">
            <CardC data={dataMovies}></CardC>
          </div>
        </div>
      </main>
    </>
  );
}
