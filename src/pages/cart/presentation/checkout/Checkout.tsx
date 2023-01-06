import React, {useState} from 'react';
import {defaultItems} from '../../data/data';
import s from './checkout.module.css'
import {useDispatch, useSelector} from "react-redux";
import {firstName} from "../../store/reducers/checkoutReducer";





export const Checkout:React.FC = () => {

    const dispatch = useDispatch()
    const text = useSelector((state:any )=> state.firstName)


    return (
        <div>

            <div className='container'>
                <ul className='nav'>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000'><span className={s.linkMain}>Main /</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000/cart'><span className={s.linkMain}>Cart /</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='http://localhost:3000/cart/checkout'><span className={s.linkWishlist}>Checkout </span></a>
                    </li>
                </ul>
                <div className='row'>

                    <div className= 'col '>

                        <div className={s.goods}>
                            <div >
                                <h2 className={s.goodsTitle}>Goods</h2>
                                {defaultItems.map(item =>
                                    (<div key={item.id} className='table' >


                                        <tbody >

                                        <tr >

                                            <td >
                                                <div>
                                                    <img className={s.clothes} src={item.img} alt={'img'}/>
                                                </div>

                                            </td>
                                            <td >
                                                <div className={s.id}>{item.id}</div>
                                                <div className={s.nameOne}>{item.name[0]}</div>
                                                <div className={s.color}><span className={s.nameTwo}>Color:</span> {item.name[1]}</div>
                                                <div className={s.sizeItem}>
                                                    <span className={s.size}>Size:</span> {item.size}
                                                </div>

                                                <div className={s.quantityItem} >
                                                    <span className={s.quantity}>quantity:</span> {item.quantity}
                                                </div>
                                                <div className={s.price}>${item.price}</div>


                                            </td>

                                        </tr>



                                        </tbody>


                                    </div>))}


                            </div>

                        </div>


                        <div className={s.summary}>
                            <div >
                                <h2 className={s.title}>Summary</h2>

                                <div className={s.priceAndService}>
                                    <div>
                                        <span className={s.textSummary}>Subtotal <span className={s.subTotalPrice}>$90.00</span></span>
                                    </div>
                                    <div>
                                        <span className={s.textSummary}>Estimated Shipping & Handling<span className={s.service}>$8.00</span></span>
                                    </div>
                                    <div>
                                        <span className={s.textPromocode}>Promocode<span className={s.promocode}>$50.00</span></span>

                                    </div>
                                </div>
                                <hr className={s.line}/>
                                <div className={s.totalCost}>
                                    <span className={s.total}>Total<span className={s.totalPrice}>$98.00</span></span>

                                </div>
                            </div>

                        </div>
                    </div>



                    <div className='col '>
                        <div className={s.contacts}>
                            <div className='container'>
                                <table className='table'>
                                    <tr>
                                        <td><h3 className={s.contactsTitle}>Contact</h3></td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-6'><p className={s.generalText}>First name {text}</p>
                                            <input  className={s.inputItem} type='text' name='first name' onChange={(e) => {
                                                dispatch(firstName(e.target.value))
                                            }} /></td>
                                        <td className='col col-md-6'><p className={s.generalText}>Second name</p>
                                            <input className={s.inputItem} type='text' name='second name'/></td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-6'><p className={s.generalText}>Email</p>
                                            <input className={s.inputItem} type='email' name='email'/></td>
                                        <td className='col col-md-6'><p className={s.generalText}>Phone number</p>
                                            <input className={s.inputItem} type='tel' name='phone number'/></td>
                                    </tr>
                                    <tr>
                                        <td><h3 className={s.addressTitle}>Address</h3></td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-6'><p className={s.generalText}>Country</p>
                                            <input className={s.inputItem} type='text' name='country'/>
                                        </td>
                                        <td className='col col-md-6'><p className={s.generalText}>Zip code</p>
                                            <input className={s.inputItem} type='number' name='zip code' placeholder='_ _ _ – _ _ _'/></td>
                                    </tr>
                                    <tr>
                                        <td><span className={s.generalText}>Shipping method</span></td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-6'>
                                            <label ><input type='radio' value={'Standart'} /><span className={s.shippingPrice}> free, 10 – 14 days</span></label>
                                        </td>
                                        <td className='col col-md-6'>
                                            <label><input type='radio' value={'Premium'}/><span className={s.shippingPrice}> $10, 1 – 3 days</span></label>
                                        </td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-6'><p className={s.generalText}>Address</p></td>
                                        <td className='col col-md-6'><a  className={s.map} href='#'><span className={s.chooseMap}>Choose on map</span></a></td>
                                    </tr>
                                    <tr className='row'>
                                        <td className='col col-md-12'><input className={s.inputAddressAndWishes} type='text' name='address' placeholder='Thornridge Cir. Syracuse, Connecticut, 21'/></td>


                                        <td className='col col-md-12'><p className={s.generalText}>Wishes</p><input className={s.inputAddressAndWishes} type='text' name='wishes' placeholder='Type your wishes'/></td>

                                    </tr>
                                    <tr>
                                        <td><h3 className={s.paymentTitle}>Payment</h3></td>
                                    </tr>
                                    <tr>
                                        <td><p className={s.generalText}>Payment method</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <button className={s.paymentButton}>
                                                <svg width="50" height="17" viewBox="0 0 50 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1328 16.3772H8.8922L5.71223 3.99274C5.5613 3.42305 5.24082 2.91942 4.76941 2.68205C3.59295 2.08553 2.29656 1.61079 0.882324 1.37136V0.894554H7.71367C8.65649 0.894554 9.36361 1.61079 9.48146 2.44262L11.1314 11.376L15.37 0.894554H19.4928L13.1328 16.3772ZM21.8498 16.3772H17.8449L21.1427 0.894554H25.1477L21.8498 16.3772ZM30.3291 5.18372C30.4469 4.34984 31.154 3.87303 31.979 3.87303C33.2754 3.75332 34.6876 3.99275 35.8661 4.5872L36.5732 1.25371C35.3947 0.776909 34.0983 0.537476 32.9218 0.537476C29.0347 0.537476 26.2063 2.68206 26.2063 5.65846C26.2063 7.92276 28.2098 9.11167 29.624 9.82791C31.154 10.5421 31.7433 11.0189 31.6254 11.7331C31.6254 12.8043 30.4469 13.2811 29.2705 13.2811C27.8562 13.2811 26.442 12.924 25.1477 12.3275L24.4405 15.6631C25.8548 16.2575 27.3848 16.497 28.799 16.497C33.1575 16.6146 35.8661 14.4721 35.8661 11.2563C35.8661 7.20653 30.3291 6.96916 30.3291 5.18372ZM49.8823 16.3772L46.7024 0.894554H43.2867C42.5796 0.894554 41.8724 1.37136 41.6367 2.08553L35.7482 16.3772H39.871L40.6939 14.115H45.7595L46.2309 16.3772H49.8823ZM43.876 5.06402L45.0524 10.8992H41.7546L43.876 5.06402Z" fill="#172B85"/>
                                                </svg>
                                            </button>
                                            <button className={s.paymentButton}>
                                                <svg width="47" height="28" viewBox="0 0 47 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3686 24.3601C20.9308 26.3978 17.7686 27.6279 14.3133 27.6279C6.60324 27.6279 0.353027 21.5035 0.353027 13.9487C0.353027 6.3939 6.60324 0.269531 14.3133 0.269531C17.7686 0.269531 20.9308 1.49963 23.3686 3.5373C25.8063 1.49963 28.9685 0.269531 32.4239 0.269531C40.1339 0.269531 46.3841 6.3939 46.3841 13.9487C46.3841 21.5035 40.1339 27.6279 32.4239 27.6279C28.9685 27.6279 25.8063 26.3978 23.3686 24.3601Z" fill="#ED0006"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3687 24.3601C26.3703 21.8511 28.2736 18.1177 28.2736 13.9487C28.2736 9.7797 26.3703 6.0463 23.3687 3.53729C25.8064 1.49962 28.9686 0.269531 32.4239 0.269531C40.134 0.269531 46.3842 6.3939 46.3842 13.9487C46.3842 21.5035 40.134 27.6279 32.4239 27.6279C28.9686 27.6279 25.8064 26.3978 23.3687 24.3601Z" fill="#F9A000"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.3688 24.36C26.3704 21.851 28.2736 18.1177 28.2736 13.9487C28.2736 9.77974 26.3704 6.04636 23.3688 3.53735C20.3672 6.04636 18.4639 9.77974 18.4639 13.9487C18.4639 18.1177 20.3672 21.851 23.3688 24.36Z" fill="#FF5E00"/>
                                                </svg>
                                            </button>
                                            <button className={s.paymentButton}>
                                                <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08767 26.6652L7.5421 23.7066L6.52979 23.6824H1.6958L5.05525 1.84959C5.06572 1.78348 5.09955 1.72211 5.14896 1.67845C5.19861 1.63479 5.2619 1.61084 5.3281 1.61084H13.4789C16.1851 1.61084 18.0525 2.18789 19.0273 3.32702C19.4844 3.86141 19.7755 4.41999 19.9165 5.03447C20.0642 5.67937 20.0666 6.44977 19.9226 7.38956L19.9121 7.45792V8.06017L20.3692 8.32562C20.754 8.53493 21.06 8.77443 21.2946 9.04861C21.6855 9.50566 21.9384 10.0865 22.0453 10.7748C22.1558 11.4828 22.1193 12.3255 21.9384 13.2796C21.7298 14.3768 21.3927 15.3325 20.9373 16.1144C20.5186 16.8349 19.9851 17.4327 19.3515 17.8957C18.7467 18.3358 18.0281 18.6698 17.2157 18.8836C16.4283 19.0937 15.5306 19.1997 14.546 19.1997H13.9117C13.4583 19.1997 13.0177 19.3671 12.6718 19.6673C12.325 19.9736 12.0957 20.3923 12.0253 20.8501L11.9774 21.1165L11.1744 26.3314L11.1381 26.5227C11.1284 26.5834 11.1118 26.6136 11.0875 26.634C11.0658 26.6527 11.0347 26.6652 11.0043 26.6652H7.08767Z" fill="#28356A"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8028 7.52747C20.7787 7.68688 20.7507 7.84979 20.7195 8.0172C19.6446 13.6739 15.9671 15.6281 11.2704 15.6281H8.87892C8.30449 15.6281 7.82036 16.0555 7.73103 16.6363L6.15986 26.8512C6.10169 27.2327 6.38842 27.5762 6.76375 27.5762H11.0053C11.5074 27.5762 11.9341 27.2023 12.0132 26.6946L12.0548 26.4738L12.8535 21.2793L12.9048 20.9944C12.9829 20.485 13.4106 20.1108 13.9127 20.1108H14.5471C18.6564 20.1108 21.8735 18.4008 22.8138 13.4521C23.2064 11.3849 23.0031 9.65878 21.9638 8.44481C21.6493 8.07882 21.2591 7.77495 20.8028 7.52747Z" fill="#298FC2"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6774 7.06791C19.5131 7.01876 19.3437 6.97436 19.1699 6.93419C18.9952 6.89502 18.8163 6.86034 18.632 6.82991C17.9872 6.72313 17.2806 6.67249 16.5239 6.67249H10.1353C9.97781 6.67249 9.82836 6.70891 9.69473 6.77477C9.39997 6.91997 9.18115 7.20587 9.12809 7.5559L7.76892 16.379L7.72998 16.6362C7.81931 16.0555 8.30344 15.6281 8.87787 15.6281H11.2693C15.966 15.6281 19.6436 13.6729 20.7185 8.01719C20.7506 7.84978 20.7776 7.68687 20.8017 7.52746C20.5298 7.37951 20.2353 7.25303 19.9182 7.14525C19.8398 7.11856 19.759 7.09286 19.6774 7.06791Z" fill="#22284F"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.12867 7.55596C9.18173 7.20594 9.40055 6.92003 9.69531 6.77583C9.82991 6.70972 9.97839 6.6733 10.1359 6.6733H16.5245C17.2812 6.6733 17.9878 6.72419 18.6326 6.83097C18.8168 6.86116 18.9957 6.89608 19.1705 6.93525C19.3443 6.97517 19.5137 7.01982 19.678 7.06872C19.7595 7.09367 19.8404 7.11962 19.9195 7.14531C20.2366 7.25309 20.5314 7.38057 20.8033 7.52752C21.1231 5.43712 20.8006 4.01383 19.698 2.72501C18.4822 1.30597 16.2881 0.69873 13.4805 0.69873H5.32939C4.75593 0.69873 4.26669 1.12609 4.17809 1.70788L0.783103 23.7652C0.716167 24.2016 1.04452 24.5952 1.47388 24.5952H6.506L9.12867 7.55596Z" fill="#28356A"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className={s.generalText}>Card info</p>

                                            <input className={s.cartVisaMastercart} placeholder={'0000 0000 0000 0000  |  MM / YY  CVV'}/>
                                        </td>
                                    </tr>
                                    <div className={s.buttonPurchase}>
                                        <button className='btn btn-primary'>Purchase for $248</button>
                                    </div>
                                </table>

                            </div>
                        </div>
                    </div>









                </div>

            </div>

        </div>
    );
};