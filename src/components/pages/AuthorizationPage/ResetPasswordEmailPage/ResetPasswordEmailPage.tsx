import React, {FC} from 'react';

import {PageProps} from "../../../AppRouter/routes";
import {InputVariants} from "../../../common/Input/interfaces";
import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

const ResetPasswordEmailPage: FC<PageProps> = ({title}) => {

    const ConfigResetPasswordEmailPage = {
        message: {
            receiveAnEmail: "You will receive an email example@gmail.com with a link to reset your  password!"
        },
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
            }],
        button: {
            children: "Reset",
            disabled: false,
            type: ButtonTypeProps.reset,
            variant: BtnVariants.forAuthForm
        }
    }

    return (
        <MainAuthWrapper>
            <AuthWrapper title={title}>
                <AuthForm ConfigAuthForm={ConfigResetPasswordEmailPage}/>
            </AuthWrapper>
        </MainAuthWrapper>
    );
};

export default ResetPasswordEmailPage;