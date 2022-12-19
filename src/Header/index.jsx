import React from 'react';
import styles from './header.module.scss'
import Navigation from "./Navigation";
import RightMenu from "./RightMenu";

const Header = () => {
	return (
		<header className={styles.header}>
			<Navigation/>
			<RightMenu/>
		</header>
	);
};

export default Header;