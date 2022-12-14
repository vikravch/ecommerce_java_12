import {FormProvider, useForm} from "react-hook-form";
import style from "./Loginization.module.css";
import {Link} from "react-router-dom";
import InputEmail from "../components/InputEmail";
import {yupResolver} from "@hookform/resolvers/yup";
import {schemaRestorePassword} from "../components/validations";

export const RestorePassword = () => {
    const methods = useForm({resolver: yupResolver(schemaRestorePassword)});
    const onSubmit = (data: any) => console.log(data);
    return (
        <div className={style.wrapperLogin}>
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