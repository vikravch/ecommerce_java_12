import React from 'react';
import styles from "../../../presentation/CategoryPage.module.scss";

const InfoPages: React.FC = () => {
	return (
		<div className={styles.categoryInfoPages}>
			<span>Men</span>
			<span>/</span>
			<span>T-shirts</span>
		</div>
	);
};

export default InfoPages;