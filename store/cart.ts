import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const findProduct = state.cart.find(
				(product) => product.id === action.payload.id
			);

			if (!findProduct) state.cart.push(action.payload);
			else {
				findProduct.amount += action.payload.amount;
				findProduct.price += action.payload.price;
			}
		},
		incrementAmount: (state, action) => {
			const chosenProduct = state.cart.find(
				(product) => product.id === action.payload
			);
			chosenProduct.amount++;
			chosenProduct.price += chosenProduct.originalPrice;
		},
		subtractAmount: (state, action) => {
			const chosenProduct = state.cart.find(
				(product) => product.id === action.payload
			);
			if (chosenProduct.amount === 1) {
				const chosenProductIndex = state.cart.indexOf(chosenProduct.id);
				state.cart.splice(chosenProductIndex, 1);
			} else {
				chosenProduct.amount--;
				chosenProduct.price -= chosenProduct.originalPrice;
			}
		},
		removeAll: (state) => {
			state.cart = [];
		},
	},
});

export const { addToCart, removeAll, incrementAmount, subtractAmount } =
	cartSlice.actions;

export default cartSlice.reducer;
