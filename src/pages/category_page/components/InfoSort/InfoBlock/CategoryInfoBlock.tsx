import React from 'react';
import styles from "../../../presentation/CategoryPage.module.scss";
import Breadcrumbs from "./Breadcrumbs";
import InfoTitle from "./InfoTitle";

const CategoryInfoBlock: React.FC = () => {
	return (
		<div className={styles.categoryInfo}>
			<Breadcrumbs />
			<InfoTitle />
		</div>
	);
};

export default CategoryInfoBlock;