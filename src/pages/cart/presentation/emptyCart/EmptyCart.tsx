import React from 'react';
import s from './emptyCart.module.css'
import {useNavigate} from "react-router-dom";
const EmptyCart = () => {

    const navigation = useNavigate()

    return (
        <div className='container'>
            <div><span className={s.title}>Your cart is empty</span></div>
            <div>
                <button className={s.btn}><span onClick={() => {navigation('/')}} className={s.btnText}>Go to main page</span></button>
            </div>
            <div></div>
        </div>
    );
};

export default EmptyCart;