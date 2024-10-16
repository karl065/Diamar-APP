import { createSlice } from '@reduxjs/toolkit';

const componentesSlices = createSlice({
	name: 'componentes',
	initialState: {
		darkMode: null,
	},
	reducers: {
		setDarkMode: (state, action) => {
			state.darkMode = action.payload;
		},
	},
});

export const { setDarkMode } = componentesSlices.actions;

export default componentesSlices.reducer;
