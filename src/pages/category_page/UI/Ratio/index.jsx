import React from 'react';
import styles from './Ratio.module.scss'

const Ratio = ({item, id}) => {
	
	// const [isActive, setIsActive] = React.useState(false)
	
	return (
		<li className={styles.styleCheckBox} key={id}>
			<input type="radio" id={item}/>
			<label htmlFor={item} className={styles.styleItemLabel}>{item}</label>
		</li>
	);
};

export default Ratio;