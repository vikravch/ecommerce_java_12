import React from 'react';
import style from "../../../../../../project/ecommerce_java_12/src/pages/auth/presentation/Loginization.module.css";
import {Controller, useFormContext} from "react-hook-form";

const InputName = () => {
    const {
        control,
        formState: {errors}
    } = useFormContext();

    return (<>
        <Controller
            control={control}
            name="name"
            render={({field}) => (
                <div className={style.inputStyles}>
                    <input
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ''}
                        placeholder={"Name"}/>
                </div>
            )}
        />
        <> {errors.name?.message}</>
    </>);
};

export default InputName;