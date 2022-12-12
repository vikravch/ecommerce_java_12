import React from 'react';
import styles from './Subscribe.module.scss'
import FormBlock from "./FormBlock";
import ProductBlock from "./ProductBlock";

const Subscribe = () => {
	return (
		<div className={styles.subscribeBlock}>
		<FormBlock />
		<ProductBlock />
		</div>
	);
};

export default Subscribe;