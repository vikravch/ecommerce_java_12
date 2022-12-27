import React from 'react'
import styles from './modalGallery.module.scss'

const ModalGallery = () => {
    const images = ['image 4','image 3','image 2','image 1'];

    const nextButGallery = () => {

    }
    const prevButGallery = () => {

    }
    return (
        <>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" tabIndex="-1"
                 aria-labelledby="staticBackdropLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content" style={{width: '750px', height: '960px', padding: 0}}>
                        <div className={styles.galleryWrapper}>
                            <div className={styles.closeButWrapper}>
                                <div className={styles.closeBut}>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Закрыть"></button>
                                </div>
                            </div>
                            <div className={styles.content}>
                                <div className={styles.prevButRow}>
                                    <svg width="18" height="28" viewBox="0 0 18 28" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.45349 15.8933L12.7602 27.2C13.0081 27.4499 13.303 27.6483 13.6279 27.7837C13.9529 27.9191 14.3015 27.9888 14.6535 27.9888C15.0055 27.9888 15.3541 27.9191 15.679 27.7837C16.004 27.6483 16.2989 27.4499 16.5468 27.2C17.0435 26.7003 17.3223 26.0245 17.3223 25.32C17.3223 24.6155 17.0435 23.9396 16.5468 23.44L7.10682 14L16.5468 4.55998C17.0435 4.06034 17.3223 3.38447 17.3223 2.67997C17.3223 1.97548 17.0435 1.29961 16.5468 0.799974C16.2976 0.552824 16.0021 0.357291 15.6772 0.224585C15.3523 0.0918798 15.0044 0.0246143 14.6535 0.0266433C14.3025 0.0246142 13.9546 0.0918797 13.6297 0.224585C13.3048 0.357291 13.0093 0.552823 12.7602 0.799974L1.45349 12.1066C1.20355 12.3545 1.00516 12.6495 0.869779 12.9744C0.734396 13.2994 0.664693 13.6479 0.664693 14C0.664693 14.352 0.734395 14.7006 0.869779 15.0255C1.00516 15.3505 1.20355 15.6454 1.45349 15.8933V15.8933Z"
                                            fill="black" fillOpacity="0.3"/>
                                    </svg>
                                </div>
                                <div></div>
                                <div className={styles.nextButRow}>
                                    <svg width="18" height="28" viewBox="0 0 18 28" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.5465 12.1067L5.23985 0.800026C4.99195 0.550083 4.69701 0.351698 4.37205 0.216315C4.04709 0.0809318 3.69855 0.0112305 3.34651 0.0112305C2.99448 0.0112305 2.64593 0.0809318 2.32098 0.216315C1.99602 0.351698 1.70108 0.550083 1.45318 0.800026C0.956512 1.29966 0.677734 1.97553 0.677734 2.68003C0.677734 3.38452 0.956512 4.06039 1.45318 4.56003L10.8932 14L1.45318 23.44C0.956512 23.9397 0.677734 24.6155 0.677734 25.32C0.677734 26.0245 0.956512 26.7004 1.45318 27.2C1.70235 27.4472 1.99786 27.6427 2.32276 27.7754C2.64766 27.9081 2.99556 27.9754 3.34651 27.9734C3.69747 27.9754 4.04536 27.9081 4.37026 27.7754C4.69516 27.6427 4.99067 27.4472 5.23985 27.2L16.5465 15.8934C16.7965 15.6455 16.9948 15.3505 17.1302 15.0256C17.2656 14.7006 17.3353 14.3521 17.3353 14C17.3353 13.648 17.2656 13.2994 17.1302 12.9745C16.9948 12.6495 16.7965 12.3546 16.5465 12.1067Z"
                                            fill="black" fillOpacity="0.6"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalGallery