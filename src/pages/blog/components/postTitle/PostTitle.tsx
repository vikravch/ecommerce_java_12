import React from 'react';
import PostTitleBigText from "./postTitleBigText/PostTitleBigText";
import PostTitleSmallText from "./postTitleSmallText/PostTitleSmallText";
import postTitleStyle from "./postTitle.module.css"

const PostTitle = () => {
    return (
        <div className={postTitleStyle.wrapperTitle}>
            <PostTitleBigText/>
            <PostTitleSmallText/>
        </div>
    );
};

export default PostTitle;