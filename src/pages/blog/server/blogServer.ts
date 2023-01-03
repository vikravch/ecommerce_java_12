import {createServer} from "miragejs"
import {
    BLOG_TEXT_1, BLOG_TEXT_2, BLOG_TEXT_3,
    BLOG_TEXT_4, BLOG_TEXT_5, BLOG_TEXT_6,
    DATE_BLOG,
    TITLE_BLOG_TEXT_0,
    TITLE_BLOG_TEXT_1,
    TITLE_BLOG_TEXT_2,
    TITLE_BLOG_TEXT_3,
    TITLE_BLOG_TEXT_4
} from "./const";
import {BIG_TITLE_BLOG_URL, BLOG_URL, TITLE_BLOG_URL} from "../api/apiConst";

createServer({
    routes() {
        this.get(TITLE_BLOG_URL, () => {
            return {
                movies: [
                    {id: 1, blogTitleText: TITLE_BLOG_TEXT_1, dateBlog: DATE_BLOG},
                    {id: 2, blogTitleText: TITLE_BLOG_TEXT_2, dateBlog: DATE_BLOG},
                    {id: 3, blogTitleText: TITLE_BLOG_TEXT_3, dateBlog: DATE_BLOG},
                    {id: 4, blogTitleText: TITLE_BLOG_TEXT_4, dateBlog: DATE_BLOG},
                ],
            }
        })
        this.get(BIG_TITLE_BLOG_URL, () => {
            return {
                titles: [
                    {id: 1, blogTitleText: TITLE_BLOG_TEXT_0, dateBlog: DATE_BLOG},
                ],
            }
        })
        this.get(BLOG_URL, () => {
            return {
                blogs: [
                    {
                        id: 1,
                        blogImage: '/images/Post-Image1.png',
                        blogText: BLOG_TEXT_1,
                        dateBlog: DATE_BLOG
                    },
                    {
                        id: 2,
                        blogImage: '/images/Post-Image2.png',
                        blogText: BLOG_TEXT_2,
                        dateBlog: DATE_BLOG
                    },
                    {
                        id: 3,
                        blogImage: '/images/Post-Image3.png',
                        blogText: BLOG_TEXT_3,
                        dateBlog: DATE_BLOG
                    },
                    {
                        id: 3,
                        blogImage: '',
                        blogText: BLOG_TEXT_4,
                        dateBlog: DATE_BLOG
                    },
                    {
                        id: 5,
                        blogImage: '/images/Post-Image4.png',
                        blogText: BLOG_TEXT_5,
                        dateBlog: DATE_BLOG
                    },
                    {
                        id: 6,
                        blogImage: '/images/Post-Image5.png',
                        blogText: BLOG_TEXT_6,
                        dateBlog: DATE_BLOG
                    },
                ],
                totalCount:40,
            }
        })
    }
})