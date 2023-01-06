import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../general/hooks/redux";
import {blogAction} from "../../store/actions/blogAction";
import {IBlogBody} from "../../models/IBlogBody";

const SinglePost = () => {
    const {blogPost} = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch((blogAction()))
    }, [id]);

    return (
        <div>
            {blogPost && blogPost
                .filter((filterTitle) => filterTitle.id === Number(id))
                .map((title) =>
                    <div>
                        <div>{title.blogText}</div>
                        <img src={title.blogImage}/>
                    </div>
                )}
        </div>
    );
};

export default SinglePost;