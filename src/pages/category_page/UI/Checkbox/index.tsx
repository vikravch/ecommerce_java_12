import React from 'react';
import styles from './Checkbox.module.scss'

interface CheckboxProps {
	checkValue: string;
}

const Checkbox: React.FC<CheckboxProps> = ({checkValue}) => {
	switch (checkValue) {
		case 'unchecked':
			return (<svg
				className={styles.unchecked}
				width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M17 1H5C2.79086 1 1 2.79086 1 5V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V5C21 2.79086 19.2091 1 17 1ZM5 0C2.23858 0 0 2.23858 0 5V17C0 19.7614 2.23858 22 5 22H17C19.7614 22 22 19.7614 22 17V5C22 2.23858 19.7614 0 17 0H5Z"
				      fill="black" fillOpacity="0.3"/>
			</svg>)
		case 'checked':
			return (<svg
				className={styles.checked}
				width="22" height="22" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd"
				      d="M4.5 0.75C2.42893 0.75 0.75 2.42893 0.75 4.5V13.5C0.75 15.5711 2.42893 17.25 4.5 17.25H13.5C15.5711 17.25 17.25 15.5711 17.25 13.5V4.5C17.25 2.42893 15.5711 0.75 13.5 0.75H4.5ZM3.75 9.045L7.5225 12.8175L14.295 6.0375L13.5 5.25L7.5225 11.22L4.545 8.25L3.75 9.045Z"
				      fill="#2D74FF"/>
			</svg>)
		case 'disabled':
			return (<svg
				className={styles.disabled}
				width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0 5C0 2.23858 2.23858 0 5 0H17C19.7614 0 22 2.23858 22 5V17C22 19.7614 19.7614 22 17 22H5C2.23858 22 0 19.7614 0 17V5Z"
					fill="black" fillOpacity="0.1"/>
			</svg>)
		
		
		default:
			return <></>
	}
};

export default Checkbox;