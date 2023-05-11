import { Link } from 'react-router-dom';
import { memo } from 'react';
import styles from './CartItem.module.scss';
import { removeFromCart, updateTotalCount } from '../../slices/CartSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ product }) => {
	const { title, img, price, id } = product;

	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(removeFromCart(id));
		dispatch(updateTotalCount(price));
	};

	return (
		<div className={styles.Item}>
			<div className={styles.Item__content}>
				<button onClick={handleDelete} className={styles.Item__deletebtn}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<img src={img} alt={title} className={styles.Item__image} />
				<div>
					<p className={styles.Item__category}>Dress</p>
					<Link to="#" className={styles.Item__name}>
						{' '}
						{title}
					</Link>
				</div>
			</div>
			<p>${price}</p>
		</div>
	);
};

export default memo(CartItem);
