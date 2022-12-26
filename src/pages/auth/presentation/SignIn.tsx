import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSignIn} from "../components/validations";
import {IFormData} from "../models/IFormData";
import {useAppDispatch, useAppSelector} from "../../../general/hooks/redux";
import {signInAction} from "../store/actions/signInAction";


export const SignIn = () => {
    const dispatch = useAppDispatch();
    const {loginResponse, isLoading, errorSlice} = useAppSelector(state => state.signIn)
    const methods = useForm<IFormData>({resolver: yupResolver(schemaSignIn)});
    const onSubmit = (data: IFormData) => {
        dispatch(signInAction({email: data.email, password: data.password}))

    };
    if (localStorage.getItem('token')) {
        console.log('redirect profile')
    } else {
        console.log('redirect SIGNUP')
    }

    return (
        <div className={style.wrapperLogin}>
            {isLoading && <h1>LOADING..............</h1>}
            {errorSlice && <h1>{errorSlice}</h1>}
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
