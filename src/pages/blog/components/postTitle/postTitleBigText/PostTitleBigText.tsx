import React, {useEffect} from 'react';
import {blogBigTitleAction} from "../../../store/actions/blogBigTitleAction";
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
            {isLoading && <h1>Loading</h1>}
            {error && <h4>{error}</h4>}
            <div>
                {blogBigTitles && blogBigTitles.map((title: IBlogTitleBody) =>
                    <div className={titleBigTextStyle.wrapperBody}>
                        <h2 className={titleBigTextStyle.styleH2}>{title.blogTitleText}</h2>
                        <button className={titleBigTextStyle.styleButton}>Read more</button>
                        <div className={titleBigTextStyle.wrapperTime}>
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