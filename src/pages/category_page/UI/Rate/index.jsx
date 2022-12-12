import React from 'react';
import styles from './Rating.module.scss'

const Rating = ({ cardId, onClickProduct }) => {
	
	const [rating, setRating] = React.useState(0);
	const [hover, setHover] = React.useState(0);
	
	// const clickMe = (id) = {
	//
	// }
	//
	return (
		<div className={styles.root}>
			{(Array(5).fill(0)).map((item, index) => {
				index += 1;
				return (
					<svg
						key={index}
						onClick={() => {
							setRating(index)
								onClickProduct(cardId, rating)
						}}
						onMouseEnter={() => setHover(index)}
						onMouseLeave={() => setHover(rating)}
						width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							style={{
								fill: index <= (hover || rating) ? '#568FFF' : 'black',
								fillOpacity: index <= (hover || rating) ? '1' : '0.1'
							}}
							d="M4.51329 18.8039C4.03079 19.0514 3.48329 18.6176 3.58079 18.0639L4.61829 12.1514L0.214537 7.95638C-0.196713 7.56388 0.0170372 6.84638 0.568287 6.76888L6.69079 5.89888L9.42079 0.490134C9.66704 0.00263374 10.3333 0.00263374 10.5795 0.490134L13.3095 5.89888L19.432 6.76888C19.9833 6.84638 20.197 7.56388 19.7845 7.95638L15.382 12.1514L16.4195 18.0639C16.517 18.6176 15.9695 19.0514 15.487 18.8039L9.99829 15.9839L4.51204 18.8039H4.51329Z" fill="black" fillOpacity="0.1"/>
					</svg>
				)
			})}</div>
	);
};

export default Rating;