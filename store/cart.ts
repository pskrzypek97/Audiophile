import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ChosenProduct } from '../models/chosenProduct';

interface CartState {
	cart: ChosenProduct[];
	id: number;
	total: number;
}

const initialState: CartState = {
	cart: [],
	id: 0,
	total: 0,
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ChosenProduct>) => {
			const findProduct = state.cart.find(
				(product) => product.id === action.payload.id
			);

			if (!findProduct) state.cart.push(action.payload);
			else {
				findProduct.amount += action.payload.amount;
				findProduct.price += action.payload.price;
			}

			if (state.cart.length === 1) state.total = state.cart[0].price;
			if (state.cart.length > 1)
				state.total = state.cart.reduce(
					(prevPrice: number, { price }) => prevPrice + price,
					0
				);
		},
		incrementAmount: (state, action: PayloadAction<number>) => {
			const chosenProduct = state.cart.find(
				(product) => product.id === action.payload
			);
			chosenProduct!.amount++;
			chosenProduct!.price += chosenProduct!.originalPrice;

			state.total += chosenProduct!.originalPrice;
		},
		subtractAmount: (state, action: PayloadAction<number>) => {
			const chosenProduct = state.cart.find(
				(product) => product.id === action.payload
			);
			if (chosenProduct!.amount === 1) {
				const chosenProductIndex = state.cart.indexOf(chosenProduct!.id as any);
				state.cart.splice(chosenProductIndex, 1);

				state.total -= chosenProduct!.originalPrice;
			} else {
				chosenProduct!.amount--;
				chosenProduct!.price -= chosenProduct!.originalPrice;

				state.total -= chosenProduct!.originalPrice;
			}
		},
		removeAll: (state) => {
			state.cart = [];
			state.total = 0;
		},
		setId: (state, action) => {
			state.id = action.payload;
		},
		resetId: (state) => {
			state.id = 0;
		},
		setCartSlice: (state, action) => {
			state.cart = action.payload.cart;
			state.total = action.payload.total;
			state.id = action.payload.id;
		},
	},
});

export const {
	addToCart,
	removeAll,
	incrementAmount,
	subtractAmount,
	setId,
	resetId,
	setCartSlice,
} = cartSlice.actions;

export default cartSlice.reducer;
