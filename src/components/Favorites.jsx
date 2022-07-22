import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../redux/actions";
import { Link } from "react-router-dom";
import styles from "./styles/Favorites.module.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2 className={styles.title}>Favorite movies</h2>
        <ul className={styles.container}>
          {this.props.movies.map((peli) => {
            return (
              <li className={styles.lista} key={peli.imdbID}>
                <Link to={`movie/${peli.imdbID}`}>
                  <p className={styles.name}> {peli.Title} </p>
                </Link>
                <img className={styles.image} src={peli.img} alt={peli.Title} />
                <button
                  className={styles.btn}
                  onClick={() => {
                    this.props.removeMovieFavorite(peli.imdbID);
                  }}
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
