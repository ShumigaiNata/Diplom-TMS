import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {AuthFormProps} from "../interface/interface";
import {useTheme} from "../../../../context/ThemeContext";

import Input from "../../../common/Input/Input";
import Button from "../../../common/Button/Button";

import styles from "./AuthForm.module.css";

const AuthForm: FC<AuthFormProps> = ({ConfigAuthForm}) => {

    const {isLightTheme} = useTheme()

    return (
        <form className={styles.form}>
            {!!ConfigAuthForm.message &&
                <p className={`${isLightTheme ? styles.light : styles.dark} ${styles.changePasswordMessage}`}>
                    {ConfigAuthForm.message.changePasswordMessage}
                </p>
            }

            {!!ConfigAuthForm.message?.receiveAnEmail &&
                <p className={`${isLightTheme ? styles.light : styles.dark} ${styles.receiveAnEmail}`}>
                    {ConfigAuthForm.message.receiveAnEmail}
                </p>
            }

            {!!ConfigAuthForm.inputs &&
                <div className={styles.inputs}>
                    {ConfigAuthForm.inputs.map(item => <Input {...item} key={item.id}/>)}
                </div>
            }

            {!!ConfigAuthForm.link &&
                <Link to={ConfigAuthForm.link.url} className={styles.forgot}>
                    {ConfigAuthForm.link.text}
                </Link>
            }

            {!!ConfigAuthForm.button &&
                <Button variant={ConfigAuthForm.button.variant}
                        type={ConfigAuthForm.button.type}
                        disabled={ConfigAuthForm.button.disabled}
                        children={ConfigAuthForm.button.children}/>
            }

            {!!ConfigAuthForm.onSignIn &&
                <Link to={ConfigAuthForm.onSignIn.url} className={styles.signInBtn}>
                    {ConfigAuthForm.onSignIn?.text}
                </Link>
            }

            {!!ConfigAuthForm.logIn &&
                <div className={styles.logIn}>
                    <p>
                        {ConfigAuthForm.logIn.text}
                    </p>
                    <Link to={ConfigAuthForm.logIn.url} className={styles.linkForSign}>
                        {ConfigAuthForm.logIn.linkText}
                    </Link>
                </div>
            }
        </form>
    )
};

export default AuthForm;