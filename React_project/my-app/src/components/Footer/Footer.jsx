import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../../_main.module.scss';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
			<div className={styleContainer.Container}>
				<div className={styles.Footer__wrapper}>
					<p className={styles.Footer__copyright}>© Shop</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
