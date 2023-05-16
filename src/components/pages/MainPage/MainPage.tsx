import React, {FC} from 'react';
import MainWrapper from "../../common/MainWrapper/MainWrapper";
import FilmsList from "../../common/FilmsList/FilmsList";
import {config} from "../../common/FilmsList/Film/interfaces";
import Button, {BtnVariants} from "../../common/Button/Button";
import styles from "../../common/MainWrapper/MainWrapper.module.css";
import {useTheme} from "../../../context/ThemeContext";

const MainPage:FC = () => {
    const {isLightTheme} = useTheme()

    return (
        <MainWrapper>
            <FilmsList config={config}/>
            <Button variant={BtnVariants.forPagination}>
                Show more
                <div className={`${isLightTheme ? styles.lightLoader : styles.loader}`}></div>
            </Button>
        </MainWrapper>
    );
};

export default MainPage;