import React, {useEffect} from 'react';
import styles from "./ProductCard.module.scss";
import {Product} from "../list";
import AddToCartBtn from "../../../UI/AddToCartBtn";
import Rating from "../../../UI/Rate";

type Props = {
	product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {
	
	const onClickProduct = (index: number, rating: number) => {
		console.log('Click on product - ' + (index + 1) + ' & Rating - ' + rating)
	}
	
	return (
		<div className={styles.productCard}>
			<div className={styles.card}>
				{product.sale === 0 ? null : (<div className={styles.sale}>-{product.sale}%</div>)}
				<img className={styles.cardImage} draggable={"false"} src={product.img} alt={product.title}/>
				<div className={styles.addToCartBtn}>
					<AddToCartBtn/>
				</div>
			</div>
			
			<Rating cardId={product.id} onClickProduct={onClickProduct}/>
			
			<div className={styles.id}>#714{product.id}</div>
			<div className={styles.description}>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>${product.price}</div>
			</div>
		</div>
	);
};

export default ProductCard;