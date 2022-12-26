import React, {useState} from 'react';
import style from "../presentation/Loginization.module.css";
import {Controller, useFormContext} from "react-hook-form";
import {FiEye, FiEyeOff} from "react-icons/fi";


const InputPassword = () => {
    const [show, setShow] = useState(false)
    const {
        control,
        formState: {errors}
    } = useFormContext();
     return (<>
        <Controller
            control={control}
            name="password"

            render={({field}) => (<div className={style.inputStyles}>
                    <input
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ''}
                        type={show ? "text" : "password"}
                        placeholder="Password"
                    />
                    <div className={style.iconInInputPassword} onClick={() => setShow(!show)}>
                        {show && <FiEye/>}
                        {!show && <FiEyeOff/>}
                    </div>
                </div>
            )}
        />
        <> {errors.password?.message}</>
    </>);
}

export default InputPassword;