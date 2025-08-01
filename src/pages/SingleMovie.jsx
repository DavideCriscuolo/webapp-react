import { use, useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import JumboC from "../components/JumboC";
import StarRatings from "react-star-ratings";
export default function SingleMovie() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState({});
  const urlReview = `http://localhost:3004/movies/movie/${id}`;
  const urlData = `http://localhost:3004/movies/${id}`;
  function gnrData() {
    fetch(urlReview)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
    fetch(urlData)
      .then((res) => res.json())
      .then((data) => {
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
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`http://localhost:3004/${movie.image}`}
                      className="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
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
                        <div>
                          {reviews.map((review) => {
                            return (
                              <div className=" border-bottom border-grey py-3 ">
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
        </div>
      </main>
    </>
  );
}
