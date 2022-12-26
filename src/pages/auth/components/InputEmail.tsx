import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import style from "../presentation/Loginization.module.css";

const InputEmail:React.FC = () => {
       const {
        control,
        formState: {errors}
    } = useFormContext();

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