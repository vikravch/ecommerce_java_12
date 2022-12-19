import React from 'react';
// import styles from "../header.module.scss";
import styles from "./navigation.module.scss";
import navItems from './naviList'

const Navigation = () => {
	const [activeIndex, setActiveIndex] = React.useState(0)
	
	return (
		<nav>
			<ul className={styles.listMenu}>
				<li className={styles.menuItem}><h1 className={styles.logo}>LOGO</h1></li>
				{navItems.map((obj, index) => (
					<li
						onClick={() => setActiveIndex(index)}
						key={obj.id}
						className={styles.menuItem}
						style={{
							color: activeIndex === index ? '#000000' : ''
						}}
					>{obj.title}</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;