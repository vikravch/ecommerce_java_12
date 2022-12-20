import * as React from "react";
import {useState} from "react";
import {defaultItems} from "../data/data";
import {CartTable} from "./cart/CartTable";
import {Summary} from "./summary/Summary";
import s from './cartMainPage.module.css'
import {ItemsInfo} from "../types/index";





export const CartMainPage: React.FC = (props) => {
    const[cart, setCart] = useState<Array<ItemsInfo>>(defaultItems as Array<ItemsInfo>)

    const products = cart.map((item) => <CartTable product={item} key={item.id}/>)

    return(
        <div className={s.general}>

            <div className='container'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000'><span className={s.linkMain}>Main /</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000/cart'><span className={s.linkWishlist}> Wishlist</span></a>
                    </li>
                </ul>
                <div className='row'>
                    <h1 className={s.titleCart}>Cart</h1>
                    <div className='col  '>

                        {products}
                    </div>
                    <div className='col '> <Summary /></div>

                </div>

            </div>

        </div>
    )

};