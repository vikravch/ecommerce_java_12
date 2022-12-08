import React from 'react';
// @ts-ignore
import search from '../assets/Navigation Menu/VectorGlass.png';
import {AccountIcon} from '../components/ui/AccountIcon';
import {CartIcon} from "./ui/CartIcon";

interface Props
{
    changetheme: any
}

const Header: React.FC<Props> = (props) => {

    return (
        <div>
        <div className={'header'} style={props.changetheme.theme}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '2vw'}}>
            <p className={'logo'}>LOGO</p>
            <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', margin: '0', padding: '0'}}>
                <li className={props.changetheme.onhover}>Men</li>
                <li className={props.changetheme.onhover}>Women</li>
                <li className={props.changetheme.onhover}>Kids</li>
                <li className={props.changetheme.onhover}>Sale</li>
                <li className={props.changetheme.onhover}>Collections</li>
                <li className={props.changetheme.onhover}>Blog</li>
            </ul>
            </div>
            <div style={{flexGrow: '1'}}></div>
            <div style={{display: 'flex', alignItems: 'center', marginRight: '2vw'}}>
                <input className={'search'} style={props.changetheme.search} type="text" placeholder="Search" />
                <div style={{paddingLeft: '1vw'}}>
                    <CartIcon fill={props.changetheme.svg_color}/>
                </div>
                    <div style={{paddingLeft: '1vw'}}>
                <AccountIcon fill={props.changetheme.svg_color}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;