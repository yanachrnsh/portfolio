import Navbar from '../Navbar/Navbar';
import Logo from '../../img/logo-black.png';
import styleContainer from '../../_main.module.scss';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className={styles.Header}>
			<div className={styleContainer.Container}>
				<div className={styles.Header__wrapper}>
					<Link to="/">
						<img src={Logo} alt="Logotype" />
					</Link>
					<Navbar />
				</div>
			</div>
		</header>
	);
};

export default Header;
