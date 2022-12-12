import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import {LoginPage} from "./pages/auth/presentation/LoginPage";
import {CartMainPage} from "./pages/cart/presentation/CartMainPage";
import {MainPage} from "./pages/main_page/presentation/MainPage";
import {CategoryPage} from './pages/category_page/presentation/CategoryPage';

function App() {
	return (
		<Routes>
			<Route path={'/'} element={<MainPage/>}/>
			<Route path={'/login'} element={<LoginPage/>}/>
			<Route path={'/cart'} element={<CartMainPage/>}/>
			<Route path={'/categories'} element={<CategoryPage/>}/>
		</Routes>
	);
}

export default App;
