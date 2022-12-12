import React from 'react';
import styles from './ProductBlock.module.scss'
import productImg from '../../../assets/img/product.png'

const ProductBlock = () => {
	return (
		<div className={styles.root}>
			<img className={styles.img} src={productImg} alt="Product"/>
		</div>
	);
};

export default ProductBlock;