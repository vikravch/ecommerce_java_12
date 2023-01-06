import * as React from "react";

import {CartTable} from "./cart/CartTable";

import s from './cartMainPage.module.css'
import {Route, Routes} from "react-router-dom";
import {MainPage} from "../../main_page/presentation/MainPage";











export const CartMainPage: React.FC = (props) => {

    return(
        <div className={s.general}>

            <div className='container'>

                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000'><span className={s.linkMain}>Main /</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000/cart'><span className={s.linkWishlist}>Cart </span></a>
                    </li>

                </ul>
                       <CartTable/>

            </div>

        </div>
    )

};