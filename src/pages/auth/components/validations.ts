import * as yup from "yup";

export const schemaSignUp = yup.object({
    name: yup.string().required('Enter your name').max(30, "Too long"),
    email: yup.string().required('Enter your email').email('This is not email'),
    password: yup
        .string().required('Enter your password')
        .max(30, "Too long")
        .min(6, "Too short"),
    confirmPassword: yup
        .string()
        .required('Enter your password')
        .max(30, "Too long")
        .oneOf([yup.ref('password')], 'Passwords do not match')
        .min(6, "Too short")
})

export const schemaSignIn = yup.object({
    email: yup.string().required('Enter your email').email('This is not email'),
    password: yup
        .string().required('Enter your password')
        .max(30, "Too long")
        .min(6, "Too short")
})

export const schemaRestorePassword = yup.object({
    email: yup.string().required('Enter your email').email('This is not email'),
})

//optional() - может не быть поля

