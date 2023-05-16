import React, {FC, MouseEventHandler} from 'react';
import styles from "../UserMenu/UserMenu.module.css"
import Button, {BtnVariants} from "../../../../../common/Button/Button";
import {useTheme} from "../../../../../../context/ThemeContext";

interface UserMenuProps {
    onClick: MouseEventHandler
}
const UserMenu:FC<UserMenuProps> = ({ onClick}) => {
    const {isLightTheme} = useTheme()
    return (
        <div className={`${isLightTheme ? styles.light : ""} ${styles.wrapper}`}>
                <a className={`${isLightTheme ? styles.lightItemFirst : styles.itemFirst}`}>Edit profile</a>
            <Button variant={BtnVariants.forIcon} onClick={onClick}>
                <p className={`${isLightTheme ? styles.lightItem : styles.item}`}>Log Out</p>
            </Button>
        </div>
    );
};

export default UserMenu;