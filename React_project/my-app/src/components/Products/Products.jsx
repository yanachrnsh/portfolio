import React, { useEffect, useState } from 'react';
import Title from '../Title/Title';
import classnames from 'classnames';
import Product from '../Product/Product';
import '../../_btn.module.scss';
import styleContainer from '../../_main.module.scss';
import styles from './Products.module.scss';
import { Link } from 'react-router-dom';

const Products = () => {
	const [productCard, setProducts] = useState([]);

	useEffect(() => {
		const getAllProducts = async () => {
			const res = await fetch(
				'https://64066269862956433e510869.mockapi.io/products'
			);
			const allProducts = await res.json();
			setProducts(allProducts);
		};
		getAllProducts();
	}, []);

	return (
		<section className={styles.Products}>
			<div className={styleContainer.Container}>
				<Title className={styles.Products__title}>This Week's Highlights</Title>
				<div className={styles.Products__grid}>
					{productCard?.map((product) => {
						return <Product product={product} key={product.id} />;
					})}
				</div>
				<div className={styles.Products__bottom}>
					<Link to="/" className={classnames('Btn', 'BtnOutlinePrimary')}>
						Shop Now
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Products;
