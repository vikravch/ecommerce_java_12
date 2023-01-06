import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../../../general/hooks/redux";
import {Link, useParams} from "react-router-dom";
import {blogAction} from "../../../store/actions/blogAction";
import style from "./singlePostFooter.module.css";
import {BiTimeFive} from "react-icons/bi";

const SinglePostFooter:React.FC = () => {

    const {blogPost} = useAppSelector(state => state.blog)
    const dispatch = useAppDispatch();
    const {id} = useParams();
    useEffect(() => {
        dispatch((blogAction()))
    }, [dispatch]);


    return (
        <div className={style.wrapperPostsBlog}>
            {blogPost && blogPost
                .filter((filterTitle) => (filterTitle.id === 3 || filterTitle.id === 5) )
                .map((title) =>
                    <Link className={style.link} key={title.id} to = {`/blog/${title.id}`}>
                        { title.blogImage ?
                            <div className={style.wrapperSmallBlock}>
                                <img src={title.blogImage}/>
                                <p>{title.blogText}</p>
                                <div className={style.wrapperTime}>
                                    <BiTimeFive/>
                                    <span>{title.dateBlog}</span>
                                </div>
                            </div> :
                            <div>
                                <p>{title.blogText}</p>
                                <div>
                                    <BiTimeFive/>
                                    <span>{title.dateBlog}</span>
                                </div>
                            </div>}
                    </Link>
                )}
            <hr/>
        </div>
    );

};

export default SinglePostFooter;