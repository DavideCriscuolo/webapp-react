import { useState } from "react";
import { Link } from "react-router";
export default function CardC(props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {props.data.map((movie) => {
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
                  className={`hidden ${isVisible === movie.id ? "show" : ""}`}
                >
                  <h5 className="card-title text-center py-3 fw-bold">
                    {" "}
                    {movie.title}
                  </h5>
                  <div className="d-flex justify-content-center align-items-center">
                    <Link
                      className="btn btn-outline-danger border-3 fw-bold mx-2"
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
    </>
  );
}
