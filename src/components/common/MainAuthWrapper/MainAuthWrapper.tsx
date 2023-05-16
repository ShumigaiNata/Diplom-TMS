import React, {FC, ReactNode} from 'react';
import {ThemeVariant, useTheme} from "../../../context/ThemeContext";

import styles from "./MainAuthWrapper.module.css";
import Footer from "./Footer/Footer";
import Logo from "./Logo/Logo";

interface MainAuthWrapperProps {
    children: ReactNode
}

const MainAuthWrapper: FC<MainAuthWrapperProps> = ({children}) => {
    const { setTheme} = useTheme()

    return (
        <div className={styles.mainAuthWrapper}>
            <div className={styles.wrapper}>
                <Logo />
                <div className={styles.block}></div>
                    <main className={styles.container}>
                        {children}
                    </main>
                <Footer/>
                <button onClick={()=> setTheme(ThemeVariant.dark)}>Темная</button>
                <button onClick={()=> setTheme(ThemeVariant.light)}>Светлая</button>
            </div>
        </div>
    );
};

export default MainAuthWrapper;