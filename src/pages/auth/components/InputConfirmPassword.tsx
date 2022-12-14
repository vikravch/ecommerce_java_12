import React, {useState} from 'react';
import style from "../presentation/Loginization.module.css";
import {Controller, Field, useForm, useFormContext} from "react-hook-form";
import {FiEye, FiEyeOff} from "react-icons/fi";


// @ts-ignore
const InputConfirmPassword = (props) => {
    const [show, setShow] = useState(false)
    const {
        control,
        formState: {errors}
    } = useFormContext();

    // @ts-ignore
    return (<>
        <Controller
            control={control}
            name="confirmPassword"

            render={({field}) => (<div className={style.inputStyles}>
                    <input
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ''}
                        type={show ? "text" : "password"}
                        placeholder="confirmPassword"

                     
                    />
                    <div className={style.iconInInputPassword} onClick={() => setShow(!show)}>
                        {show && <FiEye/>}
                        {!show && <FiEyeOff/>}
                    </div>
                </div>
            )}
        />
        <> {errors.confirmPassword?.message}</>
    </>);
}

export default InputConfirmPassword;