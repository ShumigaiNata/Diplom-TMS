import React, {FC} from 'react';
import {IFilm} from "./Film/interfaces";

import styles from "../FilmsList/FilmList.module.css"
import Film from "./Film/Film";
interface FilmListProps {
    config: IFilm[]
}

const FilmsList:FC<FilmListProps> = ({config}) => {
    return (
        <div className={styles.films}>
            {config.map(film => <Film {...film} key={film.imdbID}/>)}
        </div>
    );
};

export default FilmsList;