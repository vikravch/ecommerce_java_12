import React from 'react'
import styles from './youMight.module.scss'
import alsoImg1 from "../Photos/alsoImg/Image1.svg";
import alsoImg2 from "../Photos/alsoImg/Image2.svg";
import alsoImg3 from "../Photos/alsoImg/Image3.svg";
import alsoImg4 from "../Photos/alsoImg/Image4.svg";

const YouMight = () => {
    return(
        <>
            <hr className={styles.line}></hr>
            <div className={styles.mightAlso}>
                <div className={styles.alsoTitle}>
                    You might also like
                </div>
                <div className={styles.cards}>
                    <div className={styles.frameWrapper}>
                        <img src={alsoImg1} alt={'also'}/>
                        <div className={styles.rates}></div>
                        <div className={styles.hashTag}>#7142</div>
                        <div className={styles.namePrice}>
                            <span className={styles.name}>Basic t-shirt</span>
                            <span className={styles.price}>35$</span>
                        </div>
                    </div>
                    <div className={styles.frameWrapper}>
                        <img src={alsoImg2} alt={'also'}/>
                        <div className={styles.rates}></div>
                        <div className={styles.hashTag}>#7142</div>
                        <div className={styles.namePrice}>
                            <span className={styles.name}>Basic t-shirt</span>
                            <span className={styles.price}>35$</span>
                        </div>
                    </div>
                    <div className={styles.frameWrapper}>
                        <img src={alsoImg3} alt={'also'}/>
                        <div className={styles.rates}></div>
                        <div className={styles.hashTag}>#7142</div>
                        <div className={styles.namePrice}>
                            <span className={styles.name}>Basic t-shirt</span>
                            <span className={styles.price}>35$</span>
                        </div>
                    </div>
                    <div className={styles.frameWrapper}>
                        <img src={alsoImg4} alt={'also'}/>
                        <div className={styles.rates}></div>
                        <div className={styles.hashTag}>#7142</div>
                        <div className={styles.namePrice}>
                            <span className={styles.name}>Basic t-shirt</span>
                            <span className={styles.price}>35$</span>
                        </div>
                    </div>
                </div>
                <div className={styles.pagination}>
                    <ul className="pagination pagination-lg">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.82012 17.7001L0.120117 9.00005L8.82012 0.300049L9.88012 1.36005L2.24012 9.00005L9.88012 16.64L8.82012 17.7001Z"
                                        fill="black" fill-opacity="0.3"/>
                                </svg>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">20</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <svg width="10" height="18" viewBox="0 0 10 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1.18012 17.7001L0.120117 16.64L7.76012 9.00005L0.120117 1.36005L1.18012 0.300049L9.88012 9.00005L1.18012 17.7001Z"
                                        fill="black" fill-opacity="0.3"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default YouMight