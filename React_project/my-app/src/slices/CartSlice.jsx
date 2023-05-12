import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
	products: [],
	totalPrice: 0,
	numberOfItems: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addToCart: (state, action) => {
			state.products.push(action.payload);
			state.numberOfItems = state.products.length;
		},
		removeFromCart: (state, action) => {
			state.products = state.products.filter(
				(product) => action.payload !== product.id
			);
			state.numberOfItems = state.products.length;
		},
		setTotalCount: (state, action) => {
			state.totalPrice = state.totalPrice + action.payload;
		},

		updateTotalCount: (state, action) => {
			state.totalPrice = state.totalPrice - action.payload;
		},
	},
});

export const {
	addToCart,
	removeFromCart,
	setTotalCount,
	updateTotalCount
} = cartSlice.actions;

export default cartSlice.reducer;
