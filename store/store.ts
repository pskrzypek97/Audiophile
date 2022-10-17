import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';

// add reducer to the store so it's available to all components
export default configureStore({
	reducer: {
		cart: cartReducer,
	},
});
