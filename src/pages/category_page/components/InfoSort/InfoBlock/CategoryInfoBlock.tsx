import React from 'react';
import styles from "../../../presentation/CategoryPage.module.scss";
import InfoPages from "./InfoPages";
import InfoTitle from "./InfoTitle";

const CategoryInfoBlock: React.FC = () => {
	return (
		<div className={styles.categoryInfo}>
			<InfoPages />
			<InfoTitle />
		</div>
	);
};

export default CategoryInfoBlock;