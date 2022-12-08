import React from 'react';
import {FacebookIcon} from "./ui/FacebookIcon";
import {InstagramIcon} from "./ui/InstagramIcon";
import {TwitterIcon} from "./ui/TwitterIcon";

const Footer = () => {
    // @ts-ignore
    return (
        <div style={{padding:'0px 100px', backgroundColor: 'black'}}>
            <div style={{padding: '50px 0px'}}>
                <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <p className={'logo'} style={{color: 'white'}}>LOGO</p>
                    </div>
                    <div className={'col'}>
                        <p className={'ftittle'}>Products</p>
                        <ul className={'fmenu'} style={{listStyle: 'none'}}>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Kids</li>
                            <li>Sale</li>
                            <li>Collections</li>
                        </ul>
                    </div>
                    <div className={'col'}>
                        <p className={'ftittle'}>Get help</p>
                        <ul className={'fmenu'} style={{listStyle: 'none'}}>
                            <li>Order status</li>
                            <li>Shipping and delevery</li>
                            <li>Returns</li>
                            <li>Paymants options</li>
                        </ul>
                    </div>
                    <div className={'col'}>
                        <p className={'ftittle'}>Legals</p>
                        <ul className={'fmenu'} style={{listStyle: 'none'}}>
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className={'col'}>
                        <p className={'ftittle'}>Contact</p>
                        <ul className={'fmenu'} style={{listStyle: 'none'}}>
                            <li>Email</li>
                            <li>ecommerce@gmail.com</li>
                            <li>Phone</li>
                            <li>972 756 555-0123</li>
                            <li>Adress</li>
                            <li>2464 Royal Ln.Mesa, New Jersey 45463</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
                <hr style={{color: 'white', margin:'0'}}/>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
                    <p style={{color: '#FFFFFF', margin: '0'}}>Tel Ran    &#169; 2022</p>
                    <div style={{display:'flex'}}>
                        <div style={{display:'flex',  height: '40px', width: '40px', borderRadius: '50%', background: "rgba(255, 255, 255, 0.2)", justifyContent: 'space-around', alignItems: 'center', margin: '1vw'}}>
                            <FacebookIcon/>
                        </div>
                        <div style={{display:'flex',  height: '40px', width: '40px', borderRadius: '50%', background: "rgba(255, 255, 255, 0.2)", justifyContent: 'space-around', alignItems: 'center', margin: '1vw'}}>
                            <InstagramIcon/>
                        </div>
                        <div style={{display:'flex',  height: '40px', width: '40px', borderRadius: '50%', background: "rgba(255, 255, 255, 0.2)", justifyContent: 'space-around', alignItems: 'center', margin: '1vw'}}>
                            <TwitterIcon/>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;