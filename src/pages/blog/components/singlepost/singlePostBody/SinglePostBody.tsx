import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {blogAction} from "../../../store/actions/blogAction";
import {BiTimeFive} from "react-icons/bi";
import style from "./singlePost.module.css"
import {useAppDispatch, useAppSelector} from "../../../../../general/hooks/redux";
import SingleLink from "../singlelink/SingleLink";

const SinglePostBody: React.FC = () => {
    const {blogPost} = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch((blogAction()))
    }, [dispatch]);

    return (
        <div className={style.wrapper}>
            {blogPost && blogPost
                .filter((filterTitle) => filterTitle.id === Number(id))
                .map((title) =>
                    <div>
                        <SingleLink linkEnd={title.blogText}/>
                        <div className={style.singlePostWrapper}>
                            <h1 className={style.styleH1}>{title.blogText}</h1>
                            <div className={style.wrapperTime}>
                                <BiTimeFive/>
                                <span>{title.dateBlog}</span>
                            </div>
                            <p className={style.styleP}>{title.blogBodyText1}</p>
                            <h4 className={style.styleH4}>{title.blogTitleSmall1}</h4>
                            <p className={style.styleP}>{title.blogBodyText2}</p>
                            <img className={style.imgTitle} src={title.blogImage} alt='photoTitle'/>
                            <p className={style.styleP}>{title.blogBodyText3}</p>
                            <h4 className={style.styleH4}>{title.blogTitleSmall2}</h4>
                            <p className={style.styleP}>{title.blogBodyText4}</p>
                            <div className={style.smallImageWrapper}>
                                <img className={style.styleImage} src={title.blogImageSmall1} alt='photo1'/>
                                <img className={style.styleImage} src={title.blogImageSmall2} alt='photo2'/>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default SinglePostBody;