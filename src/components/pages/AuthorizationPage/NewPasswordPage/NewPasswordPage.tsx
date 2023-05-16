import React, {FC} from 'react';

import {PageProps} from "../../../AppRouter/routes";
import {InputVariants} from "../../../common/Input/interfaces";
import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

const NewPasswordPage: FC<PageProps> = ({title}) => {

    const ConfigNewPasswordPage = {
        inputs: [
            {
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
                id: "Confirm",
                title: "Confirm password",
                type: "password",
                name: "Confirm password",
                placeholder: "Confirm password",
                value: "",
                onChange: "",
                disabled: false,
                variant: InputVariants.forAuthFormInput
            }],
        button: {
            children: "Set password",
            disabled: false,
            type: ButtonTypeProps.submit,
            variant: BtnVariants.forAuthForm
        }
    }

    return (
        <AuthWrapper title={title}>
            <AuthForm ConfigAuthForm={ConfigNewPasswordPage}/>
        </AuthWrapper>
    );
};

export default NewPasswordPage;