import React, {FC} from 'react';

import styles from "./Logo.module.css";

import imgLogo from "../../../../assets/pixema.png";

const Logo: FC = () => {
    return (
        <div className={styles.logo}>
            <img className={styles.img} src={imgLogo} alt="imgLogo"/>
        </div>
    );
};

export default Logo;