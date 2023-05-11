import { memo } from 'react';
import styles from './CartSummary.module.scss';
import classname from 'classnames';
import { useSelector } from 'react-redux';

const CartSummary = () => {
	const countState = useSelector((state) => state.cart);

	return (
		<div>
			<div className={styles.Summary}>
				<h4 className={styles.Summary__title}>Summary</h4>

				<div className={styles.Summary__body}>
					<div className={styles.Summary__line}>
						<div>Total</div>
						<div>${countState.totalPrice}</div>
					</div>
				</div>

				<button
					type="submit"
					className={classname('Btn', 'BtnDark', 'BtnFullWidth')}
				>
					Check Out
				</button>
			</div>
		</div>
	);
};

export default memo(CartSummary);
