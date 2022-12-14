import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import style from "../presentation/Loginization.module.css";
import {ILoginField} from "../login.interface";

const InputEmail = () => {
       const {
        control,
        formState: {errors}
    } = useFormContext<ILoginField>();

    return (<>
            <Controller
                control={control}
                name="email"
                     render={({field}) => (
                    <div className={style.inputStyles}>
                        <input
                            onChange={(e) => field.onChange(e)}
                            value={field.value || ''}
                            placeholder={"Email"}/>
                    </div>
                )}
            />
            <> {errors.email?.message}</>
        </>
    )
};

export default InputEmail;