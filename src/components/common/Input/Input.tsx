import React, {FC} from 'react';
import {useTheme} from "../../../context/ThemeContext";

import styles from "./Input.module.css";
import {InputProps, InputVariants, LabelFormVariant, LabelProps} from "./interfaces";

const Input: FC<InputProps & LabelProps> = (
    {
        id= "",
        title = "",
        type = "text",
        value= "",
        onChange = () => {},
        name = "",
        disabled= false,
        placeholder = "",
        error= {text: null, error: false},
        variant = InputVariants.forSearch,
        variantLabel= LabelFormVariant.forAuthFormLabel
    }) => {
    const {isLightTheme, isDarkTheme} = useTheme()

    return (
        <div className={styles.inputWrapper}>
            <label className={`${isLightTheme ? styles.lightLabel : styles.darkLabel} 
            ${styles.label} 
            ${variantLabel === LabelFormVariant.forAuthFormLabel ? styles.forAuthFormLabel:
                                  error?.error ? styles.error : styles.label}
            `} htmlFor={id}>
                {title}
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    className={`${variant === InputVariants.forSearch && isLightTheme ? styles.inputForSearchLight  :
                                  variant === InputVariants.forSearch && isDarkTheme ? styles.inputForSearch :
                                  variant === InputVariants.forTitleSort ? styles.forTitleSort :
                                  variant === InputVariants.forNumbersSort ? styles.forNumbersSort :
                                  variant === InputVariants.forNumbersSortSecond ? styles.forNumbersSortSecond :
                                  variant === InputVariants.forAuthFormInput && isLightTheme ? styles.forAuthFormInputLight :
                                  variant === InputVariants.forAuthFormInput && isDarkTheme ? styles.forAuthFormInput :
                                  error?.error ? styles.error : styles.input}`}
                    placeholder={placeholder}
                />
            </label>
            {error?.error && <p className={styles.errorMessage}>{error.text}</p>}
        </div>
    );
};

export default Input;