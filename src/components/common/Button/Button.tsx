import React, {FC, MouseEventHandler, ReactNode} from 'react';
import {useTheme} from "../../../context/ThemeContext";

import styles from "./Button.module.css"

export enum BtnVariants {
    forIcon = "forIcon",
    forPagination = "forPagination",
    forSignInMenu = "forSignInMenu",
    forAuthForm = "forAuthForm",
}

export enum ButtonTypeProps {
    button = "button",
    submit = "submit",
    reset = "reset"
}

export interface ButtonProps {
    children: ReactNode
    id?: number
    variant?: BtnVariants
    type?: ButtonTypeProps
    clicked?: boolean
    onClick?: MouseEventHandler
    disabled?: boolean,
}

const Button: FC<ButtonProps> = (
    {
        variant = BtnVariants.forAuthForm,
        clicked = false,
        type = ButtonTypeProps.button,
        children,
        onClick = () => {},
        disabled = false
    }) => {
    const {isLightTheme, isDarkTheme} = useTheme()
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                ${variant === BtnVariants.forIcon ? styles.forIcon :
                variant === BtnVariants.forPagination && isLightTheme ? styles.forPaginationLight :
                    variant === BtnVariants.forPagination && isDarkTheme ? styles.forPagination :
                        variant === BtnVariants.forAuthForm ? styles.forAuthForm :
                            variant === BtnVariants.forSignInMenu ? styles.menuBtnSign : styles.default}`}
            type={type}>
            {children}
        </button>
    );
};

export default Button;