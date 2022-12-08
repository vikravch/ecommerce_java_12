import React from 'react';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer"
import Promo from "./components/Promo";
import Subscribe from "./components/Subscribe";
import Categories from "./components/Categories";
import Orders from "./components/Orders";


const App = () => {

        const stylesBlack: any = {
            theme:
            {
                color: 'white',
                backgroundColor: 'black'
            },
            onhover: 'hover_black',
            search: {backgroundColor: 'black', color: 'white'},
                svg_color: 'white'

}



    // const [posts, setPosts] = useState([]);
    // const [postsPerPage] = useState(10);
    // const [currentPage, setCurrentPage] = useState(1);

    // //При монтировании главной компоненты обращаемся к нашему серверу
    // для получения объекта товаров которые будут отображаться на Landing Page
    // После получения объекта у станавливаем лимит карточек для отображения на странице
    // Также передаем общее колличество страниц товаров в компонент Pagination


    // useEffect(() =>{
    //     fetch('https://localhost:OURSERVER')
    //         .then(data => data.json())
    //         .then(data =>{
    //
    //         })
    // }, [])

    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    //
    // const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <Routes>
            <Route path={'/'} element={
                <div className={'main'}>
                <Header changetheme={stylesBlack}/>
                <Promo/>
                <Main/>
                <Categories/>
                <Subscribe/>
                <Footer/>
            </div>}/>
            <Route path={'orders'} element={<Orders/>}/>
        </Routes>
    );
};

export default App;