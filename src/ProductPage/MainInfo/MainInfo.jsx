import React  from 'react'
import style from './maininfo.module.scss'

const MainInfo = () => {
    return(
        <div className={style.mainInfo}>
            <div className={style.tag}><span className={style.sale}>-45 &#37;</span></div>
            <div className={style.name}>Basic T-shirt</div>
            <div className={style.prescription}>The T-Shirt sets you up with soft cotton<br/> jersey and a classic logo with camo on the<br/>chest.</div>
            <div className={style.price}><span className={style.clearPrice}>$35</span><span className={style.oldPrice}>$55</span></div>
        </div>
    )
}
export default MainInfo;