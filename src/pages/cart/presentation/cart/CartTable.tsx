
import * as React from "react";

import s from './cartTable.module.css'
import {useDispatch, useSelector} from "react-redux";
import {
    decrementItem,
    getSubTotalPrice,
    incrementItem, inputQuantity,

    removeItem
} from "../../store/reducers/cartReducer";
import EmptyCart from "../emptyCart/EmptyCart";
import {useNavigate} from "react-router-dom";
import {useState} from "react";






export const CartTable:React.FC = () => {


    const cart = useSelector((state:any) => state.cart)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const [inputQnt, setInputQnt] = useState('')

    const getSubTotalPrice = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach((item:any) => {
            totalQuantity += item.quantity
            totalPrice += item.price * item.quantity
        })


        return totalPrice
    }

    if(cart.length === 0){
        return <EmptyCart/>

    }




    return (
        <div className='row'>
            <h1 className={s.titleCart}>Cart</h1>
        <div className='col '>
            {cart.map((item:any) =>(
            <table className="table " key={item.id}>
                <tbody>

                <tr>

                    <td className={s.img}>
                        <div>
                            <img  src={item.img} alt={'img'}/>
                        </div>

                    </td>
                    <td className={s.columnSecond}>
                        <div className={s.id}>{item.id}</div>
                        <div className={s.nameOne}>{item.name[0]}</div>
                        <div className={s.nameTwo}>{item.name[1]}</div>



                        <div>
                            <span className={s.size}>size</span>
                        </div>
                        <div >
                            <form>
                                <select className={s.select} name='size'   >
                                    <optgroup  label="women's sizes">
                                        <option  selected value={item.size}>L/14 US</option>
                                        <option value='XS/0 US'>XS/0 US</option>
                                        <option value='XS/2 US'>XS/2 US</option>
                                        <option value='M/10 US'>M/10 US</option>
                                        <option value='XL/18 US'>XL/18 US</option>
                                        <option value='2XL/22 USS'>2XL/22 US</option>
                                    </optgroup>
                                    <optgroup  label="men's sizes">
                                        <option  value='S/8 US'>S/8 US</option>
                                        <option value='M/10 US'>M/10 US</option>
                                        <option value='L/12 US'>L/12 US</option>
                                        <option value='XL/14 US'>XL/14 US</option>
                                        <option value='2XL/16 US'>2XL/16 US</option>
                                        <option value='3XL/18 US'>3XL/18 US</option>
                                    </optgroup>
                                </select>

                            </form>
                        </div>
                    </td>
                    <td className={s.columnThrid}>
                        <div className={s.titleQuantity}>
                            <span >quantity</span>
                        </div>
                        <form className={s.inputBtn}>
                        <input className={s.quantity}  type='number' name='quantity' min={1} value={item.quantity}  onChange={(e:any) => dispatch(inputQuantity(item.quantity))} />
                            <div className="btn-group-vertical" role="group">
                                <div className={s.btnUpDown}>
                                <button onClick={() => dispatch(incrementItem(item.id))} type={"button"} className={s.btnUp}><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33013 0L8.66025 6L0 6L4.33013 0Z" fill="black" fill-opacity="0.3"/>
                        </svg></button>
                           <br/>
                        <button onClick={() => dispatch(decrementItem(item.id))} className={s.btnDown} type={"button"}><svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.33003 6L-9.77039e-05 1.96571e-07L8.66016 9.53674e-07L4.33003 6Z" fill="black" fill-opacity="0.3"/>
                        </svg></button>
                            </div>
                       </div>
                        </form>
                    </td>



                    <td>
                        <div className={s.price}>${item.price}</div>
                        <div >
                            <button onClick={() => dispatch(removeItem(item.id))} className={s.remove}>Remove</button>
                        </div>
                    </td>


                </tr>



                </tbody>


            </table>
            ))}

        </div>
            <div className='col '>
            <div className={s.square}>

                <div >
                    <table className='table'>
                        <tr>
                            <td className='row'>
                                <h2 className={s.title}>Summary</h2>
                                <div>
                                    <input className={s.promoCode} placeholder='Promo Code' type='text'/>
                                    <button className={s.apply}><span className={s.wordApply}>Apply</span></button>
                                </div>
                                <div className={s.priceAndService}>
                                    <div>
                                        <span className={s.subtotal}>Subtotal <span className={s.subtotalPrice}>${getSubTotalPrice()}.00</span></span>
                                    </div>
                                    <div>
                                        <span className={s.service}>Estimated Shipping & Handling<span className={s.servicePrice}>$8.00</span></span>
                                    </div>
                                </div>
                                <hr className={s.line}/>
                                <div className={s.totalCost}>
                                    <span className={s.total}>Total<span className={s.totalPrice}>${getSubTotalPrice() || + 8}</span></span>
                                </div>
                                <hr className={s.line}/>
                                <div>
                                    <button className={s.buttonCheckout}><span className={s.checkout} onClick={() => {navigation('/cart/checkout')}}>Checkout</span></button></div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
        </div>
    );
};
