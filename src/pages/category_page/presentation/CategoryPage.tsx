import React from "react";
import InfoSort from "../components/InfoSort";
import Content from "../components/Content";
import Pagination from "../components/Pagination";
import Subscribe from "../components/Subscribe";
import '../index.scss'
import styles from "./CategoryPage.module.scss";
import Sidebar from "../components/Sidebar/Sidebar";
import {MyContext} from "../assets/utils/context";
import {menuItems} from "../components/Sidebar/list";
import {IMenuItem, TChosenFilter} from "../shared/types/root.interfaces";

export const CategoryPage: React.FC = () => {
	const [isOpenSidebar, setIsOpenSidebar] = React.useState<boolean>(false)
	const [menuData, setMenuData] = React.useState<IMenuItem[]>(menuItems)
	const [chosenFilters, setChosenFilters] = React.useState<TChosenFilter[]>([])
	const [activeCategoryIdFirstMenu, setActiveCategoryIdFirstMenu] = React.useState<number>(0)
	
	return (
		<MyContext.Provider value={{
			menuData,
			setMenuData,
			chosenFilters,
			setChosenFilters,
			activeCategoryIdFirstMenu,
			setActiveCategoryIdFirstMenu
		}}>
			<main>
				<div className={`${styles.wrapper}`}>
					<InfoSort/>
					<Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar}/>
					<Content/>
					<Pagination/>
				</div>
				<Subscribe/>
			</main>
		</MyContext.Provider>
	);
};


