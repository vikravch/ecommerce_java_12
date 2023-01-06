import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface typeUser{
    firstName: string,
    secondName: string,
    email: string|number,
}

const initialState:typeUser = {
    firstName: '',
    secondName: '',
    email: '',
}



export const checkoutSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        firstName: (state, action:PayloadAction<string>) => {
             state.firstName = action.payload;
        }
    }
})

export const {firstName} = checkoutSlice.actions
export const checkoutReducer = checkoutSlice.reducer