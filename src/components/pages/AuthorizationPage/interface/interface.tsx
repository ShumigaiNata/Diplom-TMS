import {BtnVariants, ButtonTypeProps} from "../../../common/Button/Button";
import {FormConfigProps} from "../../../common/Input/interfaces";

export interface logInProps {
    url: string
    text: string
    linkText: string
}

export interface messageProps {
    receiveAnEmail?: string
    changePasswordMessage?: string
}

export interface linksProps {
    url: any
    text: string
}

export interface buttonProps {
    children: string,
    disabled?: boolean,
    variant: BtnVariants,
    type?: ButtonTypeProps
}

export interface onSignInProps {
    url: string
    text: string
}

export interface AuthFormProps {
    ConfigAuthForm: FormConfigProps
}

