import React from 'react';
import styles from './Text.module.scss'
import {MyContext} from "../../../assets/utils/context";

type TextProps = {
	children: React.ReactNode;
	
	checkValue: string;
	checkType: string;
	
	categoryId: number;
}

const Text: React.FC<TextProps> = ({ children, checkValue, checkType, categoryId}) => {
	const context = React.useContext(MyContext)
	if (checkType === 'none') {
		switch (checkValue) {
			case 'disabled':
				return <span className={styles.category_disabled}>{children}</span>
			default:
				return <span
					className={`${categoryId === context!.activeCategoryIdFirstMenu ? styles.category_active : styles.category}`}>{children}</span>
		}
	} else {
		switch (checkValue) {
			case ('unchecked' || 'checked'):
				return <span className={styles[checkValue]}>{children}</span>
			default:
				return <span className={styles[checkValue]}>{children}</span>
		}
	}
	
	// return (
	// 	<span className={`${styles[textStyle]} ${styles[checkValue]} ${styles[`${textStyle}_category_${checkValue}`]}`}>{children}</span>
	// );
};

export default Text;