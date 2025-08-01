import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function MainHome() {
  const [dataMovies, setDataMovies] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
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
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2   row-cols-lg-3  g-3">
            {dataMovies.map((movie) => {
              return (
                <div className="col" key={movie.id}>
                  <div className="card h-100 text-bg-dark">
                    <img
                      src={` http://localhost:3004/${movie.image}`}
                      className="card-img"
                      alt="Image Film"
                    />
                    <div
                      className="card-img-overlay  p-0"
                      onMouseEnter={() => setIsVisible(movie.id)}
                      onMouseLeave={() => setIsVisible(false)}
                    >
                      <div
                        className={`hidden ${
                          isVisible === movie.id ? "show" : ""
                        }`}
                      >
                        <h5 class="card-title text-center py-3 fw-bold">
                          {" "}
                          {movie.title}
                        </h5>
                        <div className="d-flex justify-content-center align-items-center">
                          <Link
                            className="btn btn-outline-danger   mx-2"
                            to={`/${movie.id}`}
                          >
                            Vai al film
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
