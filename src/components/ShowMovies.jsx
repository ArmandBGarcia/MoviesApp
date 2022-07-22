import React from "react";
import { Link } from "react-router-dom";
import { addMovieFavorite } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles/ShowMovies.module.css";

const ShowMovies = () => {
  const favoritas = useSelector((state) => state.moviesFavourites);
  const movies = useSelector((state) => state.moviesLoaded);
  const dispatch = useDispatch();

  return (
    <>
      <div id={styles.container}>
        {movies.map((peli) => {
          return (
            <div key={peli.imdbID}>
              <ul className={styles.containerList}>
                <li className={styles.element} key={peli.imdbID}>
                  <Link className={styles.link} to={`/movie/${peli.imdbID}`}>
                    <p className={styles.title}>{peli.Title}</p>
                  </Link>
                  <img
                    className={styles.image}
                    src={peli.Poster}
                    alt={peli.Title}
                  />
                  <button
                    className={styles.btn}
                    onClick={() => {
                      dispatch(
                        addMovieFavorite({
                          Title: peli.Title,
                          imdbID: peli.imdbID,
                          img: peli.Poster,
                        })
                      );

                      // console.log("favoritas", favoritas);
                    }}
                  >
                    add
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowMovies;
