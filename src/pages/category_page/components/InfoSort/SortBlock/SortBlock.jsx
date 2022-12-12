import React from 'react';
import styles from "./SortBlock.module.scss";
import SortItem from "./SortItem";

const SortBlock = () => {
	return (
		<div className={styles.sortBlock}>
			<SortItem />
		</div>
	);
};

export default SortBlock;