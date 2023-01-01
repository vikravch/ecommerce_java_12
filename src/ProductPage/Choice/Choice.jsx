import React from 'react'
import style from './choice.module.scss'
import photo1 from '../Photos/iconColorImg/Image1.svg'
import photo2 from '../Photos/iconColorImg/Image2.svg'
import photo3 from '../Photos/iconColorImg/Image3.svg'
import photo4 from '../Photos/iconColorImg/Image4.svg'

const Choice = () => {

    const setColorOfThing = (e) => {
        e.preventDefault();
        let allPic = e.currentTarget.children;
        let pic = e.target;
        for (let elem of allPic) {
            elem.classList.remove(style.setBlueColor)
        }
        pic.className = style.setBlueColor
    }
    return (
        <div className={style.choice}>
            <hr className={style.line}></hr>
            <div className={style.color}>
                <div className={style.selected}><span className={style.wordColor}>Color:</span><span
                    className={style.selectedColor}>Black</span></div>
                <div className={style.photos} onClick={setColorOfThing}>
                    <img src={photo1} alt={'1'}/>
                    <img src={photo2} alt={'2'}/>
                    <img src={photo3} alt={'3'}/>
                    <img src={photo4} alt={'4'}/>
                </div>
            </div>
            <div className={style.size}>
                <div className={style.sizesWords}>
                    <span className={style.chosenSize}>Choose size</span>
                    <a href={'https://www.sizeguide.net/'}>Size guide</a>
                </div>
                <div className={style.selectSize}>
                    <select className='form-select' defaultValue={'L/14 US'}>
                        <option>L/14 US</option>
                        <option>L/14 US</option>
                        <option>L/14 US</option>
                    </select>
                </div>
            </div>
            <div className={style.buttonWrapper}>
                <button className={style.addToBag}>
                    <span className={style.svgCart}>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.5 5H12.5V4C12.5 2.93913 12.0786 1.92172 11.3284 1.17157C10.5783 0.421427 9.56087 0 8.5 0C7.43913 0 6.42172 0.421427 5.67157 1.17157C4.92143 1.92172 4.5 2.93913 4.5 4V5H1.5C1.23478 5 0.98043 5.10536 0.792893 5.29289C0.605357 5.48043 0.5 5.73478 0.5 6V17C0.5 17.7956 0.816071 18.5587 1.37868 19.1213C1.94129 19.6839 2.70435 20 3.5 20H13.5C14.2956 20 15.0587 19.6839 15.6213 19.1213C16.1839 18.5587 16.5 17.7956 16.5 17V6C16.5 5.73478 16.3946 5.48043 16.2071 5.29289C16.0196 5.10536 15.7652 5 15.5 5ZM6.5 4C6.5 3.46957 6.71071 2.96086 7.08579 2.58579C7.46086 2.21071 7.96957 2 8.5 2C9.03043 2 9.53914 2.21071 9.91421 2.58579C10.2893 2.96086 10.5 3.46957 10.5 4V5H6.5V4ZM14.5 17C14.5 17.2652 14.3946 17.5196 14.2071 17.7071C14.0196 17.8946 13.7652 18 13.5 18H3.5C3.23478 18 2.98043 17.8946 2.79289 17.7071C2.60536 17.5196 2.5 17.2652 2.5 17V7H4.5V8C4.5 8.26522 4.60536 8.51957 4.79289 8.70711C4.98043 8.89464 5.23478 9 5.5 9C5.76522 9 6.01957 8.89464 6.20711 8.70711C6.39464 8.51957 6.5 8.26522 6.5 8V7H10.5V8C10.5 8.26522 10.6054 8.51957 10.7929 8.70711C10.9804 8.89464 11.2348 9 11.5 9C11.7652 9 12.0196 8.89464 12.2071 8.70711C12.3946 8.51957 12.5 8.26522 12.5 8V7H14.5V17Z"
                                fill="white"/>
                        </svg>
                    </span>
                    <span className={style.buttonText}>Add to bag</span>
                </button>
            </div>
        </div>
    )
}
export default Choice;