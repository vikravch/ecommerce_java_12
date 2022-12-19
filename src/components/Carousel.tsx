import React, {useEffect, useState} from 'react';
import {Arrowleft} from "./ui/Arrowleft";
import {Zoomx} from "./ui/zoomx";
import {SmallArrow} from "./ui/SmallArrow";
import {Arrowright} from "./ui/Arrowright";

const Carousel = () => {

    const firstSlide = () =>{
        return(
            <div style={{flexGrow: '1',position: 'relative', alignItems: 'center'}}>
                <h1 className={'tittle'}>AIR Beyond Compare</h1>
                <h1 className={'tittleSmall'}>Explore the best Air Max for fall & beyond</h1>
                <h1 className={'nike'}>NIKE</h1>
                <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Zoomx/>
                </div>
                <div style={{position: 'absolute', bottom: '5vw', left: '0'}}>
                    <button className={'btn btn-primary'}>Buy now</button>
                    <button style={{marginLeft: '5px'}} className={'btn btn-dark'}>Explore <SmallArrow/></button>
                </div>
            </div>)
    }
    const secondSlide = () =>{
        return(
            <div style={{flexGrow: '1',position: 'relative', alignItems: 'center'}}>
                <h1 className={'tittle'}>AIR Beyond Compare</h1>
                <h1 className={'tittleSmall'}>Explore the best Air Max for fall & beyond</h1>
                <h1 className={'nike'}>NIKE</h1>
                <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Zoomx/>
                </div>
                <div style={{position: 'absolute', bottom: '5vw', left: '0'}}>
                    <button className={'btn btn-primary'}>Buy now</button>
                    <button style={{marginLeft: '5px'}} className={'btn btn-dark'}>Explore <SmallArrow/></button>
                </div>
            </div>)
    }
    const thirdSlide = () =>{
        return(
            <div style={{flexGrow: '1',position: 'relative', alignItems: 'center'}}>
                <h1 className={'tittle'}>AIR Beyond Compare</h1>
                <h1 className={'tittleSmall'}>Explore the best Air Max for fall & beyond</h1>
                <h1 className={'nike'}>NIKE</h1>
                <div  style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                    <Zoomx/>
                </div>
                <div style={{position: 'absolute', bottom: '5vw', left: '0'}}>
                    <button className={'btn btn-primary'}>Buy now</button>
                    <button style={{marginLeft: '5px'}} className={'btn btn-dark'}>Explore <SmallArrow/></button>
                </div>
            </div>)
    }

    const slidesArray = [firstSlide(),secondSlide(),thirdSlide()]
    // @ts-ignore
    const [promo, setPromo] = useState({slide: slidesArray[1]})

    // @ts-ignore




    const prevPicture = () =>{
        setPromo({slide: slidesArray[0]})
        console.log('prevPicture')

    }

    const nextPicture = () =>{
        setPromo({slide: slidesArray[2]})
        console.log('nextPicture')
    }

    return (
        <div className={'promo'}>
            <div onClick={prevPicture} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '10vw'}}>
                <Arrowleft/>
            </div>
            {promo.slide}
            <div onClick={nextPicture} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '10vw'}}>
                <Arrowright/>
            </div>

        </div>
    );
};

export default Carousel;