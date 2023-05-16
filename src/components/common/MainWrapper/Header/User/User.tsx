import React, {FC, MouseEventHandler, useState} from 'react';

import userIcon from "../../../../../assets/user.svg"
import userBottom from "../../../../../assets/UserBottom.svg"
import userRight from "../../../../../assets/userRight.svg"

import styles from "./User.module.css"
import {useTheme} from "../../../../../context/ThemeContext";
import Button, {BtnVariants} from "../../../../common/Button/Button";
import UserMenu from "./UserMenu/UserMenu";

interface UserProps {
    authorized: boolean
    onClick?: MouseEventHandler
    menu: boolean
}

const User:FC<UserProps> = ({authorized, onClick, menu}) => {
    // const { user } = useSelector((state: any) => state.user)
    const user = "Tanya Korshik"
    user.split(" ")
    const initials = user[0][0].toUpperCase() + user[1][0].toUpperCase()
    const {isLightTheme} = useTheme()

    return (
        <div className={styles.wrapper} onClick={onClick}>
            <div className={styles.userBlock}>
                <div className={styles.userSquare}>
                {authorized ?  <p className={styles.initials}>{`${initials}`}</p> : <img src={userIcon} alt="user" className={styles.userImg}/>}
                </div>
                <p className={`${isLightTheme ? styles.light : ""} ${styles.userName}`}>{`${authorized ? user : "Sign In"}`}</p>
                {authorized ?
                    <Button variant={BtnVariants.forIcon} onClick={onClick}>
                        <img src={userBottom} alt="arrow" className={`${menu ? styles.rotate : styles.userImg}`}/>
                    </Button> :
                    <div className={styles.link}>
                        <img src={userRight} alt="arrow" className={styles.userImg}/>
                     </div>
                   }
            </div>
            {menu && <UserMenu onClick={() => {}}/>}
        </div>
    );
};

export default User;