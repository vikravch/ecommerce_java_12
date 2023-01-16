import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/presentation/LoginPage";
import {CartMainPage} from "./pages/cart/presentation/CartMainPage";
import {MainPage} from "./pages/main_page/presentation/MainPage";
import BlogTitle from "./pages/blog/components/postTitle/BlogTitle";
import SinglePost from "./pages/blog/components/singlepost/SinglePost";
import Profile from './pages/profile_page/Profile';


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/login/*'} element={<LoginPage/>}/>
            <Route path={'/cart'} element={<CartMainPage/>}/>
            <Route path={'/blog'} element={<BlogTitle/>}/>
            <Route path={'/blog/:id'} element={<SinglePost/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
    );
}

export default App;
