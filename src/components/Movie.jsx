import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../redux/actions.js";
import styles from "./styles/Movie.module.css";

export default function Movie() {
  const movieDetail = useSelector((state) => state.movieDetail);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  return (
    <>
      <h1 className={styles.title}>Movie Detail</h1>
      <div className={styles.container}>
        <p className={styles.name}>{movieDetail.Title}</p>
        <h3 className={styles.actors}>{movieDetail.Actors}</h3>
        <p className={styles.plot}>{movieDetail.Plot}</p>
        <img
          className={styles.image}
          src={movieDetail.Poster}
          alt="Poster de la pelicua"
        />
      </div>
    </>
  );
}
