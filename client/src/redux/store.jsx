import { configureStore } from '@reduxjs/toolkit';
import appReducerUsuarios from './Slices/SlicesUsuarios/SlicesUsuarios';
import { thunk } from 'redux-thunk';

const store = configureStore({
	reducer: {
		usuarios: appReducerUsuarios,
	},
	middleware: [thunk],
});

export default store;
