import React from 'react';
import styles from './AddToCartBtn.module.scss'

const AddToCartBtn = () => {
	
	const [isActive, setIsActive] = React.useState(false)
	
	return (
		<div
			onClick={() => setIsActive(!isActive)}
			className={isActive ? styles.on : styles.off}>
				<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12.8333 4.83342H10.3333V4.00008C10.3333 3.11603 9.98212 2.26818 9.357 1.64306C8.73188 1.01794 7.88403 0.666748 6.99998 0.666748C6.11592 0.666748 5.26808 1.01794 4.64296 1.64306C4.01784 2.26818 3.66665 3.11603 3.66665 4.00008V4.83342H1.16665C0.945633 4.83342 0.733671 4.92121 0.577391 5.07749C0.421111 5.23377 0.333313 5.44573 0.333313 5.66675V14.8334C0.333313 15.4965 0.596705 16.1323 1.06555 16.6012C1.53439 17.07 2.17027 17.3334 2.83331 17.3334H11.1666C11.8297 17.3334 12.4656 17.07 12.9344 16.6012C13.4033 16.1323 13.6666 15.4965 13.6666 14.8334V5.66675C13.6666 5.44573 13.5788 5.23377 13.4226 5.07749C13.2663 4.92121 13.0543 4.83342 12.8333 4.83342ZM5.33331 4.00008C5.33331 3.55805 5.50891 3.13413 5.82147 2.82157C6.13403 2.50901 6.55795 2.33341 6.99998 2.33341C7.44201 2.33341 7.86593 2.50901 8.17849 2.82157C8.49105 3.13413 8.66665 3.55805 8.66665 4.00008V4.83342H5.33331V4.00008ZM12 14.8334C12 15.0544 11.9122 15.2664 11.7559 15.4227C11.5996 15.579 11.3877 15.6667 11.1666 15.6667H2.83331C2.6123 15.6667 2.40034 15.579 2.24406 15.4227C2.08778 15.2664 1.99998 15.0544 1.99998 14.8334V6.50008H3.66665V7.33342C3.66665 7.55443 3.75444 7.76639 3.91072 7.92267C4.067 8.07895 4.27897 8.16675 4.49998 8.16675C4.72099 8.16675 4.93295 8.07895 5.08923 7.92267C5.24551 7.76639 5.33331 7.55443 5.33331 7.33342V6.50008H8.66665V7.33342C8.66665 7.55443 8.75444 7.76639 8.91072 7.92267C9.067 8.07895 9.27896 8.16675 9.49998 8.16675C9.72099 8.16675 9.93295 8.07895 10.0892 7.92267C10.2455 7.76639 10.3333 7.55443 10.3333 7.33342V6.50008H12V14.8334Z" fill="#2D74FF"/>
				</svg>
		</div>
	);
};

export default AddToCartBtn;