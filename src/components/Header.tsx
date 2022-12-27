import React, {useEffect, useState} from 'react';
// @ts-ignore
import search from '../assets/Navigation Menu/VectorGlass.png';
import {AccountIcon} from '../components/ui/AccountIcon';
import Category from './Category';
import {CartIcon} from "./ui/CartIcon";


interface Props
{
    changetheme: any
}


const Header: React.FC<Props> = (props) => {

    const [open, setOpen] = useState(false)
    const [collection, setCollection] = useState('Men')

    const showCollection = (e: { currentTarget: { textContent: any; }; }) => {
        setOpen(true)
        setCollection(e.currentTarget.textContent)
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
        <div className={'header'} style={props.changetheme.theme} onMouseLeave={(e) => setOpen(false)}>
            <div style={{display: 'flex', alignItems: 'center', marginLeft: '2vw', height: '100%'}}>
            <p className={'logo'} onMouseOver={(e) => setOpen(false)}>LOGO</p>
            <ul style={{display: 'flex', alignItems: 'center', listStyle: 'none', margin: '0', padding: '0'}}>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Men</li>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Women</li>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Kids</li>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Sale</li>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Collections</li>
                <li className={props.changetheme.onhover} onMouseOver={showCollection}>Blog</li>
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
            <div onMouseOver={(e) => setOpen(true)} onMouseLeave={(e) => setOpen(false)}>
            {open && <Category col={collection} colortheme={props.changetheme.theme}/>}
            </div>
        </>
    );
};

export default Header;