import React from 'react';
import styles from './Content.module.scss'
import ProductCard from "./ProductCard/ProductCard";
import products from "./list";


const Content = () => {
	return (
		<div className={styles.content}>
			{products.map((product, index) => (
		<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
};

export default Content;