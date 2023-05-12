import React from 'react';
import { useRef } from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

function Home() {
	const ref = useRef();

	const handleClick = () => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="Home">
			<Header />
			<main>
				<Banner handleClick={handleClick} />
				<Categories />
				<Products ref={ref} />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
