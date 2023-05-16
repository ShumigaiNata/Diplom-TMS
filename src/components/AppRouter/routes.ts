import {FC} from 'react';
import {RouteObject} from "react-router-dom";

import MainPage from "../pages/MainPage/MainPage";
import SignInPage from "../pages/AuthorizationPage/SignInPage/SignInPage";
import SignUpPage from "../pages/AuthorizationPage/SignUpPage/SignUpPage";
import ResetPasswordPage from "../pages/AuthorizationPage/ResetPasswordPage/ResetPasswordPage";
import ResetPasswordEmailPage from "../pages/AuthorizationPage/ResetPasswordEmailPage/ResetPasswordEmailPage";
import NewPasswordPage from "../pages/AuthorizationPage/NewPasswordPage/NewPasswordPage";
import ChangePasswordPage from "../pages/AuthorizationPage/ChangePasswordPage/ChangePasswordPage";

export interface PageProps {
    title?: string
}

export interface IRoute extends RouteObject{
    path: string,
    Element: FC<PageProps>,
    title?: string
}

export enum Routes {
    main = "/main",
    movie = "/main/:id",
    search = "/search",
    settings = "/main/settings",
    signIn = "/signin",
    signUp = "/signup",
    resetPasswordPage = "/reset-password",
    resetPasswordEmail = "/reset-password-email",
    newPasswordPage = "/reset-password/new-password",
    changePasswordPage = "/change-password"
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.main, Element: MainPage},
    {path: Routes.movie, Element: MainPage},
    {path: Routes.signIn, Element: SignInPage, title: "Sign In"},
    {path: Routes.signUp, Element: SignUpPage, title: "Sign Up"},
    {path: Routes.resetPasswordPage, Element: ResetPasswordPage, title: "Reset password"},
    {path: Routes.resetPasswordEmail, Element: ResetPasswordEmailPage, title: "Reset password"},
    {path: Routes.newPasswordPage, Element: NewPasswordPage, title: "New password"},
    {path: Routes.changePasswordPage, Element: ChangePasswordPage, title: "Sign In"}
]

// export const PRIVATE_ROUTES: IRoute[] = [
//     ...PUBLIC_ROUTES,
//     {path: Routes.addPost, Element: AddPostPage, title: "Add Post"},
//     {path: Routes.editPost, Element: EditPostPage, title: "Edit Post"},
// ]