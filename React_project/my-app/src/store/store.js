import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../slices/WishlistSlice';
import cartSlice from '../slices/CartSlice';
const store = configureStore({
	reducer: {
		whishlist: wishlistReducer,
		cart: cartSlice,
	},
});

export default store;
