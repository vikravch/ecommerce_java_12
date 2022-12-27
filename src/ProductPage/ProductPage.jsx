import React from 'react'
import styles from './productPage.module.scss'
import MainInfo from "./MainInfo/MainInfo";
import Choice from "./Choice/Choice";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import YouMight from "./YouMight/YouMight";
import MainPhotos from "./MainPhotos/MainPhotos";


const ProductPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.breadcrumbs}><p>Men / T-Shirts / Basic T-Shirt</p></div>
                <MainPhotos/>
                <div className={styles.rightSidebar}>
                    <MainInfo/>
                    <Choice/>
                    <AdditionalInfo/>
                </div>
            </div>
            <YouMight/>
        </main>
    )
}
export default ProductPage