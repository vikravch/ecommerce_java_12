import React from 'react'
import styles from './mainPhotos.module.scss'
import img1 from "../Photos/1.png";
import img2 from "../Photos/2.png";
import img3 from "../Photos/3.png";
import img4 from "../Photos/4.png";
import ModalGallery from "../ModalGallery/ModalGallery";

const MainPhotos = () => {
    return (
        <>
            <img type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={img1} alt={'text'}/>
            <img src={img2} alt={'text'}/>
            <img src={img3} alt={'text'}/>
            <img src={img4} alt={'text'}/>
            <ModalGallery/>
        </>
    )
}
export default MainPhotos