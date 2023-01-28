import {createServer} from "miragejs"
import {
    BLOG_TEXT_1,
    BLOG_TEXT_2,
    BLOG_TEXT_3,
    BLOG_TEXT_4,
    BLOG_TEXT_5,
    BLOG_TEXT_6,
    BLOG_TEXT_BODY_1_1,
    BLOG_TEXT_BODY_1_2, BLOG_TEXT_BODY_1_3, BLOG_TEXT_BODY_1_4,
    BLOG_TEXT_TITLE_1_1,
    BLOG_TEXT_TITLE_1_2,
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
                        blogImageSmall1: '/images/Rectangle 46small1.png',
                        blogImageSmall2: '/images/Rectangle 47small2.png',
                        blogText: BLOG_TEXT_1,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,

                    },
                    {
                        id: 2,
                        blogImage: '/images/Post-Image2.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_2,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 3,
                        blogImage: '/images/Post-Image3.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_3,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 4,
                        blogImage: '',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_4,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 5,
                        blogImage: '/images/Post-Image4.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_5,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 6,
                        blogImage: '/images/Post-Image5.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_6,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },

                    {
                        id: 7,
                        blogImage: '/images/Post-Image1.png',
                        blogImageSmall1: '/images/Rectangle 46small1.png',
                        blogImageSmall2: '/images/Rectangle 47small2.png',
                        blogText: BLOG_TEXT_1,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,

                    },
                    {
                        id: 8,
                        blogImage: '/images/Post-Image2.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_2,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 9,
                        blogImage: '/images/Post-Image3.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_3,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 10,
                        blogImage: '',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_4,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 11,
                        blogImage: '/images/Post-Image4.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_5,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                    {
                        id: 12,
                        blogImage: '/images/Post-Image5.png',
                        blogImageSmall1: '',
                        blogImageSmall2: '',
                        blogText: BLOG_TEXT_6,
                        blogTitleSmall1: BLOG_TEXT_TITLE_1_1,
                        blogTitleSmall2: BLOG_TEXT_TITLE_1_2,
                        dateBlog: DATE_BLOG,
                        blogBodyText1: BLOG_TEXT_BODY_1_1,
                        blogBodyText2: BLOG_TEXT_BODY_1_2,
                        blogBodyText3: BLOG_TEXT_BODY_1_3,
                        blogBodyText4: BLOG_TEXT_BODY_1_4,
                    },
                ],
                totalCount: 1100,
            }
        })

        this.post("/api/signIn", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            console.log(attrs);
            const user = attrs.email + attrs.password
            const userReg = 'qqq@qqq.qq1234567'
            attrs.loginData = {
                id: Date.now(),
                accessToken: '123456789qwerty',
            }
            attrs.errors = {error: 'No login'}
            return user == userReg ? attrs.loginData : attrs.errors
        })

        this.post("/api/signUp", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.errors = {error: "You have successfully registered!"}
            return attrs.errors;
        })

        this.post("/api/restorePassword", (schema, request) => {
            let attrs = JSON.parse(request.requestBody)
            attrs.errors = {error: "To reset your password, follow the link in the email"}
            return attrs.errors;
        })
    }
})