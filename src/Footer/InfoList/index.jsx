import React from 'react';
import styles from "../footer.module.scss";
import Logo from "./Logo";
import ProductList from "./Lists/ProductList";
import GetHelpList from "./Lists/GetHelpList";
import LegalsList from "./Lists/LegalsList";
import ContactList from "./Lists/ContactList";

const InfoList = () => {
	return (
		<div className={styles.info}>
		<ul className={styles.infoList}>
			<Logo/>
			<ProductList/>
			<GetHelpList/>
			<LegalsList/>
			<ContactList/>
		</ul>
		</div>
	);
};

export default InfoList;