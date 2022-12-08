import React, {useEffect} from 'react';
import {photoArray} from "../utils/photoArray";
// @ts-ignore
import cart from '../assets/Add to bag/Vectoronchoose.png';
import {CartIcon} from "./ui/CartIcon";
import StarRating from "./StarRating";

const Main = () => {

    return (
        <div style={{margin: '100px'}}>
            <p className={'arrival'}>New arrivals</p>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                { photoArray.map((photo: string, index: number) => <div key={index} style={{
                    marginBottom: '3vh'
                }}>
                    <div style={{position: 'relative'}}>
                        <img style={{width: '300px'}} alt={`model${index}`} src={`${photo}`}/>
                        <div style={{
                            position: 'absolute',
                            right: '4%',
                            bottom: '4%',
                            padding: ' 5px 10px',
                            backgroundColor: 'white',
                            borderRadius: '10px'
                        }}>
                            <CartIcon fill={'#2D74FF'}/></div>
                    </div>
                    <StarRating/>
                    <a style={{textDecoration: 'underline'}}>#7148</a>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                    <p>Airlift Bra</p>
                    <p>35$</p>
                    </div>

                </div>)}
            </div>
        </div>
    );
};

export default Main;