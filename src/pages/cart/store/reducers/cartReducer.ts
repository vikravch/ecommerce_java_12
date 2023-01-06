import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import img from "../../img/Purple.png";
import img1 from "../../img/BlackWithPrint.png";



export interface itemType{
    id: string,
    img: string,
    name : string[],
    price: number,
    size: string,
    quantity: number,
}

 const cart:itemType[]= [
    {
        id: '#7142',
        img: img,
        name : ['Basic t-shirt', 'Black with print'],
        price: 35,
        size: 'L/14 US',
        quantity: 1
    },

    {
        id: '#7114',
        img: img1,
        name: ['Basic t-shirt', 'Purple'],
        price: 55,
        size: 'L/14 US',
        quantity: 1
    }
]





export const cartSlice = createSlice({
    name: 'cart',
    initialState: cart,

    reducers:{
        removeItem: (state, action:PayloadAction<string>) => {
            return state.filter(({id}) => id !== action.payload)
        },
        incrementItem: (state, action:PayloadAction<string>) => {
            const item:any =  state.find((item:itemType) => item.id === action.payload)
            item.quantity++;
        },
        decrementItem: (state,action:PayloadAction<string>) => {
            const item:any = state.find((item:itemType) => item.id === action.payload)
           if(item.quantity === 1) {
              item.quantity = 1
           }else{
               item.quantity--;
           }
},

        sizeItem: (state, action:PayloadAction<string>) =>{
            const item:any = state.find((item:itemType) => item.size === action.payload)
            return item
        },
        getSubTotalPrice : (state, action:PayloadAction<number>) => {
            let totalQuantity = 0
            let totalPrice = 0
            cart.forEach((item:any) => {
                totalQuantity += item.quantity
                totalPrice += item.price * item.quantity
                return totalPrice
            })

        },
        inputQuantity: (state, action:PayloadAction<number>) =>{

           const inputQnt:any = state.filter((item:any) => item.quantity = action.payload)
   return inputQnt
    }





    }

})
export const {removeItem, incrementItem,decrementItem,getSubTotalPrice, inputQuantity} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;


