import React from 'react';
import styles from "../../footer.module.scss";
import {getHelpList} from "./lists";


const GetHelpList = () => {
	return (
		<li className={styles.infoListLi}>
			<ul className={styles.getHelpList}>
				<li><h3>Get help</h3></li>
				{
					getHelpList.map((obj, id) => (
						<li
							className={styles.infoListItem}
							key={obj.id}>{obj.title}</li>
					))
				}
			</ul>
		</li>
	);
};

export default GetHelpList;