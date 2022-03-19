import React from "react";
import "./style/movies.scss";

function DisplayMovies({ movie }) {
  return (
    <div className="movies-box">
      <img src={movie.Poster} alt="" />
      <p>{movie.Title}</p>
    </div>
  );
}

export default DisplayMovies;
