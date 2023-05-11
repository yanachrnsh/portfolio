import { createSlice } from '@reduxjs/toolkit';

const initialWishlistState = {
	products: [],
};

const wishlistSlice = createSlice({
	name: 'whishlist',
	initialState: initialWishlistState,
	reducers: {
		addToWishlist: (state, action) => {
			state.products.push(action.payload);
		},
		removeFromWishlist: (state, action) => {
			state.products = state.products.filter(
				(product) => action.payload !== product.id
			);
		},
	},
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
