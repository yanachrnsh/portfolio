
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

function Home() {

	return (
		<div className="Home">
			<Header />
			<main>
				<Banner />
				<Categories />
				<Products />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
