import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/auth/presentation/LoginPage";
import {CartMainPage} from "./pages/cart/presentation/CartMainPage";
import {MainPage} from "./pages/main_page/presentation/MainPage";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'/login'} element={<LoginPage/>}/>
      <Route path={'/cart'} element={<CartMainPage/>}/>
    </Routes>
  );
}
//   /category/women
export default App;
