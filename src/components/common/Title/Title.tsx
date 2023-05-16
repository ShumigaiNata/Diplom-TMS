import React, {FC} from 'react';
import styles from "../Title/Title.module.css";

export enum TitleVariants {
    small = "small",
    big = "big"
}

export interface TitleProps {
    text: string
    variant: TitleVariants
}

const Title:FC<TitleProps> = ({text, variant}) => {
    return (
        <h3 className={`${variant === TitleVariants.big ? styles.big : styles.small}`}>{text}</h3>
    );
};

export default Title;