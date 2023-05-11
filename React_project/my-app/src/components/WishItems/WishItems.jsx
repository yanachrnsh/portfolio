import WishItem from '../WishItem/WishItem';
import { useSelector } from 'react-redux';

const WishItems = () => {
	const wishProducts = useSelector((store) => store.whishlist);

	return (
		<div>
			{wishProducts &&
				wishProducts.products.map((product) => (
					<div key={product.id}>
						<WishItem product={product} />
					</div>
				))}
		</div>
	);
};

export default WishItems;
