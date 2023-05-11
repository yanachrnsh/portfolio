import Title from '../../components/Title/Title';
import styles from './Cart.module.scss';
import styleContainer from '../../_main.module.scss';
import CartItems from '../../components/CartItems/CartItems';
import CartSummary from '../../components/CartSummary/CartSummary';
import Header from '../../components/Header/Header';

const Cart = () => {
	return (
		<div>
	<Header/>
			<Title className={styles.Cart__title}>Shopping Cart</Title>
			<div className={styleContainer.Container}>
				<div className={styles.Cart__grid}>
					<CartItems></CartItems>
					<CartSummary></CartSummary>
				</div>
			</div>
		</div>
	);
};

export default Cart;
