import React from 'react';
import styles from "../../footer.module.scss";
import {legalsList} from "./lists";

const LegalsList = () => {
	return (
		<li className={styles.infoListLi}>
			<ul className={styles.legalsList}>
				<li><h3>Legals</h3></li>
				{
					legalsList.map((obj, id) => (
						<li
							className={styles.infoListItem}
							key={obj.id}>{obj.title}</li>
					))
				}
			</ul>
		</li>
	);
};

export default LegalsList;