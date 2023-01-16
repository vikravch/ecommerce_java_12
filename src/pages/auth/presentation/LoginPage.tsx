// @flow
import {SignIn} from "./SignIn";
import React from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import {SignUp} from "./SignUp";
import {RestorePassword} from "./RestorePassword";
import style from "./Loginization.module.css"

export const LoginPage = () => {
    let location = useLocation();

    const changeLink = () => {
        let linkDouble;
        switch (location.pathname) {
            case '/login/signin':
                return linkDouble = 'Sign In';
            case '/login/signup':
                return linkDouble = 'Sign up'
            case '/login/restorepassword':
                return linkDouble = 'Recovery'
            default:
                return linkDouble = '';
        }
    }

    return <div className={style.wrapper}>
        <div className={style.linkWrapper}>
            <Link className={style.styleLink} to={'/'}>Main / </Link>
            <span className={style.styleSpan}>{changeLink()}</span>
        </div>
        <Routes>
            <Route path={'signin'} element={<SignIn/>}/>
            <Route path={'signup'} element={<SignUp/>}/>
            <Route path={'restorepassword'} element={<RestorePassword/>}/>
        </Routes>
    </div>
}