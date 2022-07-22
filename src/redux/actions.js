import {
  ADD_MOVIE_FAVORITE,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  REMOVE_MOVIE_FAVORITE,
} from "./actionTypes.js";
const apikey = "c2827e22";

export const addMovieFavorite = (payload) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload,
  };
};

export const getMovies = (titulo) => {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_MOVIES,
          payload: json,
        });
      });
  };
};

export const removeMovieFavorite = (payload) => {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload,
  };
};

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`https://www.omdbapi.com/?apikey=${apikey}&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: GET_MOVIE_DETAIL,
          payload: json,
        });
      });
  };
}
