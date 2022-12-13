import React from 'react';
import styles from './CheckboxForSizes.module.scss'

interface CheckboxProps {
	id: string;
	value: string;
}

const CheckboxForSizes: React.FC<CheckboxProps> = ({ id, value }) => {
	
	return (
		<li
			// onClick={() => {}}
			className={styles.sizeCheckBox}>
			<input
				type="checkbox"
				id={id}/>
			<label htmlFor={id} className={styles.sizeItemLabel}>{value}</label>
		</li>
	);
};

export default CheckboxForSizes;
