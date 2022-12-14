import React from 'react';
import styles from './Checkbox.module.scss'
import {ListItem} from "../../components/SidebarFirst/list";

interface CheckboxProps {
	id: string;
	value: string;
	list: ListItem[];
}

const Checkbox: React.FC<CheckboxProps> = ({id, value, list}) => {

	const [chosenCategories, setChosenCategories] = React.useState<string[]>([])
	
	const handleClickChosenCategories = (category: string) => {
		console.log(chosenCategories)
		setChosenCategories(prevState => {
			let res = prevState.includes(category)
			if (res) {
				let newArr = prevState.filter(item => item !== category)
				return [...newArr]
			} else {
				return [...prevState, category]
			}
		})
	}
	
	
	return (
		<li
			className={list.length === 6 ? styles.sizeCheckBox :styles.collectionCheckBox}
			key={id}>
			<input
				type="checkbox"
				id={id}/>
			<label
				onClick={() => handleClickChosenCategories(value)}
				htmlFor={id} className={styles.collectionItemLabel}>{value}</label>
		</li>
	);
};

export default Checkbox;
