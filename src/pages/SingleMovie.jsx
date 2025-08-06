import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import JumboC from "../components/JumboC";

import FormNewRev from "../components/FormNewRev";
import { LoaderContext } from "../context/contextLoader";
import Loader from "../components/Loader";
import SingleMovieCard from "../components/SingleMovieCard";
export default function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({ reviews: [] });
  const [isLoading, setIsLoading] = useState(LoaderContext);
  const urlReview = `http://localhost:3004/movies/movie/${id}`;

  function gnrData() {
    setTimeout(() => {
      fetch(urlReview)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovie(data);
          setIsLoading(false);
        });
    }, 1500);
  }
  useEffect(gnrData, []);

  return (
    <>
      <main>
        <JumboC></JumboC>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container ">
            <div className="row p-5">
              <div className="col">
                <SingleMovieCard props={movie}></SingleMovieCard>
              </div>
            </div>
            <FormNewRev gnrData={gnrData}></FormNewRev>
          </div>
        )}
      </main>
    </>
  );
}
