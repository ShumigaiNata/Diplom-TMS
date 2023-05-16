import React, {FC} from 'react';

import {PageProps, Routes} from "../../../AppRouter/routes";
import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";
import {InputVariants, LabelFormVariant} from "../../../common/Input/interfaces";

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

const ChangePasswordPage:FC<PageProps> = ({title}) => {

    const ConfigChangePasswordPage = {
        message: {
            changePasswordMessage: `Your password has been changed !`
        },
        inputs: [
            {
                id: "Email",
                title: "Email",
                type: "email",
                name: "Email",
                value: "",
                onChange: "",
                placeholder: "Your email",
                disabled: false,
                variant: InputVariants.forAuthFormInput,
                variantLabel: LabelFormVariant.forAuthFormLabel
            }, {
                id: "Password",
                title: "Password",
                type: "password",
                name: "Password",
                placeholder: "Your password",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput,
                variantLabel: LabelFormVariant.forAuthFormLabel
            }
        ],
        link: {
            url: Routes.resetPasswordPage,
            text: "Forgot password?"
        } ,
        button: {
            children: "Sign In",
            disabled: false,
            type: ButtonTypeProps.button,
            variant: BtnVariants.forAuthForm
        },
        logIn: {
            url: Routes.signUp,
            text: "Don’t have an account?",
            linkText: "Sign Up"
        }
    }

    return (
        <AuthWrapper title={title}>
            <AuthForm ConfigAuthForm={ConfigChangePasswordPage}/>
        </AuthWrapper>
    );
};

export default ChangePasswordPage;
