import React from 'react';
import styles from './Content.module.scss'
import ProductCard from "./ProductCard/ProductCard";
import { productsList } from "./list";
import {Product} from "./list";

const Content:React.FC = () => {
	return (
		<div className={styles.content}>
			{productsList.map((product: Product, index: number) => (
		<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
};

export default Content;