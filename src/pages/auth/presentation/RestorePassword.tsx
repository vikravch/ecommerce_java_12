import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css";
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaRestorePassword} from "../components/validations";
import {IFormData} from "../models/IFormData";
import {useAppDispatch, useAppSelector} from "../../../general/hooks/redux";
import React from "react";
import {restorePasswordAction} from "../store/actions/restorePasswordAction";

export const RestorePassword = () => {
    const dispatch = useAppDispatch();
    const{restorePasswordResponse, isLoading, errorSlice} = useAppSelector(state => state.restorePassword)
    const methods = useForm<IFormData>({resolver: yupResolver(schemaRestorePassword)});
    const onSubmit = (data: IFormData) => {
        dispatch(restorePasswordAction({email: data.email}));
    }
    return (
        <div className={style.wrapperLogin}>
            {isLoading && <h1>LOADING..............</h1>}
            {errorSlice && <h1>{errorSlice}</h1>}
            {restorePasswordResponse.error && <h1>{restorePasswordResponse.error}</h1>}
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Restore password</p>
                </div>
                <div className={style.title2}>
                    <Link className={style.link} to='../signin'>
                        <p>
                            Sign in
                        </p>
                    </Link>
                </div>
            </div>
            <FormProvider {...methods} >
                <form className={style.formStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                    <div>
                        <InputEmail/>
                    </div>
                    <div>
                        <button className={style.buttonLogin}>Send</button>
                    </div>
                </form>
            </ FormProvider>
        </div>
    )
}
