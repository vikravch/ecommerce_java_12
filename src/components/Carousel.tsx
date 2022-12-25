import React, {useState} from 'react';
import {Arrowleft} from "./ui/Arrowleft";
import {Zoomx} from "./ui/zoomx";
import {SmallArrow} from "./ui/SmallArrow";
import {Arrowright} from "./ui/Arrowright";

const Carousel = () => {

    const firstSlide = () => {
        return (
            <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%'}}>
                <img style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} src={require("../assets/zoomx.png")}/>

            </div>
               )
    }
    const secondSlide = () => {
        return (
            <div>

                    <img style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%'}} src={require("../assets/shoes2.png")}/>

            </div>)
    }
    const thirdSlide = () => {
        return (
            <div>
                    <img style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%'}} src={require("../assets/shoes1.png")}/>
            </div>)
    }

    const slidesArray = [firstSlide(), secondSlide(), thirdSlide()]
    // @ts-ignore
    const [count, setCount] = useState(1)

    const prevPicture = () => {
        if (count > 0) {
            setCount(count => --count)
        } else {
            setCount(slidesArray.length - 1)
        }
    }

    const nextPicture = () => {
        if (count < slidesArray.length - 1) {
            setCount(count => ++count)
        } else {
            setCount(0)
        }
    }

    return (
        <div className={'promo'}>
            <div onClick={prevPicture} className={'hoverarrow'}
                 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '10vw'}}>
                <Arrowleft/>
            </div>
            <div style={{flexGrow: '1', position: 'relative', alignItems: 'center'}}>
                <h1 className={'tittle'}>AIR Beyond Compare</h1>
                <h1 className={'tittleSmall'}>Explore the best Air Max for fall & beyond</h1>
                <h1 className={'nike'}>NIKE</h1>
            {slidesArray[count]}
                <div style={{position: 'absolute', bottom: '5vw', left: '0'}}>
                    <button className={'btn btn-primary'}>Buy now</button>
                    <button style={{marginLeft: '5px'}} className={'btn btn-dark'}>Explore <SmallArrow/></button>
                </div>
            </div>
            <div onClick={nextPicture} className={'hoverarrow'}
                 style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '10vw'}}>
                <Arrowright/>
            </div>

        </div>
    );
};

export default Carousel;