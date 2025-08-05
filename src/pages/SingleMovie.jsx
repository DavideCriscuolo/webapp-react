import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import JumboC from "../components/JumboC";
import StarRatings from "react-star-ratings";
export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ reviews: [] });
  const urlReview = `http://localhost:3004/movies/movie/${id}`;

  function gnrData() {
    fetch(urlReview)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }
  useEffect(gnrData, []);

  return (
    <>
      <main>
        <JumboC></JumboC>
        <div className="container ">
          <div className="row p-5">
            <div className="col">
              <div className="card border-0 mb-3">
                <div className="row g-0">
                  <div className=" col-sm-12 col-md-12 col-lg-4 d-flex justify-content-center  align-items-center p-2">
                    <img
                      src={`http://localhost:3004/${movie.image}`}
                      className="img-fluid   w-100"
                      alt="..."
                    />
                  </div>
                  <div className=" col-sm-12 col-md-12 col-lg-8">
                    <div className="card-body ">
                      <h2 className="card-title">{movie.title}</h2>
                      <div>
                        {" "}
                        <p className="card-text my-2">{movie.abstract}</p>{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="card-text my-2">
                          {" "}
                          Diretto da: {movie.director}
                        </p>{" "}
                      </div>
                      <div>
                        {" "}
                        <p className="card-text my-2">
                          {" "}
                          Genere: {movie.genre}
                        </p>{" "}
                      </div>
                      <div className="my-5">
                        {" "}
                        <h3 className="card-text">Recensioni</h3>
                      </div>
                      <div>
                        {movie.reviews.map((review) => {
                          return (
                            <div
                              key={review.id}
                              className=" border-bottom border-grey py-3 "
                            >
                              <div className="d-flex align-items-end gap-2">
                                <h6 className="fw-bold my-0  ">
                                  {" "}
                                  {review.name}{" "}
                                </h6>
                                <StarRatings
                                  rating={review.vote}
                                  starRatedColor="gold"
                                  numberOfStars={5}
                                  starDimension="25px"
                                  starSpacing="2px"
                                ></StarRatings>
                              </div>
                              <p>{review.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
