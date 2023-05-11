import Title from '../../components/Title/Title';
import Header from '../../components/Header/Header';
import WishItems from '../../components/WishItems/WishItems';
import styles from './Wishlist.module.scss';
import styleContainer from '../../_main.module.scss';

const Wishlist = () => {
	return (
		<div className={styleContainer.Container}>
			<div>
				<Header />
				<Title className={styles.Wishlist__title}>Wishlist</Title>
			</div>
			<WishItems />
		</div>
	);
};

export default Wishlist;
