import React, {FC} from 'react';

import {PageProps} from "../../../AppRouter/routes";
import {InputVariants} from "../../../common/Input/interfaces";
import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";

import AuthForm from "../AuthForm/AuthForm";
import AuthWrapper from "../../../common/AuthWrapper/AuthWrapper";

const ResetPasswordPage: FC<PageProps> = ({title}) => {

    const ConfigResetPasswordPage = {
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
        <AuthWrapper title={title}>
            <AuthForm ConfigAuthForm={ConfigResetPasswordPage}/>
        </AuthWrapper>
    );
};

export default ResetPasswordPage;