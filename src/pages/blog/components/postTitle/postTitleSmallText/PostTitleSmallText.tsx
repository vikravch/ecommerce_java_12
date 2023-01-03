import React, {useEffect} from 'react';

import {blogTitleAction} from "../../../store/actions/blogTitleAction";
import titleSmallTextStyle from "./postTitleSmallText.module.css"
import {BiTimeFive} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../../../../general/hooks/redux";
import {IBlogTitleBody} from "../../../models/IBlogTitleBody";

const PostTitleSmallText = () => {

    const {isLoading, error, blogTitles} = useAppSelector(state => state.blogTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogTitleAction()));
    }, [dispatch])
    return (
        <div>
            {isLoading && <h1>Loading.......</h1>}
            {error && <h4>{error}</h4>}
            <div className={titleSmallTextStyle.wrapperSmallText}>
                {blogTitles && blogTitles.map((title: IBlogTitleBody) => <div>
                        <h1>{title.blogTitleText}</h1>
                    <div>
                        <BiTimeFive/>
                        <span>{title.dateBlog}</span>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostTitleSmallText;