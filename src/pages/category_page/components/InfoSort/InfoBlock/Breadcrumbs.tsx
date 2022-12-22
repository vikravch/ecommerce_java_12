import React from 'react';
import styles from "../../../presentation/CategoryPage.module.scss";

const Breadcrumbs: React.FC = () => {
	return (
		<div className={styles.breadcrumbs}>
			<span>Men</span>
			<span>/</span>
			<span>T-shirts</span>
		</div>
	);
};

export default Breadcrumbs;