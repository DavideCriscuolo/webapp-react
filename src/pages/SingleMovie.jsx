import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import JumboC from "../components/JumboC";
import StarRatings from "react-star-ratings";
import FormNewRev from "../components/FormNewRev";
export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ reviews: [] });

  const NewReviws = (newReview) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      reviews: [...prevMovie.reviews, newReview],
    }));
  };

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
                  <div className=" col-sm-12 col-md-12 col-lg-4 p-2">
                    <img
                      src={`http://localhost:3004/${movie.image}`}
                      className="img-fluid   w-100"
                      alt="..."
                    />
                  </div>
                  <div className=" col-sm-12 col-md-8">
                    <div className="card-body ">
                      <h2 className="card-title fs-1 text-center">
                        {movie.title}
                      </h2>
                      <div className="my-5">
                        {" "}
                        <div className="card-text my-2">
                          {" "}
                          <h5 className="fw-bold">Trama</h5>
                          <p>{movie.abstract} </p>
                        </div>{" "}
                      </div>
                      <div className="my-5">
                        <h5 className="fw-bold">Info</h5>
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
                      </div>

                      <div></div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="my-5">
                      {" "}
                      <h3 className="card-text">Recensioni</h3>
                    </div>{" "}
                    {movie.reviews.map((review) => {
                      return (
                        <div className=" border-bottom border-grey py-3 ">
                          <div className="d-flex align-items-end gap-2">
                            <ul className="list-unstyled ">
                              <li key={review.id} className=" my-0  ">
                                {" "}
                                {review.name}{" "}
                                <StarRatings
                                  rating={review.vote}
                                  starRatedColor="gold"
                                  numberOfStars={5}
                                  starDimension="25px"
                                  starSpacing="2px"
                                ></StarRatings>
                                <p>{review.text}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      );
                    })}{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormNewRev></FormNewRev>
      </main>
    </>
  );
}
