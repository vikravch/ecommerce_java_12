import React from 'react';
import SinglePostBody from "./singlePostBody/SinglePostBody";
import SinglePostFooter from "./singlePostFooter/SinglePostFooter";
import style from "./singlePost.module.css"

const SinglePost = () => {
    return (
        <div className={style.wrapper}>
            <SinglePostBody/>
            <SinglePostFooter/>
        </div>
    );
};

export default SinglePost;