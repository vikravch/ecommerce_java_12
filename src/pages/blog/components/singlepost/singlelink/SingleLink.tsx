import React from 'react';
import {Link} from "react-router-dom";
import style from "./singlePostLink.module.css"

const SingleLink = (props: {linkEnd: any;}) => {
    return (
        <div>
            <Link className={style.link} to={'/'}>Main /</Link>
            <Link className={style.link} to={'/blog/'}> Blog</Link>
            <span className={style.styleSpan}> / {props.linkEnd}</span>
        </div>
    );
};

export default SingleLink;