import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css"
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import InputPassword from "../components/InputPassword";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaSignIn} from "../components/validations";
import {useDispatch} from "react-redux";
import {login} from "../../../../../../project/ecommerce_java_12/src/pages/auth/store/authReducer";

export const SignIn = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const {methods, setError, formState: { errors }}  = useForm({resolver: yupResolver(schemaSignIn)});

    const onSubmit = (data: any) => {
        // @ts-ignore
        dispatch(login(data.email, data.password, setError))
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
            {errors.server && <div style={{ color: 'red' }}>{errors.server.message}</div>}
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