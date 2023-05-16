import React, {FC} from 'react';

import {PageProps, Routes} from "../../../AppRouter/routes";
import {InputVariants} from "../../../common/Input/interfaces";
import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

const SignUpPage: FC<PageProps> = ({title}) => {

    const ConfigSignUpPage = {
        inputs: [
            {
                id: "Name",
                title: "Name",
                type: "text",
                name: "Name",
                placeholder: "Your name",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput
            }, {
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
            }, {
                id: "confirmPassword",
                title: "Confirm password",
                type: "password",
                name: "ConfirmPassword",
                placeholder: "Confirm your password",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput
            }
        ],
        button: {
            children: "Sign Up",
            disabled: false,
            type: ButtonTypeProps.button,
            variant: BtnVariants.forAuthForm
        },
        logIn: {
            url: Routes.signIn,
            text: "Already have an account?",
            linkText: "Sign In"
        }
    }

    return (
        <AuthWrapper title={title}>
            <AuthForm ConfigAuthForm={ConfigSignUpPage}/>
        </AuthWrapper>
    );
};

export default SignUpPage;