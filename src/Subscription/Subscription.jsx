import React from 'react'
import styles from './subscription.module.scss'
import baseSneakers from '../ProductPage/Photos/subscribeImg/Base.svg'

const Subscription = () => {
    return (
        <>
            <div className={styles.subscription}>
                <div className={styles.subscriptionWrapper}>
                </div>
                <div className={styles.baseImg}>
                    <img src={baseSneakers} alt={'sneakers'}/>
                </div>
            </div>
        </>
    )
}
export default Subscription