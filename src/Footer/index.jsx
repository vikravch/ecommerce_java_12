import React from 'react';
import styles from './footer.module.scss'
import InfoList from "./InfoList";
import SocialMedia from "./SocialMedia";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<InfoList/>
				<SocialMedia/>
			</div>
		</footer>
	);
};

export default Footer;