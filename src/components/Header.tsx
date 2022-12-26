import React from 'react';
// @ts-ignore
import search from '../assets/Navigation Menu/VectorGlass.png';
import {AccountIcon} from '../components/ui/AccountIcon';
import {CartIcon} from "./ui/CartIcon";
import $ from "jquery";

interface Props
{
    changetheme: any
}

function Category() {
    return (
        <div className={'slideDown'} style={{position: "absolute", display: "flex", listStyle: 'none', backgroundColor: "white", zIndex: '1', width: '100%'}}>
            <div>
                <h1>Selected Category?</h1>
                <ul style={{listStyle: 'none'}}>
                    <li>All</li>
                    <li>Collections</li>
                    <li>Coats & Jackets</li>
                    <li>Dresses</li>
                    <li>Pants</li>
                    <li>Jumpsuits & Rompers</li>
                    <li>Shorts</li>
                    <li>Skirts</li>
                    <li>Sweater</li>
                    <li>Swimwear</li>
                    <li>Tops</li>
                    <li>Shoes</li>
                </ul>
            </div>
            <div>
                <h1>Collections</h1>
                <ul style={{listStyle: 'none'}}>
                    <li>Our Favorites</li>
                    <li>New Arrivals</li>
                    <li>New Collections</li>
                    <li>Brands</li>
                    <li>Trends</li>
                    <li>New Names at Neiman's</li>
                    <li>Luxe Essentials</li>
                    <li>Exclusives</li>
                </ul>
            </div>
            <div>
                <h1>Brands</h1>
                <ul style={{listStyle: 'none'}}>
                    <li>Akris</li>
                    <li>Alice + Olivia</li>
                    <li>Brunello Cucinelli</li>
                    <li>CHANEL</li>
                    <li>Dolce & Gabbana</li>
                    <li>Eileen Fisher</li>
                    <li>Giorgio Armani</li>
                    <li>Gucci</li>
                    <li>Johnny Was</li>
                    <li>Lafayette 148 New York</li>
                    <li>Theory</li>
                </ul>
            </div>

        </div>
    );
}

const Header: React.FC<Props> = (props) => {

    // @ts-ignore
    return (
        <div>
        <div className={'header'} style={props.changetheme.theme}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '2vw'}}>
            <p className={'logo'}>LOGO</p>
            <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', margin: '0', padding: '0'}}>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Men</li>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Women</li>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Kids</li>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Sale</li>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Collections</li>
                <li className={props.changetheme.onhover} onMouseOver={(e) => console.log(e.currentTarget.textContent)}>Blog</li>
            </ul>
            </div>
            <div style={{flexGrow: '1'}}></div>
            <div style={{display: 'flex', alignItems: 'center', marginRight: '2vw'}}>
                <input className={props.changetheme.theme.color == 'white'? 'search': 'searchWhite'} type="text" placeholder="Search" />
                <div style={{paddingLeft: '1vw'}}>
                    <CartIcon fill={props.changetheme.svg_color}/>
                </div>
                    <div style={{paddingLeft: '1vw'}}>
                <AccountIcon fill={props.changetheme.svg_color}/>
                </div>
            </div>
        </div>


            <Category/>


        </div>
    );
};

export default Header;