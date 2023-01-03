import React, {useEffect} from 'react';
import {blogBigTitleAction} from "../../../store/actions/blogBigTitleAction";
import {IBlogTitleResponse} from "../../../models/IBlogTitleResponse";
import titleBigTextStyle from "./postBigText.module.css"
import {BiTimeFive} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../../../../general/hooks/redux";
import {IBlogTitleBody} from "../../../models/IBlogTitleBody";

const PostTitleBigText = () => {

    const {isLoading, error, blogBigTitles} = useAppSelector(state => state.blogBigTitle)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogBigTitleAction()))
    }, [dispatch])

    return (
        <div>
            {error && <h4>{error}</h4>}
            <div className={titleBigTextStyle.blogGrid}>
                {blogBigTitles && blogBigTitles.map((title: IBlogTitleBody) => <div>
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

export default PostTitleBigText;