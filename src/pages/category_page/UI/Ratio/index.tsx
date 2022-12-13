import React from 'react';
import styles from './Ratio.module.scss'

interface RadioProps {
	id: string;
	value: string;
}

const Radio: React.FC<RadioProps> = ({value, id}) => {
	
	// const [isActive, setIsActive] = React.useState(false)
	
	return (
		<li className={styles.styleCheckBox} key={id}>
			<input type="radio" id={value}/>
			<label htmlFor={value} className={styles.styleItemLabel}>{value}</label>
		</li>
	);
};

export default Radio;