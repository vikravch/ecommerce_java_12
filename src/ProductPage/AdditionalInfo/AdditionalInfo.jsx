import React from 'react'
import style from './additionalInfo.module.scss'

const AdditionalInfo = () => {
    return (
        <div className={style.additionalInfoWrapper}>
            <hr className={style.lineTop}/>
            <div className="accordion accordion-flush">
                <div className="accordion-item ">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded='true'
                                aria-controls="flush-collapseOne">
                            Details
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse show"
                         aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Standard fit for a relaxed, easy feel<br/> Fabric: 100%
                            cotton<br/> Machine wash<br/> Imported<br/> Shown: Cactus Flower<br/> Style: CU8914-564
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                            Shipping & Returns
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                         aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            {/*something*/}
                        </div>
                    </div>
                </div>
            </div>
            <hr className={style.lineBottom}></hr>
        </div>
    )
}
export default AdditionalInfo;
