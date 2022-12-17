import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputName from "../components/InputName";
import InputPassword from "../components/InputPassword";
import InputConfirmPassword from "../components/InputConfirmPassword";
import InputEmail from "../components/InputEmail";
import React from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSignUp} from "../components/validations";
import {IFormData} from "../models/formData";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {registrationCreator} from "../store/actionCreators/regCreator";


export const SignUp = () => {
    const dispatch = useAppDispatch();
    const {error, isLoading} = useAppSelector(state => state.registration)

    const methods = useForm<IFormData>({resolver: yupResolver(schemaSignUp)});
    const onSubmit = (data: IFormData) => {
        // @ts-ignore
        dispatch(registrationCreator(data.name,data.email, data.password, ))
    };
    return (
        <div className={style.wrapperLogin}>
            {isLoading && <h1>LOADING..............</h1>}
            {error && <h1>{error}</h1>}
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Sign Up</p>
                </div>
                <div className={style.title2}>
                    <p>
                        Already have an account?
                    </p>
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
                    <InputName/>
                    <InputEmail/>
                    <InputPassword/>
                    <InputConfirmPassword/>

                    <div>
                        <button className={style.buttonLogin}>Sign up</button>
                    </div>

                </form>
            </FormProvider>
            <div className={style.signUpTextBottom}>
                <p>
                    By signing in to your account you agree with our
                </p>
                <p>
                    <span className={style.signUpTextBottomSpan}> Privacy Policy</span>
                    and <span className={style.signUpTextBottomSpan}>Terms of Use</span>.
                </p>
            </div>
        </div>
    )
}


