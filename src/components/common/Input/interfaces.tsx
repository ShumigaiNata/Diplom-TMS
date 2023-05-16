import {FormEventHandler, MouseEventHandler} from "react";
import {
    buttonProps,
    onSignInProps,
    linksProps,
    messageProps,
    logInProps
} from "../../pages/AuthorizationPage/interface/interface";

export enum InputVariants {
    forSearch = "forSearch",
    forTitleSort = "forTitleSort",
    forNumbersSort = "forNumbersSort",
    forNumbersSortSecond = "forNumbersSortSecond",
}

export enum LabelFormVariant {
    forAuthFormLabel = "forAuthFormLabel"
}

export interface LabelProps {
    variantLabel?: LabelFormVariant
}

export interface InputError {
    text: string | null
    error: boolean
}

export interface InputProps {
    value: string | number
    onChange: any
    id: string
    title?: string
    onClick?: MouseEventHandler
    onSubmit?: FormEventHandler
    disabled?: boolean
    placeholder?: string
    type?: string
    name?: string
    error?: InputError
    required?: boolean
    filter?: boolean
    variant?: InputVariants
}

export interface FormConfigProps {
    inputs?: InputProps[]
    button?: buttonProps
    message?: messageProps
    logIn?: logInProps
    link?: linksProps
    onSignIn?: onSignInProps
    error?: InputError
}