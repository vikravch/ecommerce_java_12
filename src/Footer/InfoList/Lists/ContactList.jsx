import React from 'react';
import styles from "../../footer.module.scss";

const ContactList = () => {
	return (
		<li className={styles.infoListLi}>
			<ul className={styles.contactList}>
				<li><h3>Contact</h3></li>
				<li className={styles.infoListItem}>Email</li>
				<li className={styles.gmail}>ecommerce@gmail.com</li>
				<li className={styles.infoListItem}>Phone</li>
				<li className={styles.phone}>972 756 555-0123</li>
				<li className={styles.infoListItem}>Address</li>
				<li className={styles.address}>2464 Royal Ln.Mesa, New Jersey 45463</li>
			</ul>
		</li>
	);
};

export default ContactList;