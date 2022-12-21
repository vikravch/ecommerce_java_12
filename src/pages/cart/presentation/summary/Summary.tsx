import React from 'react';
import s from './summary.module.css';


export const Summary: React.FC = (props) => {




    return (
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
                                    <span className={s.subtotal}>Subtotal <span className={s.subtotalPrice}>$90.00</span></span>
                                </div>
                                <div>
                                    <span className={s.service}>Estimated Shipping & Handling<span className={s.servicePrice}>$8.00</span></span>
                                </div>
                            </div>
                            <hr className={s.line}/>
                            <div className={s.totalCost}>
                                <span className={s.total}>Total<span className={s.totalPrice}>$98.00</span></span>
                            </div>
                            <hr className={s.line}/>
                            <div>
                            <button className={s.buttonCheckout}><span className={s.checkout}><a className='nav-link' href={'http://localhost:3000/cart/checkout'}>Checkout</a></span></button></div>
                        </td>
                    </tr>
                </table>
            </div>

        </div>
    );
};
