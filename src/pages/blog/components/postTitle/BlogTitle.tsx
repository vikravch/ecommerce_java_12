import React from 'react';
import PostsBlog from "./postsBlogTitles/PostsBlog";
import Paging from "./postsBlogTitles/paging/Paging";
import PostTitleBigText from "./postTitleBigText/PostTitleBigText";
import PostTitleSmallText from "./postTitleSmallText/PostTitleSmallText";
import style from "./blogTitle.module.css";
import {Link} from "react-router-dom";

const BlogTitle = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.link}>
                <Link className={style.link} to={'/'}>Main / </Link>
                <span className={style.styleSpan}>Blog</span>
            </div>

            <div className={style.wrapperTitle}>
                <PostTitleBigText/>
                <PostTitleSmallText/>
            </div>
            <PostsBlog/>
            <Paging/>
        </div>
    );
};
export default BlogTitle;