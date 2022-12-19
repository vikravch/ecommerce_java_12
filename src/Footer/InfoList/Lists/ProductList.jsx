import React from 'react';
import styles from "../../footer.module.scss";
import {productList} from "./lists";


const ProductList = () => {
	return (
		<li className={styles.infoListLi}>
		<ul className={styles.productsList}>
			<li><h3>Products</h3></li>
			{
				productList.map((obj, id) => (
					<li
						className={styles.infoListItem}
						key={obj.id}>{obj.title}</li>
				))
			}
		</ul>
		</li>
	);
};

export default ProductList;