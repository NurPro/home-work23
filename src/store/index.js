import { configureStore } from '@reduxjs/toolkit';
import { mealsSlice } from './meals/mealsSlice';
import { basketSlice } from './basket/basketSlice';
import { snackBarSlice } from './snackBar';

export const store = configureStore({
	reducer: {
		[mealsSlice.name]: mealsSlice.reducer,
		[basketSlice.name]: basketSlice.reducer,
		[snackBarSlice.name]: snackBarSlice.reducer,
	},
});
