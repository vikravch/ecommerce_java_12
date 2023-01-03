import React from 'react';
import PostsBlog from "../components/postsBlog/PostsBlog";
import PostTitle from "../components/postTitle/PostTitle";
import Paging from "../components/paging/Paging";

const Blog = () => {
    return (
        <div>
            <div>
                <span>Main</span>
                <span>  /  </span>
                <span>Blog</span>
            </div>
            <PostTitle/>
            <PostsBlog/>
            <Paging/>
        </div>
    );
};
export default Blog;