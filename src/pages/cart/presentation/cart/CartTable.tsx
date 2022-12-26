
import * as React from "react";
import {ItemsInfo} from "../../types/index";
import s from './cartTable.module.css'
interface Props{
    product:ItemsInfo
}


export const CartTable = (props:Props) => {
// const EmptyCart =
//     (
//         <div className={s.emptyCart}>Your cart is empty</div>
//     )
    return (

        <div >

            <table className="table " key={props.product.id}>
                <tbody>

                <tr>

                    <td className={s.img}>
                        <div>
                            <img  src={props.product.img} alt={'img'}/>
                        </div>

                    </td>
                    <td className={s.columnSecond}>
                        <div className={s.id}>{props.product.id}</div>
                        <div className={s.nameOne}>{props.product.name[0]}</div>
                        <div className={s.nameTwo}>{props.product.name[1]}</div>



                        <div>
                            <span className={s.size}>size</span>
                        </div>
                        <div >
                            <form>
                                <select className={s.select} name='size'   >
                                    <optgroup  label="women's sizes">
                                        <option  selected value={props.product.size}>L/14 US</option>
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
                        <input className={s.quantity}  type='number' name='quantity' min={1} value={props.product.quantity}  />

                    </td>



                    <td>
                        <div className={s.price}>${props.product.price}</div>
                        <div >
                            <button className={s.remove}>Remove</button>
                        </div>
                    </td>


                </tr>


                </tbody>


            </table>


        </div>

    );
};
