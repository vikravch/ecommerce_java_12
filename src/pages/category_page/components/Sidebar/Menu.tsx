import React from "react";
import './Sidebar.scss'
import DropDownItem from "./DropDownItem";
import {ICategory, IMenuItem} from "../../shared/types/root.interfaces";
import {MyContext} from "../../assets/utils/context";
import CheckboxContainer from "./check_item/checkbox_container/CheckboxContainer";

type MenuProps = {
	menu: IMenuItem,
}
export type ChosenFilter = string[]


const Menu: React.FC<MenuProps> = ({menu}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(true)
	const context = React.useContext(MyContext)
	
	React.useEffect(() => {
		context!.chosenFilters.map(el => console.log(el))
	}, [])
	
	const handleChangeClass = (id: number) => {
		context!.setActiveCategoryIdFirstMenu(id)
	}
	
	const handleAddFilters = (item: ICategory) => {
		const { name, checkValue } = item
		const isIncluded = context!.chosenFilters.includes(name)
		if (checkValue === 'unchecked' && isIncluded) {
			context!.setChosenFilters(context!.chosenFilters.filter(el => el !== name));
		}
		if (checkValue === 'checked' && !isIncluded) {
			context!.setChosenFilters([...context!.chosenFilters, name])
		}
	}
	
	const handleChangeCheckValue = (el: ICategory) => {
		switch (el.checkValue) {
			case 'checked':
				el.isAdded = !el.isAdded;
				el.checkValue = 'unchecked';
				return {
					...el,
					isAdded: el.isAdded,
					checkValue: el.checkValue,
				};
			case 'unchecked':
				el.isAdded = !el.isAdded;
				el.checkValue = 'checked';
				return {
					...el,
					isAdded: el.isAdded,
					checkValue: el.checkValue
				}
			default:
				return {...el}
		}
	}
	
	const handleClickCategory = (menu: IMenuItem, category: ICategory, id: number) => {
		if (menu.name === 'Categories') {
			handleChangeClass(id) // for changing class of Categories item (first menu list)
		}
		
		context!.setMenuData(context!.menuData.filter((item) => {
			return item.items_data.filter((el) => {
				if (el.name === category.name) {
					handleChangeCheckValue(el); // For Changing CheckValue and AddValue
				}
				return el
			})
		}))
		handleAddFilters(category); // Add Filters for fetch request
	}
	
	return (
		<div
			key={menu.name}
			className={`${menu.name}__block block`}>
			<DropDownItem menu={menu} isOpen={isOpen} setIsOpen={setIsOpen}/>
			
			{isOpen && (
				<div className={`${menu.name}__list list`}>
					{menu.items_data.map((category, id) => (
						<CheckboxContainer key={id}
						                   id={id}
						                   onClick={handleClickCategory}
						                   checkType={menu.checkType}
						                   isAdded={category.isAdded!}
						                   checkValue={category.checkValue!}
						                   menu={menu}
						                   category={category}
						>{category.name}</CheckboxContainer>
					))}
				</div>
			)
			}
		</div>
	)
}

export default Menu;