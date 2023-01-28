import React, {useState} from 'react';
import styles from "./paginator.module.css";
import cn from "classnames";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

// @ts-ignore
let Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 5}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    //let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        {/*{portionNumber > 1 &&*/}
            <button className={styles.styleButton} onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}><BsChevronLeft/></button>
        {/*// }*/}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button className={styles.styleButton} onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}><BsChevronRight/></button>
        }


    </div>
}

export default Paginator;