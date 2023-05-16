import React, {FC} from 'react';

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";
import {PageProps, Routes} from "../../../AppRouter/routes";
import {InputVariants} from "../../../common/Input/interfaces";

const SignInPage: FC<PageProps> = ({title}) => {

    const ConfigSignInPage = {
        inputs: [
            {
                id: "Email",
                title: "Email",
                type: "email",
                name: "Email",
                placeholder: "Your email",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput
            }, {
                id: "Password",
                title: "Password",
                type: "password",
                name: "Password",
                placeholder: "Your password",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput
            }],
        link: {
            url: Routes.resetPasswordPage,
            text: "Forgot password?"
        },
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
            <AuthForm ConfigAuthForm={ConfigSignInPage}/>
        </AuthWrapper>
    );
};

export default SignInPage;