import React from 'react';
import styles from './Checkbox.module.scss'

const Checkbox = ({id, item}) => {
	
	// const [chosenCategories, setChosenCategories] = React.useState([])
	
	// const handleClickChosenCategories = (category) => {
	// 	let result = chosenCategories.includes(category)
	//
	// 	if (!result) {
	// 		setChosenCategories(prevState => [...prevState, category])
	// 		// setChosenCategories(prevState => prevState.push(category))
	// 	} else {
	// 		setChosenCategories(prevState => {
	// 			let res = prevState.filter(item => item !== category)
	// 			return [...res]
	// 		})
	// 	}
	// console.log(chosenCategories)
	// }
	//
	const [chosenCategories, setChosenCategories] = React.useState([])
	
	const handleClickChosenCategories = (category) => {
		// let result = chosenCategories.includes(category)
		console.log(chosenCategories)
		
		// if (!result) {
		// 	// setChosenCategories(prevState => [...prevState, category])
		// 	setChosenCategories(prevState => [...prevState, {item: category}])
		// } else {
		// 	setChosenCategories(prevState => {
		// 		let res = prevState.filter(item => item !== category)
		// 		return [...res]
		// 	})
		// }
		
		// if (result) {
		// 	// setChosenCategories(prevState => [...prevState, category])
		// 	setChosenCategories(prevState => {
		// 		let res = prevState.filter(item => item !== category)
		// 		return [...res]
		// 	})
		// } else {
		// 	setChosenCategories(prevState => [...prevState, {item: category}])
		// }
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
			className={styles.collectionCheckBox}
			key={id}>
			<input
				type="checkbox"
				id={id}/>
			<label
				onClick={() => handleClickChosenCategories(item)}
				htmlFor={id} className={styles.collectionItemLabel}>{item}</label>
		</li>
	);
};

export default Checkbox;
