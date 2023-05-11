import { useSelector } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import styles from './CartItems.module.scss';

const CartItems = () => {
	const cartProduct = useSelector((state) => state.cart);

	return (
		<div className={styles.Cart__list}>
			{cartProduct &&
				cartProduct.products.map((product) => (
					<div key={product.id}>
						<CartItem product={product}></CartItem>
					</div>
				))}
		</div>
	);
};

export default CartItems;
