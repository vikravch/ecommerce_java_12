import React from "react";
import {ICategory, IMenuItem, TChosenFilter} from "../../shared/types/root.interfaces";

type MyContextProps = {
	//Sidebar Menu & All Filters
	menuData: IMenuItem[];
	setMenuData: React.Dispatch<React.SetStateAction<IMenuItem[]>>;
	
	//Filters for Fetch
	chosenFilters: TChosenFilter[];
	setChosenFilters: React.Dispatch<React.SetStateAction<TChosenFilter[]>>;
	
	activeCategoryIdFirstMenu: number;
	setActiveCategoryIdFirstMenu: React.Dispatch<React.SetStateAction<number>>
}

export const MyContext = React.createContext<MyContextProps | null>(null)