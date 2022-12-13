import React from 'react';
import styles from "../../presentation/CategoryPage.module.scss";
import CategoryInfoBlock from "./InfoBlock/CategoryInfoBlock";
import SortBlock from "./SortBlock/SortBlock";

const InfoSort: React.FC = () => {
	return (
		<div className={styles.categoryBlock}>
			<CategoryInfoBlock />
			<SortBlock />
		</div>
	);
};

export default InfoSort;