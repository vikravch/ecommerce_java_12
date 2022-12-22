import React from 'react';
import './Checkbox.scss'
import {Category, MenuItem} from "../../components/Sidebar/types";

type CheckboxProps = {
	menu: MenuItem
	category: Category;
	id: number;
	handleChangeClass: (id: number) => void;
	isActiveCategory: number;
	// setMenuData: (prevState: MenuItem) => MenuItem;
}

const Checkbox: React.FC<CheckboxProps> = ({menu, category, id, handleChangeClass, isActiveCategory}, setMenuData) => {
	
	// React.useEffect(() => {
	// 	// console.log(setMenuCollection)
	// }, [])
	
	const toggleChecked = (name: string) => {
		setMenuData((prevState: MenuItem) => {
			prevState.items.filter((item: Category) => {
				console.log(item)
				if (item.name !== name) {
					return item
				}
				return {
					...item,
					isChecked: !item.isChecked
				}
			})
		})
		
	}
	
	return (
		<div
			className={`${menu.name}__checkbox checkbox__container`}>
			{menu.inputType ? (
				<input className={`${menu.name}__input input`} type={menu.inputType} checked={category.isChecked} onChange={() => toggleChecked(category.name)} id={category.name}/>) : ''}
			{menu.name !== 'Categories' ? (<label
				className={`${menu.name}__label label`} htmlFor={category.name}>{category.name}</label>) : (<label
					onClick={() => handleChangeClass(id)}
					className={`${isActiveCategory === id ? 'active__category' : 'category__label'} label`}
					htmlFor={category.name}>{category.name}</label>
			)}
		</div>
	);
};

export default Checkbox;
