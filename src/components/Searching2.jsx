// import { useState } from "react";
// import { addMovieFavorite, getMovies } from "../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import ShowMovies from "./ShowMovies";
// import styles from "../components/styles/Searching.module.css";

// const Searching = () => {
//   const dispatch = useDispatch();

//   const movies = useSelector((state) => state.maviesLoaded);

//   const [title, setTitle] = useState("");

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//     console.log();
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setTitle("");
//   };

//   return (
//     <div id={styles.container}>
//       <form onSubmit={(e) => handleSubmit(e)}>
//         <div className={styles.form}>
//           <label id={styles.label} htmlFor="title">
//             Movie:
//           </label>
//           <input
//             className={styles.input}
//             type="text"
//             id="title"
//             autoComplete="off"
//             value={title}
//             onChange={(e) => {
//               handleChange(e);
//             }}
//           />
//           <button
//             id={styles.btn}
//             type="submit"
//             onClick={() => {
//               dispatch(getMovies(title));
//             }}
//           >
//             Search
//           </button>
//         </div>
//       </form>
//       <ShowMovies />
//     </div>
//   );
// };

// export default Searching;
