import React from 'react';
import styles from './Pagination.module.scss'

const Pagination = () => {
	return (
		<div className={styles.root}>
			<ul className={styles.paginationBlock}>
				<li className={styles.item || (styles.item && styles.backArrow)}>
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.82012 17.7001L0.120117 9.00005L8.82012 0.300049L9.88012 1.36005L2.24012 9.00005L9.88012 16.64L8.82012 17.7001Z"
							fill="black" fillOpacity="0.3"/>
					</svg>
				</li>
				<li className={styles.item}>1</li>
				<li className={styles.item}>2</li>
				<li className={styles.item && styles.active}>3</li>
				<li className={styles.item}>...</li>
				<li className={styles.item}>20</li>
				<li className={styles.item || (styles.item && styles.nextArrow)}>
					<svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.18012 17.7001L0.120117 16.64L7.76012 9.00005L0.120117 1.36005L1.18012 0.300049L9.88012 9.00005L1.18012 17.7001Z"
							fill="black" fillOpacity="0.3"/>
					</svg>
				</li>
			</ul>
		</div>
	);
};

export default Pagination;