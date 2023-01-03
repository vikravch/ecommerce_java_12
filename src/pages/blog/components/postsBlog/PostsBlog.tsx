import React, {useEffect} from 'react';
import {blogAction} from "../../store/actions/blogAction";
import postsStyle from "./postsBlog.module.css"
import {BiTimeFive} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../../../general/hooks/redux";
import {IBlogBody} from "../../models/IBlogBody";


const PostsBlog = () => {
    const {isLoading, error, blogPost} = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch((blogAction()))
    }, [dispatch])

    return (
        <div>
            {isLoading && <h1>Loading.......</h1>}
            {error && <h4>{error}</h4>}
            <div className={postsStyle.wrapperPostsBlog}>
                {blogPost && blogPost.map((title: IBlogBody) =>
                    title.blogImage ?
                        <div>
                            <img src={title.blogImage}/>
                            <h4>{title.blogText}</h4>
                            <div>
                                <BiTimeFive/>
                                <span>{title.dateBlog}</span>
                            </div>
                        </div> :
                        <div>
                            <h1>{title.blogText}</h1>
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

export default PostsBlog;