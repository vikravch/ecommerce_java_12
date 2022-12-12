import React from 'react';
import styles from './CheckboxForSizes.module.scss'

const CheckboxForSizes = ({ chosenItems, clickedItem, id, item }) => {
	
	return (
		<li
			onClick={() => {
			}}
			className={styles.sizeCheckBox} key={id}>
			<input
				type="checkbox"
				id={id}/>
			<label htmlFor={id} className={styles.sizeItemLabel}>{item}</label>
		</li>
	);
};

export default CheckboxForSizes;
