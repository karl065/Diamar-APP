import { configureStore } from '@reduxjs/toolkit';
import appReducerUsuarios from './Slices/SlicesUsuarios/SlicesUsuarios';
import appReducerComponentes from './Slices/SlicesComponentes/SlicesComponentes';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: {
		usuarios: appReducerUsuarios,
		componentes: appReducerComponentes,
	},
	middleware: [thunk],
});

export default store;
