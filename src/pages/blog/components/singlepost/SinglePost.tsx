import React from 'react';
import SinglePostBody from "./singlePostBody/SinglePostBody";
import SinglePostFooter from "./singlePostFooter/SinglePostFooter";
import style from "./singlePost.module.css"
import {Link} from "react-router-dom";


const SinglePost = () => {
    return (
        <div className={style.wrapper}>
            <SinglePostBody/>
            <SinglePostFooter/>
        </div>
    );
};

export default SinglePost;