import React from 'react';
import Home from './pages/Home/Home';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import Wishlist from './pages/Wishlist/Wishlist';
import Cart from './pages/Cart/Cart';

function App() {
	return (
		<div className={styles.App}>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/wishlist" element={<Wishlist />}></Route>
				<Route path="/cart" element={<Cart />}></Route>
			</Routes>
		</div>
	);
}

export default App;
