import React, {FC} from 'react';
import {InputProps} from "../interfaces";
import styles from "../RadioInput/RadioInput.module.css"

const RadioInput:FC<InputProps> = (props) => {
    return (
        <div className={styles.radioWrapper}>
            <input {...props}/>
            <label htmlFor={props.id}>{props.title}</label>
        </div>
    );
};

export default RadioInput;