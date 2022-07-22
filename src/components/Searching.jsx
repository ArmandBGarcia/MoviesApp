import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { addMovieFavorite, getMovies } from "../redux/actions";
import ShowMovies from "./ShowMovies";
import styles from "../components/styles/Searching.module.css";

export class Searching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ title: "" });
  }

  render() {
    console.log("esto estoy buscando", this.props);
    const { title } = this.state;
    return (
      <div id={styles.container}>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className={styles.form}>
            <label id={styles.label} htmlFor="title">
              Movie:
            </label>
            <input
              className={styles.input}
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            <button
              id={styles.btn}
              type="submit"
              onClick={() => {
                this.props.getMovies(title);
              }}
            >
              Search
            </button>
          </div>
        </form>
        <ShowMovies />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Searching);
