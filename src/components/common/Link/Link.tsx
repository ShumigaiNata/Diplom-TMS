import React, {FC, ReactNode} from 'react';
import styles from "../Link/Link.module.css"
import {NavLink} from "react-router-dom";

export interface MenuItem {
    id: number
    text: string
    icon: ReactNode
    to?: any
}

const Link:FC<MenuItem> = (props) => {

    return (
        <NavLink to={props.to} className={styles.link}>
            {props.icon}
            <p className={styles.text}>{props.text}</p>
        </NavLink>
    );
};

export default Link;