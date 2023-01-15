import React, {useEffect} from 'react';
import {blogAction} from "../../../store/actions/blogAction";
import postsStyle from "./postsBlog.module.css"
import {BiTimeFive} from "react-icons/bi";
import {useAppDispatch, useAppSelector} from "../../../../../general/hooks/redux";
import {IBlogBody} from "../../../models/IBlogBody";
import {Link} from "react-router-dom";


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
                    <Link className={postsStyle.link} key={title.id} to={`/blog/${title.id}`}>
                        {title.blogImage ?
                            <div className={postsStyle.wrapperSmallBlock}>
                                <img className={postsStyle.styleImg} src={title.blogImage}/>
                                <p>{title.blogText}</p>
                                <div className={postsStyle.wrapperTime}>
                                    <BiTimeFive/>
                                    <span>{title.dateBlog}</span>
                                </div>
                            </div> :
                            <div>
                                <p>{title.blogText}</p>
                                <div className={postsStyle.wrapperTime}>
                                    <BiTimeFive/>
                                    <span>{title.dateBlog}</span>
                                </div>
                            </div>}
                    </Link>
                )}
            </div>
        </div>
    );
};

export default PostsBlog;