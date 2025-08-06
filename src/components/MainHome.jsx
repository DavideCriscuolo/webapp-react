import { useEffect, useState } from "react";
import { Link } from "react-router";
import CardC from "./CardC";
import Loader from "./Loader";
export default function MainHome() {
  const [dataMovies, setDataMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:3004/movies";
  function gnrData() {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDataMovies(data);
          console.log(data);
          setIsLoading(false);
        });
    }, 2000);
  }
  useEffect(gnrData, []);
  return (
    <>
      <main>
        <div className="container py-5">
          <h2 className="text-center text-white py-3">TUTTI I FILM</h2>
          <div className=" py-2 row row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-4  g-3">
            {isLoading ? <Loader></Loader> : <CardC data={dataMovies}></CardC>}

            <CardC data={dataMovies}></CardC>
          </div>
        </div>
      </main>
    </>
  );
}
