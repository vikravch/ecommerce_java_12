import {authAPI} from "../services/AuthService";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    email: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (email: any, password: any, isAuth: boolean) => ({
    type: SET_USER_DATA, payload:
        {email, password, isAuth}
});

export const login = (email: any, password: any) =>
    async (dispatch: (arg0: { type: string; payload: { email: any; password: any; }; }) => void) => {
        // @ts-ignore
        try {
            const response = await authAPI.login(email, password);
            console.log(response.data);
            console.log(response.data.user);
            localStorage.setItem('token', response.data.accesssToken);
            dispatch(setAuthUserData(email, password, true));
        } catch (e) {


            // @ts-ignore
            console.log(e.response?.data?.message)
        }
    }

export const registration = (email: any, password: any) => async (dispatch: (arg0: { type: string; payload: { email: any; password: any; }; }) => void) => {
    // @ts-ignore
    try {
        const response = await authAPI.login(email, password);
        console.log(response.data);
        console.log(response);
        localStorage.setItem('token', response.data.accesssToken);
        dispatch(setAuthUserData(email, password, true));
    } catch (e) {
        // @ts-ignore
        console.log(e.response?.data?.message)
    }
}

// @ts-ignore
export default authReducer;