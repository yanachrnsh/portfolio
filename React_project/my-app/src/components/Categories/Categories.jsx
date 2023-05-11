import React, { useState } from 'react';
import Category from '../Category/Category';
import { imgGlasses, imgHandbags, imgSneakers } from '../../img';
import styleContainer from '../../_main.module.scss';
import styles from './Categories.module.scss';

const Categories = () => {
	const [category] = useState([
		{
			title: 'Glasses',
			img: imgGlasses,
			id: 1,
		},

		{
			title: 'Sneakers',
			img: imgSneakers,
			id: 2,
		},
		{
			title: 'Handbags',
			img: imgHandbags,
			id: 3,
		},
	]);

	return (
		<section className={styles.Category}>
			<div className={styleContainer.Container}>
				<h2 className={styles.Category__title}>This Season Collection</h2>
				<div className={styles.Category__grid}>
					{category.map((categories) => {
						return <Category categories={categories} key={categories.id} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default Categories;
