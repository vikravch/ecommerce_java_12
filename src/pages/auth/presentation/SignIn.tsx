import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSignIn} from "../components/validations";
import {useDispatch} from "react-redux";
import {login} from "../store/authReducer";
import {IFormData} from "../models/formData";

export const SignIn = () => {
    const dispatch = useDispatch();

    const methods = useForm<IFormData>({resolver: yupResolver(schemaSignIn)});

    const onSubmit = (data: IFormData) => {

        // @ts-ignore
        dispatch(login(data.email, data.password))
        console.log(data.email)
    };
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className={style.wrapperLogin}>
            <div className={style.titleContainer}>
                <div className={style.title1}>
                    <p>Sign In</p>
                </div>
                <div className={style.title2}>
                    <p>
                        Don’t have an account?
                    </p>
                </div>
                <div className={style.title2}>
                    <Link className={style.link} to='../signup'>
                        <p>
                            Sign up
                        </p>
                    </Link>
                </div>
            </div>
            <FormProvider {...methods} >
                <form className={style.formStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                    <InputEmail/>
                    <InputPassword/>
                    <button className={style.buttonLogin}>Login</button>
                </form>
            </FormProvider>

            <div>
                <Link className={style.linkBottom} to={'../restorepassword'}>
                    <p>
                        Lost your password?
                    </p>
                </Link>
            </div>
        </div>
    )
}