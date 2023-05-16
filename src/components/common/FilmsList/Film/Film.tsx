import React, {FC} from 'react';
import {IFilm} from "./interfaces";
import styles from "../Film/Film.module.css"
import {useTheme} from "../../../../context/ThemeContext";

const Film:FC<IFilm> = (props) => {
    let { imdbID = 1, Title, Genre, Poster, imdbRating} = props;

    Genre = Genre.split(",").join(` • `)
    const {isLightTheme} = useTheme()
    return (
        <div className={styles.filmWrapper}>
            <div className={styles.block}>
                <img src={Poster} alt="film" className={styles.filmImg}/>
                <p className={styles.filmRating}>{imdbRating}</p>
            </div>
            <h3 className={`${isLightTheme ? styles.light : styles.dark} ${styles.filmTitle}`}>{Title}</h3>
            <p className={styles.filmGenre}>{Genre}</p>
        </div>
    );
};

export default Film;