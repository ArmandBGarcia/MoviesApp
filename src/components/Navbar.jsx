import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/pelis.jpg";
import styles from "../components/styles/Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.containerfirst}>
      <div id={styles.image}>
        <img src={Logo} width="60" height="60" alt="" />
      </div>
      <div id={styles.container}>
        <header>
          <nav>
            <ul>
              <li id={styles.lista}>
                <Link id={styles.links} to="/">
                  Home
                </Link>
                <Link id={styles.links} to="/fav">
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
}
