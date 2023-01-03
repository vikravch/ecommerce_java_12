import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/presentation/LoginPage";
import {CartMainPage} from "./pages/cart/presentation/CartMainPage";
import {MainPage} from "./pages/main_page/presentation/MainPage";
import Blog from "./pages/blog/pages/Blog";


function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage/>}/>
            <Route path={'/login/*'} element={<LoginPage/>}/>
            <Route path={'/cart'} element={<CartMainPage/>}/>
            <Route path={'/blog'} element={<Blog/>}/>
        </Routes>
    );
}

export default App;
