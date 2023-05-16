import React, {FC, ReactNode} from 'react';

import {useTheme} from "../../../context/ThemeContext";
import TitleAuth from "./TitleAuth/TitleAuth";
import styles from "./AuthWrapper.module.css"

interface AuthWrapperProps {
    children: ReactNode
    title?: string
}

const AuthWrapper:FC<AuthWrapperProps> = ({children, title}) => {

    const {isLightTheme} = useTheme()

    return (
        <div className={`${isLightTheme ? styles.light : styles.dark} ${styles.wrapper}`}>
            {!!title && <TitleAuth text={title} />}
            {children}
        </div>
    );
};

export default AuthWrapper;