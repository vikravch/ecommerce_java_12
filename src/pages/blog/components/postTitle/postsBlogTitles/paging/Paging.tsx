import React from 'react';
import pagingStyle from "./paging.module.css"
import {useAppSelector} from "../../../../../../general/hooks/redux";
import Paginator from "./paginator/Paginator";


const Paging = () => {
    const {maxItems, currentPage} = useAppSelector(state => state.blog);


    let setCurrentPage;
    return (
        <div className={pagingStyle.paginator}>
            <Paginator
                totalItemsCount={maxItems}
                pageSize={10}
                currentPage={currentPage}
                onPageChanged={10}
            />
        </div>
    );
};

export default Paging;